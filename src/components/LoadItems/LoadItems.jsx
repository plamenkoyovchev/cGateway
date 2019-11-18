import React, { useState, useEffect } from "react";
import axios from "../../http/axiosGateway";

import "./LoadItems.scss";

import LoadItem from "./LoadItem/LoadItem";
import Spinner from "../UI/Spinner/Spinner";

const LoadItems = () => {
  const [loads, setLoads] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    axios
      .get("/loads")
      .then(response => {
        setLoading(true);
        setLoads(response.data.data);
      })
      .catch(err => {})
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      {loading ? <Spinner /> : null}
      <div className="LoadItems">
        {loads.map(({ id, ...otherProps }) => (
          <LoadItem key={id} {...otherProps} />
        ))}
      </div>
    </div>
  );
};

export default LoadItems;
