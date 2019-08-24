import { memoFn } from '@naturalcycles/js-lib'
import { log } from '@src/srv/log.service'

export const warmup = memoFn(async () => {
  // warmup logic here
  log('warmup done')
})
