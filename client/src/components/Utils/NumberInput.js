import { useState } from 'react';
import { Form, InputNumber } from 'antd';

export default function printNumberInput({
  label,
  name,
  isInt,
  max,
  step,
  onChange,
}) {
  const [status, setStatus] = useState(true);

  const isValid = (e) => ((e % 1 === 0) & (e !== null) ? true : false);

  const onchange = (e) => {
    if (isInt) {
      if (isValid(e)) {
        setStatus(isValid(e));
        return onChange(name, e);
      } else {
        setStatus(isValid(e));
      }
    } else {
      return onChange(name, e);
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
