import { createRootHandler, getDefaultRouter } from '@naturalcycles/backend-lib'

const router = getDefaultRouter()
export const rootResource = router

router.get('/', createRootHandler())

router.get('/debug', async (req, res) => {
  res.json({
    env: process.env,
  })
})

router.get('/_ah/warmup', async (req, res) => {
  res.status(200).end()
})
