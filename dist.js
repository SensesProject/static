import fs from 'fs'
import rimraf from 'rimraf'
import archiver from 'archiver'
import chalk from 'chalk'
import prettyBytes from 'pretty-bytes'

rimraf.sync('./dist')
fs.mkdirSync('./dist')

const modules = fs.readdirSync('./modules').filter(m => fs.lstatSync(`./modules/${m}`).isDirectory())

modules.forEach(m => {
  const fileOutput = fs.createWriteStream(`./dist/${m}.zip`)
  const archive = archiver('zip', { zlib: { level: 9 } })
  fileOutput.on('close', function () {
    console.log(`${chalk.cyan.bold(m)} ${chalk.yellow.bold('→')} ${chalk.magenta.bold(prettyBytes(archive.pointer()))} 📦`)
  })

  archive.pipe(fileOutput)
  archive.directory(`./modules/${m}`, m)
  archive.on('error', function (err) {
    throw err
  })
  archive.finalize()
})
