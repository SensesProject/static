# Settings 📟
## Modules 💈
`modules.json` holds a list of all modules that are visible in the toolkit and portals.

🔖 The file is available online at `https://dev.climatescenarios.org/settings/modules.json`

| Key | Type | Description |
| :--- | :--- | :--- |
| **Toolkit 👩‍🎤 and Portals 📎** | | |
| **id** | String | Unique id of the module |
| **title** | String | Title of the module (~30 characters max) |
| **description** | String | Description of the module (~130–180 characters) |
| **authors** | Array | designers and scientists that authored the module |
| **sources** | Array | Is an array of 2- or 1-element arrays containing first the label and second the link (if available). |
| **TOOLKIT 👩‍🎤** | | |
| **subtitle** | String | Learn module, explore module, database, … |
| **tags** | Array | Additional tags for the module (could be »Policy«, »Finance«) |
| **link** | [Boolean, String] | Path (absolute url or relative) to module or false (default) if coming soon |
| **visible** | Boolean | Is the module visible in the toolkit? Default is `true`. |
| **linkText** | [String, Boolean] | A custom link text. Default is `false` → »Read the module« |
| **gems** | String | Absolute link to the gems |
| **gemsAmount** | Number | Will be auto generated later |
| **downloadIDs** | Array | List of IDs pointing to `downloads.json` |
| **keywords** | String | Additional keywords used for search |
| **bg** | String | Background image for Toolkit |
| **PORTALS 📎** | | |
| **portal** | Array | The portal assigned to the module. Can be `Finance`, `Policy` or `null` if the module is not part of portals |
| **portal-num** | String | Position of the element in the portal based on the topic |
| **main-topic** | String | Main topic of the module, useful for building the subway line menu in Portal |
| **path** | String | path of the module |
| **readingTime** | String | Minutes (approx.) required to read the module |
| **share** | String | The module has/has not additional material that can be downloaded from the "share" section |
| **links** | Array | Collection to links |
| ↳ **general** | Object | The geneal path of the module |
| ↳ **data** | Object | Link to additional data |
| ↳ **gems** | Object | Link to GEMs view |
| ↳ **scenariofinder** | Object | Link to scenario finder view |

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
