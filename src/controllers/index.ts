import { Request, Response } from 'express'
import { connection } from '../db'

export const getEmployees = async (req: Request, res: Response) => {
  try {
    const [ data ] = await connection.execute('select * from employees')
    return res.status(200).json({ data })
  } catch (error) {
    return res.status(400).json({
      msg: 'Request error',
      error: error
    })
  }
}
