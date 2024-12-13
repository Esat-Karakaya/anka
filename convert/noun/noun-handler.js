// ALL CHARS MUST BE LOWERCASE

import { priorities, isimEylem } from "./priorities.js";

// returns possible routes to reach the word
// each route contains trios: function, funtion name and other function props wrapped around an arr
export function disectNoun(toWord, fromWord, wordState="kök", foreign=true) {
	if (toWord===fromWord) return [[]];
	const nextStates = priorities[wordState];

	const possibleRoutes = [];

	const additionalInfo = {
		yumuşamama: wordState === "kök" && foreign
	};

	for (const newSuffix in nextStates) {
		const suffixAdder = nextStates[newSuffix];

		const newWord = suffixAdder(fromWord, additionalInfo);

		if (newWord===toWord) {
			delete additionalInfo.yumuşamama; // prop deleted because it only applies to foreign word
			possibleRoutes.push([[suffixAdder, newSuffix, additionalInfo]]); 
		}

		else if (newWord===toWord.slice(0, newWord.length)) {
			const attempt = disectNoun(toWord, newWord, newSuffix);

			if (!attempt) continue;

			for (const route of attempt) {
				delete additionalInfo.yumuşamama;
				route.push([suffixAdder, newSuffix, additionalInfo])
				possibleRoutes.push(route);
			}
		}
	}

	for (const func of isimEylem) {
		const newWord = func(fromWord, additionalInfo)
		if (newWord===toWord.slice(0, newWord.length)) {
			const attempt = disectNoun(toWord, newWord, "isimEylem");

			if (!attempt[0]) continue;

			for (const route of attempt) {
				delete additionalInfo.yumuşamama;
				route.push([func, "isimEylem", additionalInfo])
				possibleRoutes.push(route);
			}
		}
	}

	return possibleRoutes;
}

function crudeNounConvert(fromWord, routes) {

	const possibleConverts = new Set();

	for (const route of routes){
		let target = fromWord;
		for (let i = route.length-1; i >= 0; i--) {
			const suffixI = route[i];
			target = suffixI[0](target, suffixI[2]);
		}

		possibleConverts.add(target);
	}

	return possibleConverts;
}

function insertS3(routes) { // MUTATION
	return routes.map(route => {
		let s3ToAdd = [priorities.kök.iyelikEkiS3, "iyelikEkiS3"];

		for (const transformer of route)
			if (transformer[1][1] =="y" && transformer[1][6] =="E")
				/*iyelik eki zaten var*/
				return route;

		// iyelik eki eklenmeli
		// i değişkeni ekin eklenebileceği pozisyon
		for (let i = route.length; i >= 0; i--) {
			if (
				( !route[i] || priorities[route[i][1]].iyelikEkiS3 ) &&
				( !route[i-1] || priorities.iyelikEkiS3[route[i-1][1]] )
			) {
				if (route[i-1]) route[i-1][2]=true;
				route.splice(i, 0, s3ToAdd);
				return route;
			}
		}

	})
}

// foreignFlags
// 0b_: noun -> 0, verb -> 1

// localFlags (noun)
// 0b_: 3.tekil yok -> 0, 3.tekil var -> 1
export function foreignNounConvert(originalWord, rootInfo) {

	const {rootForeign} = rootInfo;

	const pronouncedRoot = rootInfo.pronounce ?? rootForeign;

	let suffStart = rootForeign.length;
	originalWord.includes("'") && suffStart++;

	const pronouncedWord = 
		pronouncedRoot +
		originalWord.slice(suffStart);

	let routes = disectNoun(pronouncedWord, pronouncedRoot);

	if (rootInfo.flags & 1) {
		insertS3(routes);
	}

	return crudeNounConvert(rootInfo.local, routes);
}

/* console.log(foreignNounConvert("perspektifindekileri", {
	rootForeign:"perspektif",
	local:"bakış açı",
	foreignFlags:0b1,
	localFlags:0b0,
	pronounce:"perspektif"
})); */