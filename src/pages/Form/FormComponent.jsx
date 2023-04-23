import React, { useState } from "react";
import { Form, Input, Button, Radio, Select, DatePicker, Typography, Modal } from "antd";
import dayjs from "dayjs";
import "./FormComponent.css";
import PhoneInput from "react-phone-number-input";

const FormComponent = () => {
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
    console.log(dayjs(values.tanggalLahir).format("MM-DD-YYYY"));
    setIsModalOpen(true);
    setIsModalData({ ...values });
  };

  const [value, setValue] = useState();
  return (
    <div className="form">
      <Title> Form Data Mahasiswa</Title>
      <Form name="Bio" layout="horizontal" onFinish={onFinish}>
        <Form.Item
          label="firstName"
          name="firstName"
          rules={[
            {
              required: true,
              message: "Please input your username!",
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
              message: "Please input your username!",
            },
          ]}
        >
          <Input placeholder="Input your last name" />
        </Form.Item>
        <Form.Item
          label="tempatLahir"
          name="tempatLahir"
          rules={[
            {
              required: true,
              message: "Please input your Tempat lahir!",
            },
          ]}
        >
          <Input placeholder="Input your Tempat Lahir" />
        </Form.Item>

        <Form.Item label="tanggalLahir" name="tanggalLahir">
          <DatePicker />
        </Form.Item>

        <Form.Item label="Alamat" name="Alamat">
          <TextArea rows={4} />
        </Form.Item>

        <Form.Item name="Email" label="Email" rules={[{ type: "email" }]}>
          <Input placeholder="Input your email" />
        </Form.Item>

        <PhoneInput className="Phone" placeholder="Enter phone number" value={value} onChange={setValue} />

        <Form.Item label="Semester" name="Semester">
          <Select>
            <Select.Option value="1">1</Select.Option>
            <Select.Option value="2">2</Select.Option>
            <Select.Option value="3">3</Select.Option>
            <Select.Option value="4">4</Select.Option>
            <Select.Option value="5">5</Select.Option>
            <Select.Option value="6">6</Select.Option>
            <Select.Option value="7">7</Select.Option>
            <Select.Option value="8">8</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item label="Agama" name="Agama">
          <Radio.Group>
            <Radio value="Islam"> Islam </Radio>
            <Radio value="Kristen"> Kristen </Radio>
            <Radio value="Katolik"> Katolik </Radio>
            <Radio value="Hindu"> hindu </Radio>
            <Radio value="Budha"> Budha </Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item
          label="Summary"
          name="Summary"
          rules={[
            {
              required: true,
              message: "Please input your Summary",
            },
          ]}
        >
          <TextArea rows={4} />
        </Form.Item>

        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form>

      {/* modal */}
      <Modal title="Form Data Mahasiswa" open={isModalOpen} onOk={handleOk} onCancel={handleCencel} style={{ color: "green" }}>
        <ol>
          <li>First Name : {modalData.firstName}</li>
          <li>Last Name : {modalData.lastName}</li>
          <li>Tempat Lahir : {modalData.tempatLahir}</li>
          <li>Tanggal Lahir : {dayjs(modalData.tanggalLahir).format("DD/MMM/YYYY")}</li>
          <li>Alamat : {modalData.Alamat}</li>
          <li> Email : {modalData.Email}</li>
          <li>Telepone : {modalData.Telepone}</li>
          <li>Semester : {modalData.Semester}</li>
          <li>Agama : {modalData.Agama}</li>
          <li>Summary : {modalData.Summary}</li>
        </ol>
      </Modal>
    </div>
  );
};

export default FormComponent;
