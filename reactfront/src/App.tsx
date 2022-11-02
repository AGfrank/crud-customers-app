import './App.css';

//importamos los componentes
import CompShowCustomers from './customer/ShowCustomers';
import CompCreateCustomer from './customer/CreateCustomer';
import CompEditCustomer from './customer/EditCustomer';

//importamos el router
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";

function App(): JSX.Element {
  return (
    <div className="App">
      <div className="container bg-dark">
        <nav className="navbar navbar-expand navbar-dark">
          <a href="/" className="navbar-brand">
              CRUD Clientes App
          </a>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <a href="/" className="nav-link">
                Lista Clientes
              </a>
            </li>
            <li className="nav-item">
              <a href="/create" className="nav-link">
                Agregar Cliente
              </a>
            </li>
          </div>
        </nav>
      </div>

      <div className="container mt-3">
        <BrowserRouter>
          <Routes>
              <Route path='/' element={ <CompShowCustomers />} />
              <Route path='/create' element={ <CompCreateCustomer />} />
              <Route path='/edit/:id' element={ <CompEditCustomer />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
