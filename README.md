# Senses Share Materials and Settings 🔛
Here lives the single folder with downloadable material for each Senses module as well as the settings/metadata for each module.

## How to 🔧
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

## Distribution 📦
There is a script to zip all the subfolders of `/modules` and place them into `/dist` as `[module-name].zip`.

__Setup__
```
npm install
```

__Zip__
```
npm run build
```

## Settings 🎚️
More information about keys are located in [`./settings/`](./settings/)
Setting files are deployed here: `https://dev.climatescenarios.org/settings`
