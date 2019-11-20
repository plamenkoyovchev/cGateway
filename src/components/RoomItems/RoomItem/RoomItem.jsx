import React from "react";

import "./RoomItem.scss";

const RoomItem = ({ id, name }) => {
  return (
    <li class="list-group-item d-flex justify-content-between align-items-center">
      {name}
      <span class="badge badge-primary badge-pill">{`id: ${id}`}</span>
    </li>
  );
};

export default RoomItem;
