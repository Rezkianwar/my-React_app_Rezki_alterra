import React, { useState } from "react";
import "./calculator.css";
import { Input, Button, Space, Typography } from "antd";

const { Title } = Typography;

const Calculator = () => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState("");

  const handleNum1Change = (e) => {
    setNum1(e.target.value);
  };

  const handleNum2Change = (e) => {
    setNum2(e.target.value);
  };

  const handleAdd = () => {
    setResult(Number(num1) + Number(num2));
  };

  const handleSubtract = () => {
    setResult(Number(num1) - Number(num2));
  };

  const handleMultiply = () => {
    setResult(Number(num1) * Number(num2));
  };

  const handleDivide = () => {
    setResult(Number(num1) / Number(num2));
  };

  const handleClear = () => {
    setNum1("");
    setNum2("");
    setResult("");
  };
  return (
    <div className="body">
      <Title level={2}>Calculator</Title>
      <Space direction="vertical" size={16}>
        <Input placeholder="Enter first number" value={num1} onChange={handleNum1Change} />
        <Input placeholder="Enter second number" value={num2} onChange={handleNum2Change} />
        <Input placeholder="Result" value={result} disabled />
        <Space>
          <Button type="primary" onClick={handleAdd}>
            +
          </Button>
          <Button type="primary" onClick={handleSubtract}>
            -
          </Button>
          <Button type="primary" onClick={handleMultiply}>
            *
          </Button>
          <Button type="primary" onClick={handleDivide}>
            /
          </Button>
          <Button onClick={handleClear}>Clear</Button>
        </Space>
      </Space>
    </div>
  );
};

export default Calculator;
