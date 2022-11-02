import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const URI = "http://localhost:8000/customers/";

const CompCreateCustomer = () => {
  const [email, setEmail] = useState("");
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [company, setCompany] = useState("");
  const [country, setCountry] = useState("");
  const navigate = useNavigate();

  //procedimiento guardar
  const store = async (e) => {
    e.preventDefault();
    await axios.post(URI, {
      email: email,
      first: first,
      last: last,
      company: company,
      country: country,
    });
    navigate("/");
  };

  return (
    <div>
      <h1>Nuevo Cliente</h1>
      <form onSubmit={store}>
        <div className="row">
          <div className="form-group col">
            <input
              type="text"
              className="form-control"
              placeholder="Nombre"
              value={first}
              onChange={(e) => setFirst(e.target.value)}
            />
          </div>
          <div className="form-group col">
            <input
              type="text"
              className="form-control"
              placeholder="Apellido"
              value={last}
              onChange={(e) => setLast(e.target.value)}
            />
          </div>
        </div>
        <div className="row">
          <div className="form-group col">
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group col">
            <input
              type="text"
              className="form-control"
              placeholder="Compañia"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
            />
          </div>
        </div>
        <div className="row">
          <div className="form-group col">
            <input
              type="text"
              className="form-control"
              placeholder="País"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            />
          </div>
          <div className="form-group col">
            <button type="submit" className="btn btn-primary">
              Guardar
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CompCreateCustomer;
