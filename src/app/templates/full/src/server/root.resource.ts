import { getDefaultRouter, loginHtml, okHandler, statusHandler } from '@naturalcycles/backend-lib'
import { adminService } from '@src/admin/admin.service'
import { env } from '@src/srv/env.service'
import { warmup } from '@src/warmup'

const router = getDefaultRouter()
export const rootResource = router

router.get('/', okHandler())

router.get('/login.html', loginHtml(adminService))

router.get('/status',
  // reqAdmin(),
  statusHandler())

router.get('/debug',
  // reqAdmin(),
  async (req, res) => {
    res.json({
      adminInfo: await adminService.getAdminInfo(req),
      environment: env(),
      headers: req.headers,
      // env: process.env, // can be sensitive
    })
  }
)

router.get('/_ah/warmup', async (req, res) => {
  await warmup()
  res.end()
})
