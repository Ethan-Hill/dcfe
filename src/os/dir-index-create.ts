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
   }
}

export default createIndexFiles
