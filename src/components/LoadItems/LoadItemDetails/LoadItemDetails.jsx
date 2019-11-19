import React, { useState, useEffect, useCallback } from "react";
import { withRouter } from "react-router";
import "./LoadItemDetails.scss";

import axios from "../../../http/axiosGateway";

const LoadItemDetails = props => {
  const [load, setLoad] = useState({});

  const loadData = useCallback(() => {
    axios
      .get("/loads/" + props.match.params.loadId)
      .then(response => setLoad(response.data.data));
  }, [props.match.params.loadId]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  return <div>{load.name}</div>;
};

export default withRouter(LoadItemDetails);
