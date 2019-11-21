import React, { useState, useEffect } from "react";

import "./RoomItems.scss";

import axios from "../../http/axiosGateway";
import RoomItem from "./RoomItem/RoomItem";
import Spinner from "../UI/Spinner/Spinner";

const RoomItems = () => {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("/rooms")
      .then(response => setRooms(response.data.data))
      .catch(err => {})
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="RoomItems">
      {loading ? <Spinner /> : null}
      <ul className="list-group">
        {rooms.map(({ id, ...otherProps }) => (
          <RoomItem key={id} id={id} {...otherProps} />
        ))}
      </ul>
    </div>
  );
};

export default RoomItems;
