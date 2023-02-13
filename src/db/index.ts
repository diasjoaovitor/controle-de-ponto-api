import mysql from 'mysql2/promise'
import bluebird from 'bluebird'
import dotenv from 'dotenv'

dotenv.config()

export const connection = await mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  Promise: bluebird
})
