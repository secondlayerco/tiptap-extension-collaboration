# @secondlayerco/tiptap-extension-collaboration

## Description
Forked from [@tiptap/extension-collaboration](https://github.com/ueberdosis/tiptap/tree/develop/packages/extension-collaboration).

### Changes from the original package
- Removed `addKeyboardShortcuts` from the `Collaboration` class (we handle keyboard shortcuts in a different way)
- Added `getUndoDepth` and `getRedoDepth` helpers

## Installation
Add the package to your project:
```bash
"tiptap-extension-collaboration": "github:secondlayerco/tiptap-extension-collaboration#1.1.0-napkin",
```

## How to update the package
- Clone [@tiptap/extension-collaboration](https://github.com/ueberdosis/tiptap/tree/develop/packages/extension-collaboration)
- Install the dependencies (`npm i` from the root of the package and `packages/extension-collaboration`)
- Open `dist/index.js` and compare it with the file in this package
- If there are changes, copy them to the file in this package
- Upgrade the dependencies in `package.json` to the latest versions
- Increment the version in `package.json` and `CHANGELOG.md`