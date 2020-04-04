import { getDefaultRouter, okHandler, statusHandler } from '@naturalcycles/backend-lib'

const router = getDefaultRouter()
export const rootResource = router

router.get('/', okHandler())

// router.get('/login.html', loginHtml(adminService))

router.get('/status', statusHandler())

router.get('/debug', async (req, res) => {
  res.json({
    // adminInfo: await adminService.getAdminInfo(req),
    headers: req.headers,
    // env: process.env, // can be sensitive
  })
})

router.get('/_ah/warmup', async (req, res) => {
  res.end()
})
