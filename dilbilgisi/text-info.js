import { arrayifyText } from "./arrayify.js";
import { isForeign } from "./dilbilgisi.js";

// returns alternatives for used forign word roots
// and original form of the foreign roots
export function textForeignInfo(text) {
    const words = arrayifyText(text);

    const bundle = {
        rootsToFix: {}, // [dizayn, cool]
        rootOriginals: {} // {dizayn:[dizaynın, dizaynlar]}
    };

    const { rootOriginals } = bundle;

    // Iterate over words
    for (let i = 0; i < words.length; i++) {

        const merged = words[i] + " " + words[1+i];

        const info = isForeign(merged);

        if (info.foreign===false) continue; // word not foreign

        bundle.rootsToFix[info.rootForeign] = info.rootLocal;

        // initialize if necessary
        if (!rootOriginals[info.rootForeign]) rootOriginals[info.rootForeign]=[];

        if (info.twoWord) {
            rootOriginals[info.rootForeign].push(merged);
            i++;
            continue;
        }
        rootOriginals[info.rootForeign].push(words[i]);
    }

    return bundle;
}