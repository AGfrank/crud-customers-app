//importamos el Modelo
import CustomerModel from "../models/CustomerModel.js";

//** Métodos para el CRUD **/

//Mostrar todos los customers
export const getAllCustomers = async (req, res) => {
    try {
        const customers = await CustomerModel.find()
        res.status(200).json(customers)
    } catch (error) {
        res.json( {message: error.message} )
    }
}
//Mostrar un customer
export const getCustomer = async (req, res) => {
        try {
            const id = req.params.id
            await CustomerModel.findById( {_id:id} ).then( (customer) => {
                res.status(200).json(customer)
            })        
        } catch (error) {
            res.json( {message: error.message} )
        }
}
//Crear un customer
export const createCustomer = async (req, res) => {
    try {
       await CustomerModel.create(req.body)
       res.status(200).json({
           "message":"¡Cliente creado correctamente!"
       })
    } catch (error) {
        res.json( {message: error.message} )
    }
}
//Actualizar un customer
export const updateCustomer = async (req, res) => {
    try {
        const id = req.params.id
        await CustomerModel.updateOne({_id: id}, req.body).then( res => {
            console.log(res)
        })
        res.status(200).json({
            "message":"¡Cliente actualizado correctamente!"
        })
    } catch (error) {
        res.json( {message: error.message} )
    }
}
//Eliminar un customer
export const deleteCustomer = async (req, res) => {
    try {
        const id = req.params.id
        await CustomerModel.deleteOne({ _id : id }).then( res => {
            console.log(res)
        })
        res.status(200).json({
            "message":"¡Cliente eliminado correctamente!"
        })
    } catch (error) {
        res.json( {message: error.message} )
    }
}