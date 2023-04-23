import React, { useEffect, useState } from "react";
import { Layout, Button, Col, Row } from "antd";
import { Link } from "react-router-dom";
import "../homepage/homepage.css";
import AboutUS from "../Aboutus/AboutUS";
import ContactUsComponent from "../contactUs/contactUsComponent";
import FooterComponent from "../../../Component/layout/Footer/FooterComponent";
import LoadingComponent from "../../../Component/loadingComponent/loadingComponent";

const { Content } = Layout;

const Homepage = () => {
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    setTimeout(setisLoading(false), 3000);
  }, []);
  return (
    <Content className="content">
      {isLoading ? (
        <LoadingComponent />
      ) : (
        <>
          <div className="layout">
            <div className="site-layout-background" style={{ paddingTop: "200px", textAlign: "center" }}>
              <h1 style={{ fontFamily: "serif", color: "#609966" }}>WELCOME TO OUR WEBSITE</h1>
              <p className="fw-bold pt-5" style={{ fontSize: "xx-large", fontFamily: "serif" }}>
                #WUJUDKAN IDE KREATIF YANG <br />
                KALIAN IMPIKAN
              </p>
              <div className="container">
                <Row>
                  <Col span={6}></Col>
                  <Col span={6}>
                    <Link to="/form-exp">
                      <Button className="border-success rounded-pill" type="primary">
                        GET STARTED
                      </Button>
                    </Link>
                  </Col>
                  <Col span={6}>
                    <Link to="/Project-calculator">
                      <Button className="border-success rounded-pill" type="primary" href="/create-product">
                        CREATE PRODUCT
                      </Button>
                    </Link>
                  </Col>
                  <Col span={6}></Col>
                </Row>
              </div>
            </div>
          </div>
          <div>
            <AboutUS />
          </div>
          <ContactUsComponent />
        </>
      )}
    </Content>
  );
};

export default Homepage;
