import express from "express"
import cors from "cors"
import db from "./database/db.js"
//importamos nuestro enrutador
import customerRoutes from './routes/routes.js'

const app = express()

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/customers', customerRoutes)

app.listen(8000, ()=>{
    console.log('Servidor está corriendo en http://localhost:8000/')
})