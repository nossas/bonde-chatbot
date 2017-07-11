import express from 'express'
import { isAuthenticated } from './middlewares'

const router = express.Router()

router.get('/', isAuthenticated, (req, res) => {
  res.render('./mass-message/index')
})

export default router
