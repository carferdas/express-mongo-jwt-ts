import app from './app'
import Log from './utils/log'

app.listen(process.env.PORT || 3000, () => {
  Log('server', `Running on port ${process.env.PORT || 3000}`)
})