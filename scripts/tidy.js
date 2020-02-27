import fs from 'fs'
import moduleSettings from '../settings/modules.json'
import BeautifyJSON from 'json-beautify'

const modules = moduleSettings.modules.map(m => {
  return {
    id: m.id,
    title: m.title,
    ...Object.fromEntries(Object.keys(m).filter(k => k !== 'id' || k !== 'title').sort().map(k => [k, m[k]]))
  }
})

fs.writeFileSync('settings/modules.json', `${BeautifyJSON({ modules }, null, 2, 200)}\n`)
