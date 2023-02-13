import express from 'express'
import { getEmployees } from './controllers'

const routes = express.Router()

routes.get('/', getEmployees)

export default routes
