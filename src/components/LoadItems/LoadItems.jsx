import React, { useState, useEffect } from "react";
import axios from "../../http/axiosGateway";

import "./LoadItems.scss";

import LoadItem from "./LoadItem/LoadItem";

const LoadItems = () => {
  const [loads, setLoads] = useState([]);

  useEffect(() => {
    axios
      .get("/loads")
      .then(response => setLoads(response.data.data))
      .catch(err => {});
  }, []);

  return (
    <div className="LoadItems">
      {loads.map(({ id, ...otherProps }) => (
        <LoadItem key={id} {...otherProps} />
      ))}
    </div>
  );
};

export default LoadItems;
