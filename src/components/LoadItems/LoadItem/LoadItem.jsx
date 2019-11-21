import React from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";

import "./LoadItem.scss";

const LoadItem = ({
  id,
  name,
  type,
  device,
  match,
  roomName,
  state,
  toggleLoad
}) => {
  const stateColorClass = state && state.bri > 0 ? "red" : "";
  const toggleBtnName = state && state.bri > 0 ? "Off" : "On";
  return (
    <div className={`LoadItem card ${stateColorClass}`}>
      <div className="card-body">
        <h4 className="card-title">{name}</h4>
        <h4 className="card-title">{`Type: ${type}`}</h4>
        <div className="card-text">
          <p className="card-subtitle">{`Device ID: ${device}`}</p>
          <p>{`Room: ${roomName}`}</p>
        </div>
        <div className="buttons-section">
          <Link
            to={{ pathname: `${match.url}/${id}` }}
            className="load-details-btn btn btn-primary"
          >
            Details
          </Link>
          <button onClick={toggleLoad} className="btn btn-secondary">
            {toggleBtnName}
          </button>
        </div>
      </div>
    </div>
  );
};

export default withRouter(LoadItem);
