import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const URI = "http://localhost:8000/customers/";

const CompEditCustomer = () => {
  const [email, setEmail] = useState("");
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [company, setCompany] = useState("");
  const [country, setCountry] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  //procedimiento para actualizar
  const update = async (e) => {
    e.preventDefault();
    await axios.put(`${URI}${id}`, {
      email: email,
      first: first,
      last: last,
      company: company,
      country: country,
    });
    navigate("/");
  };

  useEffect(() => {
    const getCustomer = async () => {
      const { data } = await axios.get(`${URI}${id}`);
      setEmail(data.email);
      setFirst(data.first);
      setLast(data.last);
      setCompany(data.company);
      setCountry(data.country);
    };
    getCustomer();
  }, [id]);

  return (
    <div>
      <h1>Editar Cliente</h1>
      <form onSubmit={update}>
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

export default CompEditCustomer;
