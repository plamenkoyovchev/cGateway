import React, { useState, useEffect, useCallback } from "react";
import axios from "../../http/axiosGateway";

import "./LoadItems.scss";

import LoadItem from "./LoadItem/LoadItem";
import Spinner from "../UI/Spinner/Spinner";

const LoadItems = () => {
  const [loads, setLoads] = useState([]);
  const [loading, setLoading] = useState(false);

  const initLoads = useCallback(() => {
    setLoading(true);
    axios
      .get("/loads")
      .then(response => {
        setLoads(response.data.data);
      })
      .catch(err => {})
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    initLoads();
  }, [initLoads]);

  return (
    <div>
      {loading ? <Spinner /> : null}
      <div className="LoadItems">
        {loads.map(({ id, ...otherProps }) => (
          <LoadItem key={id} id={id} {...otherProps} />
        ))}
      </div>
    </div>
  );
};

export default LoadItems;
