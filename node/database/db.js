import mongoose from 'mongoose'
import autoIncrement from "mongoose-auto-increment";
const url = 'mongodb://localhost:27017/crud_app'

mongoose.connect(url)

const db = mongoose.connection
autoIncrement.initialize(db)
db.on('open', ()=>{ console.log("¡Conectado a MongoDB!")} )
db.on('error', ()=>{ console.log("¡Error al conectar a MongoDB!")} )

export default db