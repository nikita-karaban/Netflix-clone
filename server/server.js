const jsonServer = require('json-server')
const auth = require('json-server-auth')
const cors = require('cors')


const app = jsonServer.create()
const router = jsonServer.router('server/db.json')

app.use(cors())

// const rules = auth.rewriter({
//   // Permission rules
//   // users: 600,
//   messages: 640,
//   '/browse': 600,
// })
// app.use(rules)
app.db = router.db
app.use(auth)

app.use(router)
app.listen(3005)
console.log('Порт API сервера - 3005')