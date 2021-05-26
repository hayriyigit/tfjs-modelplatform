import { useState } from 'react';
import { Form, InputNumber } from 'antd';

export default function NumberInput({ label, name, isInt, max, step }) {
  const [status, setStatus] = useState(true);

  const onchange = (e) => {
    if (isInt) {
      (e % 1 === 0) & (e !== null) ? setStatus(true) : setStatus(false);
    }
  };
  return (
    <Form.Item
      label={`${label}:`}
      name={name}
      validateStatus={status ? 'success' : 'error'}
      help={!status ? `${label} must be integer` : null}
    >
      <InputNumber
        defaultValue={0}
        min={0}
        max={max ? max : null}
        step={step ? step : 1}
        onChange={onchange}
      />
      <style jsx>
        {`
          .ant-form-item-label > label {
            color: #ccc !important;
            font-size: 1.15em !important;
          }
          .ant-input-number {
            background-color: transparent !important;
            color: #ccc;
            width: 100%;
          }
          .ant-input-number svg {
            fill: #fff;
          }
          .ant-input-number-handler-wrap {
            background-color: #404066;
            border: 1px solid rgba(255, 255, 255, 0.1);
          }
        `}
      </style>
    </Form.Item>
  );
}
