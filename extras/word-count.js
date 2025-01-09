const {local} = chrome.storage;
const cntCache={};

export async function addWordCnt(addVal, site) {
	if (!site) {
		let [tab] = await chrome.tabs.query({ active: true, lastFocusedWindow: true });
		site = (new URL(tab?.url)).hostname;
	}
	const storageToSet = {};

	if (site) {
		const key = site + "FixCnt";
		const cnt = cntCache[key] ?? Number((await local.get(key))[key] ?? 0);
		storageToSet[key] = cntCache[key] = cnt + addVal;
	}

	const cnt =
		cntCache.general ??
		Number((await local.get("generalFixCnt")).generalFixCnt ?? 0);

	storageToSet.generalFixCnt = cntCache.general = cnt + addVal;

	local.set(storageToSet);
}