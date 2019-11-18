import React, { useEffect, useState } from "react";

import "./HomePage.scss";
import axios from "../../http/axiosGateway";

const HomePage = () => {
  const [gatewayInfo, setGatewayInfo] = useState({});

  useEffect(() => {
    axios
      .get("/info")
      .then(response => {
        setGatewayInfo(response.data.data);
      })
      .catch(err => {});
  }, []);

  return (
    <div className="HomePage">
      <h1>Lisa Gateway Simulator Client</h1>
      {Object.keys(gatewayInfo).map((key, i) => (
        <p className="info" key={i}>{`${key.toUpperCase()}: ${
          gatewayInfo[key]
        }`}</p>
      ))}
    </div>
  );
};

export default HomePage;
