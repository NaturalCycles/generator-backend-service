/* tslint:disable:ordered-imports */
console.log('startServer... ')
const bootstrapStartedAt = Date.now()

import 'tsconfig-paths/register'
import { createDefaultApp, startServer } from '@naturalcycles/backend-lib'
import { rootResource } from '@src/root.resource'

startServer({
  bootstrapStartedAt,
  expressApp: createDefaultApp({
    resources: {
      '/': rootResource,
    },
  }),
}).catch(err => {
  console.error(err)
  process.exit(1)
})
