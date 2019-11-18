import React from "react";

import "./LoadItem.scss";

const LoadItem = ({ id, name, type, device }) => {
  return (
    <div className="LoadItem card text-white bg-dark mb-3">
      <div className="card-header">{id}</div>
      <div className="card-body">
        <h4 className="card-title">{name}</h4>
        <p className="card-text">
          {type} {device}
        </p>
      </div>
    </div>
  );
};

export default LoadItem;
