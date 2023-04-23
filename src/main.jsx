import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ConfigProvider } from "antd";
import "./index.css";
import { Thameconfig } from "./Themes/themeconfig";
import { BrowserRouter } from "react-router-dom";
import { client } from "./Config/apollo-client";
import { ApolloProvider } from "@apollo/client";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ApolloProvider client={client}>
    <ConfigProvider theme={Thameconfig}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ConfigProvider>
  </ApolloProvider>
);
