import { createDefaultApp } from '@naturalcycles/backend-lib'
import { rootResource } from '@src/server/root.resource'
import { sentryService } from '@src/srv/sentry.service'

export const expressApp = createDefaultApp(
  {
    resources: {
      '/': rootResource,
    },
  },
  sentryService,
)
