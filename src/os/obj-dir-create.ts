import * as fs from 'node:fs'
import * as path from 'node:path'
import chalk = require('chalk')

const createFolderStructure = (dir: string, structure: Record<string, any>, cb: any = null) => {
   cb = (
      (cb: any) =>
      (...a: any) => {
         setTimeout(() => {
            cb.apply(null, ...a)
         })
      }
   )(cb)
   const subdirs = Reflect.ownKeys(structure)

   if (subdirs.length > 0) {
      const sub: string | any = subdirs[0]
      const pth = path.join(dir, sub)
      const subsub: Record<string, Record<string, unknown>> = structure[sub]
      const copy = Object.assign({}, structure)
      delete copy[sub]

      fs.mkdir(pth, (err: any) => {
         if (err) {
            console.log(chalk.white.bgRed.bold('Error while creating directories!'))

            return
         }

         createFolderStructure(pth, subsub, (err: any) => {
            if (err) {
               console.log(chalk.white.bgRed.bold('Error while creating directories!'))

               return
            }

            createFolderStructure(dir, copy, cb)
         })
      })
   } else {
      cb(null)
   }
}

export default createFolderStructure
