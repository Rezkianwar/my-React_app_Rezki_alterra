import { Spin } from "antd";
import React from "react";
import "./loadingComponent.css";

const loadingComponent = () => {
  return (
    <div className="Loading-container">
      <Spin size="large" tip="Loading..." />
    </div>
  );
};

export default loadingComponent;
