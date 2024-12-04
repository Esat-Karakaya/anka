import { priorities } from "./priorities.js";
import { softener } from "../utilities.js";
import { disectNoun } from "../noun/noun-handler.js"

// return [[adder, adder], [adder, adder, adder],]
export function disectVerb(toWord, fromWord, flags, state="kök" ) {

	const routes = [];
	// copy to prevent mutation (pass by ref is used in functions)
	const from = fromWord;

	if (toWord === from) return [routes]; // return [[]]
	for (const adderInfo of priorities[state]) {
		const newWord = adderInfo[0](from, flags);

		const sliced = toWord.slice(0, newWord.length);
		if (
			sliced === newWord ||
			sliced === softener(newWord, true)
		){
			let res;
			if (adderInfo[1] === "isim")
				res = cleanNounRes(disectNoun(toWord, newWord, "kök", false));
			else
				res = disectVerb(toWord, newWord, 0, adderInfo[1]);

			for (const route of res) {
				route.push(adderInfo[0]);
				routes.push(route);
			}
		}
	}

	return routes;
}

function cleanNounRes(routes) {
	const cleaned = new Set();

	for (const route of routes){
		const newRoute = [];
		for (const trio of route)
			newRoute.push(trio[0]);
		cleaned.add(newRoute);
	}

	return cleaned;
}

// flags
// 0b???_1: yabancıda yumuşama var -> 1  
// 0b??_?1: Türkçesinde yumuşama var -> 1
// 0b?_??1: yabancıda er, ar -> 0; ir, ır, ur, ür -> 1 
// 0b_???1: Türkçesinde ir, ır, ur, ür -> 1;  er, ar ->0
export function foreignVerbConvert(originalWord, rootInfo) {
	const converts = new Set();

	const {
		rootForeign,
		flags,
		local,
	} = rootInfo;

	const routes = disectVerb(originalWord, rootForeign, flags>>1);

	for (const route of routes){
		let target = local;

		if (route.length)
			target = route.at(-1)(target, flags>>2);

		for (let i = route.length-2; i >= 0; i--) {
			target = route[i](target);
		}

		converts.add(target);
	}
	return converts;
}

// console.log(foreignVerbConvert("dizayn etmeyecek", {
// 	rootForeign: "dizayn et",
// 	local: "tasarla",
// 	flags: 0b111
// }))