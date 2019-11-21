import React from "react";

import "./LoadsPage.scss";

import LoadItems from "../../components/LoadItems/LoadItems";
import RoomItems from "../../components/RoomItems/RoomItems";

const LoadsPage = () => {
  return (
    <div className="LoadsPage">
      <LoadItems />
      <RoomItems />
    </div>
  );
};

export default LoadsPage;
