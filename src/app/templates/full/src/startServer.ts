console.log('startServer... ')

/* tslint:disable:ordered-imports */
import 'tsconfig-paths/register'
import '@src/bootstrap'
import { startServer } from '@naturalcycles/backend-lib'
import { expressApp } from './express.app'
import { warmup } from './warmup'

startServer({
  expressApp,
})
  .then(() => warmup())
  .catch(err => {
    console.error(err)
    process.exit(1)
  })
