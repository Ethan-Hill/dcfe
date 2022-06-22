import * as fs from 'node:fs'
import * as path from 'node:path'

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
         if (err) return cb(err)
         createFolderStructure(pth, subsub, (err: any) => {
            if (err) return cb(err)
            createFolderStructure(dir, copy, cb)
         })
      })
   } else {
      cb(null)
   }
}

export default createFolderStructure
