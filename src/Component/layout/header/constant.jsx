import { Link } from "react-router-dom";
import { Button } from "antd";

export const MENU_ITEM = [
  {
    label: <Link to="/home-page">homepage</Link>,
    key: "/home-page",
  },
  {
    label: <Link to="/about-me">About Me</Link>,
    key: "/about-me",
  },
  {
    label: <Link to="/Project-calculator">calculator</Link>,
    key: "/Project-calculator",
  },
  {
    label: <Link to="/Form">Form</Link>,
    key: "/Form",
  },
  {
    label: <Link to="/Form-exp">Formexp</Link>,
    key: "/Form-exp",
  },

  {
    label: (
      <Link to="/">
        <Button
          type="primary"
          onClick={() => {
            localStorage.removeItem("token");
          }}
          danger
        >
          Logout
        </Button>
      </Link>
    ),
    key: "6",
  },
];
