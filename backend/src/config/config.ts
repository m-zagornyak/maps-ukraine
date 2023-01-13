import dotenv from 'dotenv'

dotenv.config()

export const PORT = process.env.PORT
export const MONGO= process.env.MONGO
export const JWT_ACCESS_SECRET = process.env.JWT_ACCESS_SECRET
export const JWT_REFRESH_SECRET = process.env.JWT_REFRESH_SECRET