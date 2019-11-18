import React, { useEffect, useState } from "react";

import "./LoadsPage.scss";
import axios from "../../http/axiosGateway";

const LoadsPage = () => {
  const [loads, setLoads] = useState([]);
  useEffect(() => {
    axios
      .get("/loads")
      .then(response => setLoads(response.data.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="LoadsPage">
      {loads.map(({ name, id, type, device }) => (
        <div key={id} className="LoadItem card text-white bg-dark mb-3">
          <div className="card-header">{id}</div>
          <div className="card-body">
            <h4 className="card-title">{name}</h4>
            <p className="card-text">
              {type} {device}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LoadsPage;
