import React from "react";

import "./LoadsPage.scss";

import LoadItems from "../../components/LoadItems/LoadItems";

const LoadsPage = () => {
  return (
    <div className="LoadsPage">
      <h1>Loads</h1>
      <LoadItems />
    </div>
  );
};

export default LoadsPage;
