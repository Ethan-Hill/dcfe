import {Command} from '@oclif/core'

// import createSassDir from '../../os/index'
import createFolderStructure from '../../os/obj-dir-create'
import createIndexStructure from '../../os/dir-index-create'

export class sass extends Command {
   static args = [{name: 'firstArg'}]

   async run() {
      // const {args} = await this.parse(sass)
      // createSassDir(args.firstArg)

      const structure: Record<string, Record<string, unknown>> = {
         '0-vendor': {},
         '1-settings': {},
         '2-tools': {},
         '3-elements': {},
         '4-layouts': {},
         '5-components': {
            '1-features': {},
            '2-buttons': {},
            '3-text': {},
            '4-form': {},
            '5-controls': {},
            '6-displays': {},
            '7-items': {},
            '8-master': {},
         },
         '6-transitions': {},
         '7-utilities': {},
      }

      createFolderStructure(process.cwd(), structure, (err: any) => {
         if (err) console.log(err)
         else {
            createIndexStructure(structure)

            console.log('Success')
         }
      })
   }
}
