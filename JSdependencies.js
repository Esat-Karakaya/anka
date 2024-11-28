export const checkClean = [
	"site-scripts/shared.js",
	"site-scripts/check-clean/replacer.js",
	"site-scripts/check-clean/check-gui.js",
	"site-scripts/check-clean/list-item.js",

	// inject last
	"site-scripts/check-clean/index.js",
];

export const autoClean = [
	"site-scripts/shared.js",
	"site-scripts/auto-clean/shared.js",
	"site-scripts/auto-clean/editable-caret.js",
	"site-scripts/auto-clean/handle-editable.js",
	"site-scripts/auto-clean/handle-textarea.js",

	// inject last
	"site-scripts/auto-clean/index.js",
];

export const fixSite = [
	"site-scripts/shared.js",
	"site-scripts/site-fix/handle-body.js",

	// inject last
	"site-scripts/site-fix/index.js",
];