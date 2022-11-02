import axios from 'axios'
import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

const URI = 'http://localhost:8000/customers/'


const CompShowCustomers = () => {
    const [customers, setCustomer] = useState([])
    const [search, setSearch] = useState('')
    const [searchResults, setSearchResults] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect( ()=>{
        //procedimineto para mostrar todos los customers
        const getCustomers = async () => {
            setLoading(true)
            const {data} = await axios.get(URI)
            setCustomer(data)
            setSearchResults(data)
            setLoading(false)
        }
        getCustomers()
    }, [])

    useEffect( ()=>{
        const results = customers.filter(customer =>
            customer.first.toLowerCase().includes(search.toLowerCase())
        )
        setSearchResults(results)
    }, [search])

    //procedimineto para eliminar un customer
    const deleteCustomer = (id) => {        
        axios.delete(`${URI}${id}`)
            .then(response => {
                const result = response.data;
                const { status, message } = result;
                if (status !== 'SUCCESS') {
                    alert(message, status)
                }
                else {
                    alert(message)
                }

                window.location.reload()
            })
            .catch(err => {
                console.log(err)
            })
    }

    return(
        <div>
            <h1>Lista de Clientes</h1>
            <div className="row">
                <div className="col-md-6">
                    <input type="text" className="form-control" placeholder="Buscar por nombre..." value={search} onChange={(e)=>setSearch(e.target.value)} />
                </div>
                <div className="col-md-6">
                    <Link to="/create" className="btn btn-primary"><i className="fas fa-plus"></i> Agregar Nuevo Cliente</Link>
                </div>
            </div>
            <br/>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Email</th>
                        <th>Compañia</th>
                        <th>País</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {loading ? (
                        <tr>
                            <td colSpan="6">Cargando...</td>
                        </tr>
                    ) : (
                        searchResults.map(customer => (
                            <tr key={customer.id}>
                                <td>{customer.first}</td>
                                <td>{customer.last}</td>
                                <td>{customer.email}</td>
                                <td>{customer.company}</td>
                                <td>{customer.country}</td>
                                <td>
                                    <Link to={`/edit/${customer._id}`} className="btn btn-primary"> Editar</Link>
                                    <button className="btn btn-danger" onClick={()=>deleteCustomer(customer._id)}>Eliminar</button>
                                </td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default CompShowCustomers