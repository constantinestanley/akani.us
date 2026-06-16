/* eslint-disable */

import { Route as rootRoute } from '../routes/__root'
import { Route as indexRoute } from '../routes/index'
import { Route as faqRoute } from '../routes/faq'

const IndexRoute = indexRoute.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const FaqRoute = faqRoute.update({
  id: '/faq',
  path: '/faq',
  getParentRoute: () => rootRoute,
} as any)

export const routeTree = rootRoute
  ._addFileChildren({
    IndexRoute,
    FaqRoute,
  } as any)
  ._addFileTypes<any>()
