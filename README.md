# Senses Share Materials and Settings 🔛
- downloadable material ([`./modules`](./modules)) 🔧
- settings/metadata for each module ([`./settings/modules.json`](./settings/modules.json)) and downloads ([`./settings/downloads.json`](./settings/downloads.json)) 🎚️
- preview images for downloads ([`./previews`](./previews)) 🖼

Here lives the single folder with downloadable material for each Senses module as well as the settings/metadata for each module.

## How to downloadable material 🔧
To provide downloadable material for your module you will have to create a
folder with the module name.

* Each folder will contain a __readme file__ to document the actual content of the
folder
* __Images__ will be named according to a standard convention:
```
[number]-[title].png
```
* Independently from __data formats__ each dataset should have consistent
metadata to support their use. Datasets will be named according the following
standard convention:
```
[number]-[title]-[data].csv
```

### Distribution 📦
There is a script to zip all the subfolders of `/modules` and place them into `/dist` as `[module-name].zip`.

__Setup__
```
npm install
```

__Zip__
```
npm run build
```

## How to settings 🎚️
More information about keys are located in [`./settings/`](./settings/)
Setting files are deployed here: `https://dev.climatescenarios.org/settings`

## How to previews 🖼
Place preview images in [`./previews`](./previews)

## Troubeshoot
For this issues:
```
import fs from 'fs'
^^^^^^

SyntaxError: Cannot use import statement outside a module
```
Try using a newer NodeJS version: `nvm use 13.9.0`
