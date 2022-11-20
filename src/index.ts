import ExpressAdapter from './infra/ExpressAdapter'
import Router from './infra/Router'

const expressAdapter = new ExpressAdapter()

const router = new Router(expressAdapter)
router.init()

expressAdapter.listen(3000)