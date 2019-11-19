import React from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";

import "./LoadItem.scss";

const LoadItem = ({ id, name, type, device, match, room }) => {
  return (
    <div className="LoadItem card">
      <div className="card-body">
        <h4 className="card-title">{name}</h4>
        <h6 className="card-subtitle mb-2 text-muted">{`Type: ${type}`}</h6>
        <div className="card-text">
          <p className="card-subtitle">{`Device ID: ${device}`}</p>
          <p>{`Room ID: ${room}`}</p>
        </div>
        <Link
          to={{ pathname: `${match.url}/${id}` }}
          className="load-details-btn btn btn-primary"
        >
          Details
        </Link>
      </div>
    </div>
  );
};

export default withRouter(LoadItem);
