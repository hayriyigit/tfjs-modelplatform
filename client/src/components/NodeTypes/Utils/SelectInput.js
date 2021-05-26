import { Form, Select } from 'antd';

const { Option } = Select;

export default function SelectInput({ label, name, options }) {
  return (
    <Form.Item label={`${label}:`} name={name}>
      <Select defaultValue={options[0]} style={{ width: '100%' }}>
        {options.map((item, i) => (
          <Option key={i}>{item}</Option>
        ))}
      </Select>

      <style jsx>
        {`
          .ant-select .ant-select-selector {
            background-color: transparent !important;
            color: #fff;
          }
          .ant-select-arrow {
            color: #fff;
          }
        `}
      </style>
    </Form.Item>
  );
}
