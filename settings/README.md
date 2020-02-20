# Settings 📟
## Modules 💈
`modules.json` holds a list of all modules that are visible in the toolkit and portals.

🔖 The file is available online at `https://dev.climatescenarios.org/settings/modules.json`

| Key | Type | Description | Used in |
| :--- | :--- | :--- | :--- |
| **title** | String | Title of the module (~30 characters max) | Both |
| **description** | String | Description of the module (~130–180 characters) | Both |
| **authors** | Array | designers and scientists that authored the module | Both |
| **link** | String | Absolute url to module | Both |
| **linkText** | [String, Boolean] | A custom link text. If set to false it uses the default »Read the module« | Toolkit |
| **gems** | Array | List of objects with title url for each GEM | Both |
| **portal** | String | The portal assigned to the module. Can be `Finance`, `Policy` or `null` if the module is not part of portals | Portals |
| **portal-num** | String | Position of the element in the portal based on the topic | Portals |
| **main-topic** | String | Main topic of the module, useful for building the subway line menu in Portal | Portals |
| **path** | String | path of the module | Portals |
| **readingTime** | String | Minutes (approx.) required to read the module | Portals |
| **downloadIDs** | Array | List of IDs pointing to `downloads.json` | Portals |
| **share** | String | The module has/has not additional material that can be downloaded from the "share" section | Portals |
| **bg** | String | background image for Toolkit | Toolkit |
| **alignRight** | Boolean | position of header in the Toolkit | Portals |
| **keywords** | Array | Additional keywords used for search | Toolkit |
| **tags** | Array | Additional tags for the module (could be »Policy«, »Finance«) | Portals |
| **links** | Object | Collection to links | general: | the geneal path of the module, | data: | link to additional data, | gems: | link to GEMs view, | scenariofinder: | link to scenario finder view. More can be added.

## Downloads 📦
`downloads.json` hold a list of all downloadable items. Modules can have multiple download items.

🔖 The file is available online at `https://dev.climatescenarios.org/settings/downloads.json`

| Key | Type | Description |
| :--- | :--- | :--- |
| **id** | String | Unique id of the download item |
| **label** | String | Label of the download item |
| **link** | String | Path to the item |
| **licence** | String | Description of the licence |
| **reference** | String | Reference line |
| **authors** | Array | Authors of the item |
| **description** | String | Description of the item |
| **previews** | Array | List of paths of preview images |
