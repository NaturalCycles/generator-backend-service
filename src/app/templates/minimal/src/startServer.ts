/* tslint:disable:ordered-imports */
console.log('startServer... ')

import 'tsconfig-paths/register'
import { startServer } from '@naturalcycles/backend-lib'
import { pHang } from '@naturalcycles/js-lib'
import { runScript } from '@naturalcycles/nodejs-lib'
import { rootResource } from './root.resource'

runScript(async () => {
  await startServer({
    resources: [{
      path: '/',
      handler: rootResource,
    }],
  })

  await pHang() // keep server running
})

