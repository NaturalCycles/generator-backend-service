import { getDefaultRouter, okMiddleware, serverStatusMiddleware } from '@naturalcycles/backend-lib'

const router = getDefaultRouter()
export const rootResource = router

router.get('/', okMiddleware())

// router.get('/login.html', loginHtml(adminService))

router.get('/status', serverStatusMiddleware())

router.get('/debug', async (req, res) => {
  res.json({
    // adminInfo: await adminService.getAdminInfo(req),
    headers: req.headers,
    // env: process.env, // can be sensitive
  })
})

router.get('/_ah/warmup', (req, res) => {
  res.end()
})
