import cors from 'cors'
import Express from 'express'
import 'reflect-metadata'
import './database'
import { router } from './routes/routes'




const app =  Express()
app.use(Express.urlencoded({ extended: true }))
app.use(Express.json())

app.use(cors({
  origin: ['http://localhost:8080'],
  methods:  ['GET', 'POST','PUT'],
  credentials:true
}))

app.use(router)

export { app }



