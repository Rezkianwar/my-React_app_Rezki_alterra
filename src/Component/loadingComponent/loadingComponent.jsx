import { Spin } from "antd";
import React from "react";
import "./LoadingComponent.css";

const LoadingComponent = () => {
  return (
    <div className="Loading-container">
      <Spin size="large" tip="Loading..." />
    </div>
  );
};

export default LoadingComponent;
