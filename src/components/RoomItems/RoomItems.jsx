import React, { useState, useEffect } from "react";

import "./RoomItems.scss";

import axios from "../../http/axiosGateway";
import RoomItem from "./RoomItem/RoomItem";

const RoomItems = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    axios
      .get("/rooms")
      .then(response => setRooms(response.data.data))
      .catch(err => {})
      .finally();
  }, []);

  return (
    <div className="RoomItems">
      <ul className="list-group">
        {rooms.map(({ id, ...otherProps }) => (
          <RoomItem key={id} id={id} {...otherProps} />
        ))}
      </ul>
    </div>
  );
};

export default RoomItems;
