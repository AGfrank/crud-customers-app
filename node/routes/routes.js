import express from 'express'
import { getAllCustomers, getCustomer, createCustomer, updateCustomer, deleteCustomer } from '../controllers/CustomerController.js'
const router = express.Router()

router.get('/', getAllCustomers)
router.get('/:id', getCustomer)
router.post('/', createCustomer)
router.put('/:id', updateCustomer)
router.delete('/:id', deleteCustomer)

export default router