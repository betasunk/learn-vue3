// vite-plugin-custom-middleware.js
import { registerRouter } from '../backend/router.js'
export default function customMiddlewarePlugin() {
  return {
    name: 'custom-middleware-plugin',
    apply: 'serve',
    configureServer(server) {
      registerRouter(server.middlewares)
      // server.middlewares.use(async function (req, res, next) {
      //   // 自定义中间件逻辑
      //   if (req.url.startsWith('/api/getRecommend')) {
      //     let viteInstance = server.middlewares.getApp()
      //     console.log('req.app>>>', viteInstance)
      //     let result = await registerRouter(server.middlewares)
      //     next()
      //     res.end(JSON.stringify(result))
      //   } else {
      //     next()
      //   }
      // })
    }
  }
}
