import React, { useState } from "react";
import { MENU_ITEM } from "./constant";
import { Layout, Menu, Row } from "antd";
import { Link } from "react-router-dom";

const Headercomponent = () => {
  const path = window.location.pathname;
  const [current, setCurrent] = useState(path);
  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };
  const { Header } = Layout;
  return (
    <Header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1,
        width: "100%",
      }}
    >
      <Row justify="space-between">
        <Link to="/">
          <div
            style={{
              float: "left",
              width: 120,
              height: 31,
              margin: "16px 24px 16px 0",
              background: "rgba(255, 255, 255, 0.2)",
              display: "flex",
              justifyContent: "space-between",
            }}
            onClick={() => setCurrent("")}
          />
        </Link>
        <Menu theme="dark" mode="horizontal" onClick={onClick} selectedKeys={[current]} defaultSelectedKeys={["2"]} items={MENU_ITEM} disabledOverflow />
      </Row>
    </Header>
  );
};

export default Headercomponent;
