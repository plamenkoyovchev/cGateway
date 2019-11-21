import React from "react";

import "./RoomItem.scss";

const RoomItem = ({ id, name }) => {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      {name}
      <span className="badge badge-primary badge-pill">{`id: ${id}`}</span>
    </li>
  );
};

export default RoomItem;
