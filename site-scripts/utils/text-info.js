// returns alternatives for used forign word roots
// and original form of the foreign roots
function textForeignInfo(text) {
    const words = arrayifyText(text);

    const bundle = {
        rootsToFix: [],
        rootOriginals: {}
    };

    const { rootOriginals } = bundle;

    // Iterate over words
    for (let i = 0; i < words.length; i++) {
        const info = isForeign(words[i]);

        const second = twoWords[info.rootForeign];
        const secondSliced = words[i+1]?.slice(0, second?.length);

        if (
            twoWords[info.rootForeign] &&
            i<words.length-1 && (
                secondSliced === second || (
                    second === "et" &&
                    secondSliced==="ed"
                )
            )
        ) {
            /* double word */

            let merged;
            if ( secondSliced === second ){
                merged = info.rootForeign + " " + second;
            } else if (second === "et" && secondSliced==="ed"){
                merged = info.rootForeign + " et";
            }

            bundle.rootsToFix[merged] = verbs[merged] ?? nouns[merged];

            // initialize if necessary
            if (!rootOriginals[merged])  rootOriginals[merged]=[];

            // tag the unmodified word as having a foreign root
            rootOriginals[merged].push(words[i] + " " + words[i+1]); 

            i++;
        }else if (info.foreign) {
            const { rootForeign } = info;
            /* single word */
            bundle.rootsToFix[rootForeign] = info.rootLocal;

            // initialize if necessary
            if (!rootOriginals[rootForeign])  rootOriginals[rootForeign]=[];

            // tag the unmodified word as having a foreign root
            rootOriginals[rootForeign].push(words[i]); 
        }
    }

    return bundle;
}