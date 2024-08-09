import users from '../routes/user'
import { Express } from 'express'
const appRoutes = (app: Express) => {
  app.use('/users', users)
}

export default appRoutes