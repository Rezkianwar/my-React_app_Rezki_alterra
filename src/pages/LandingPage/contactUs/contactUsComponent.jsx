import React, { useState } from "react";
import { Row, Col, Typography, Form, Input, Button, Modal } from "antd";

const ContactUsComponent = () => {
  const { Title } = Typography;
  const { TextArea } = Input;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setIsModalData] = useState({});

  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCencel = () => {
    setIsModalOpen(false);
  };

  const onFinish = (values) => {
    console.log({ values });
    setIsModalOpen(true);
    setIsModalData(values);
  };

  return (
    <div style={{ backgroundColor: "#A6BB8D" }}>
      <Row
        style={{
          textAlign: "center",
          padding: "100px ",
        }}
      >
        <Col
          span={12}
          style={{
            marginTop: "50px",
          }}
        >
          <Title>Contact Us </Title>
          <p>
            Do you have any questions? Please do not hesitate to contact us directly.
            <br />
            Our team will come back to you within a matter of hours to help you.
          </p>
        </Col>
        <Col span={12}>
          <Form
            name="Bio"
            layout="horizontal"
            onFinish={onFinish}
            style={{
              gap: "15px",
            }}
          >
            <Form.Item
              name="firstName"
              label="firstName"
              rules={[
                {
                  required: true,
                  message: "Please input your First Name",
                },
              ]}
            >
              <Input placeholder="Input your first name..." />
            </Form.Item>
            <Form.Item
              label="lastName"
              name="lastName"
              rules={[
                {
                  required: true,
                  message: "Please input your Last Name",
                },
              ]}
            >
              <Input placeholder="Input your last name" />
            </Form.Item>
            <Form.Item
              name="emailAddress"
              label="emailAddress"
              layout=""
              rules={[
                {
                  type: "email",
                  required: true,
                  message: "Please input your Summary",
                },
              ]}
            >
              <Input placeholder="Input your email" />
            </Form.Item>
            <Form.Item
              label="Message"
              name="Message"
              rules={[
                {
                  required: true,
                  message: "Please input your Message",
                },
              ]}
            >
              <TextArea rows={4} />
            </Form.Item>

            <Button
              type="primary"
              htmlType="submit"
              style={{
                width: "100%",
              }}
            >
              Send
            </Button>
          </Form>
        </Col>
      </Row>
      {/* modal */}
      <Modal title="Form Data Pengungjung" open={isModalOpen} onOk={handleOk} onCancel={handleCencel} style={{ color: "green" }}>
        <ol>
          <li>First Name: {modalData.firstName}</li>
          <li>Last Name: {modalData.lastName}</li>
          <li>Email: {modalData.emailAddress}</li>
          <li>Summary: {modalData.Message}</li>
        </ol>
      </Modal>
    </div>
  );
};

export default ContactUsComponent;
