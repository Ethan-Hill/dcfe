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

      for (const dir in structure['5-components']) {
         if (dir.includes('')) {
            fs.writeFile(`./5-components/${dir}/_index.scss`, '', (err: any) => {
               if (err) {
                  console.log(err)
               }
            })
         }
      }

      let mainContent = ''
      let secondContent = ''

      for (const dir in structure) {
         if (dir.includes('')) {
            mainContent += `@import '${dir}';\n`
         }
      }

      for (const dir in structure['5-components']) {
         if (dir.includes('')) {
            secondContent += `@import '${dir}';\n`
         }
      }

      fs.writeFile('./main.scss', mainContent, (err: any) => {
         if (err) {
            console.log(err)
         }
      })

      fs.writeFile('./5-components/_index.scss', secondContent, (err: any) => {
         if (err) {
            console.log(err)
         }
      })
   }
}

export default createIndexFiles
