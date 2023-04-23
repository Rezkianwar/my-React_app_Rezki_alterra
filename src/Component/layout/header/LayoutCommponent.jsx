import { Breadcrumb, Layout, Menu, theme } from "antd";
import FooterComponent from "../Footer/FooterComponent";
import Headercomponent from "./Headercomponent";
const { Content } = Layout;

const LayoutCommponent = ({ children }) => {
  return (
    <Layout>
      {/* Header */}
      <Headercomponent />

      {/* content */}
      <Content
        className="site-layout"
        style={{
          padding: "0 0",
        }}
      >
        <div
          style={{
            padding: 24,
            minHeight: 380,
            background: "#FFF",
          }}
        >
          {children}
        </div>
      </Content>
      {/* Footer */}
      <FooterComponent />
    </Layout>
  );
};

export default LayoutCommponent;
