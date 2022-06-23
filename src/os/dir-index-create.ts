import * as fs from 'node:fs'

const createIndexFiles = (structure: Record<string, Record<string, unknown>>) => {
   if (Object.keys(structure).length > 0) {
      for (const dir in structure) {
         if (dir.includes('')) {
            fs.writeFile(`./${dir}/_index.scss`, '', (err: any) => {
               if (err) {
                  console.log(err)
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
            console.log(err)
         }
      })
   }
}

export default createIndexFiles
