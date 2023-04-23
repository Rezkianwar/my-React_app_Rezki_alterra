import React from "react";
import { Layout, Carousel, Button } from "antd";
import "../homepage/homepage.css";

const { Header, Content, Footer } = Layout;

const Homepage = () => {
  return (
    <Content style={{ padding: "0 50px" }}>
      <div className="site-layout-content">
        <Carousel autoplay>
          <div>
            <img src="https://picsum.photos/1200/400" alt="carousel-img-1" />
          </div>
          <div>
            <img src="https://picsum.photos/1200/400?random=1" alt="carousel-img-2" />
          </div>
          <div>
            <img src="https://picsum.photos/1200/400?random=2" alt="carousel-img-3" />
          </div>
          <div>
            <img src="https://picsum.photos/1200/400?random=3" alt="carousel-img-4" />
          </div>
        </Carousel>
      </div>
    </Content>
  );
};

export default Homepage;
