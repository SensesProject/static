import fs from 'fs'
import rimraf from 'rimraf'
import archiver from 'archiver'
import chalk from 'chalk'
import prettyBytes from 'pretty-bytes'
import path from 'path'

rimraf.sync('./dist')
fs.mkdirSync('./dist')
fs.mkdirSync('./dist/share')
fs.mkdirSync('./dist/settings')

const TARGET_PATH = `dist`

// Modules
const modules = fs.readdirSync('./modules').filter(m => fs.lstatSync(`./modules/${m}`).isDirectory())

modules.forEach(m => {
  const fileOutput = fs.createWriteStream(`./dist/share/${m}.zip`)
  const archive = archiver('zip', { zlib: { level: 9 } })
  fileOutput.on('close', function () {
    console.log(`${chalk.cyan.bold(m)} ${chalk.yellow.bold('→')} ${chalk.magenta.bold(prettyBytes(archive.pointer()))} 📦`)
  })

  archive.pipe(fileOutput)
  archive.directory(`./modules/share/${m}`, m)
  archive.on('error', function (err) {
    throw err
  })
  archive.finalize()
})

// Settings
const files = fs.readdirSync('./settings').filter(m => path.extname(`${m}`) === '.json')

files.forEach(f => {
  const from = `./settings/${f}`
  const to = `./${TARGET_PATH}/settings/${f}`
  fs.copyFile(from, to, (err) => {
    if (err) throw err;
    console.log(`${chalk.cyan.bold(from)} ${chalk.yellow.bold('→')} ${chalk.magenta.bold(to)} 📦`)
  });
})
