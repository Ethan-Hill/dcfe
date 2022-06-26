import * as fs from 'node:fs'
import chalk = require('chalk')

const createIndexFiles = (structure: Record<string, Record<string, unknown>>) => {
   if (Object.keys(structure).length > 0) {
      for (const dir in structure) {
         if (dir.includes('')) {
            fs.writeFile(`./${dir}/_index.scss`, '', (err: any) => {
               if (err) {
                  console.log(chalk.white.bgRed.bold('Error while creating files!'))
               }
            })
         }
      }

      let mainContent = ''

      for (const dir in structure) {
         if (dir.includes('')) {
            mainContent += `@import '${dir}';\n`
         }
      }

      fs.writeFile('./_main.scss', mainContent, (err: any) => {
         if (err) {
            console.log(chalk.white.bgRed.bold('Error while creating files!'))
         }
      })
   }
}

export default createIndexFiles
