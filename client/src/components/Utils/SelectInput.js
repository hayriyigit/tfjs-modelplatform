import { Form, Select } from 'antd';

const { Option } = Select;

export default function SelectInput({ label, name, options, onChange }) {
  return (
    <Form.Item label={`${label}:`} name={name}>
      <Select
        defaultValue={options[0]}
        onChange={(e) => onChange(name, e)}
        style={{ width: '100%' }}
      >
        {options.map((item, i) => (
          <Option value={item} key={i}>
            {item}
          </Option>
        ))}
      </Select>

      <style jsx>
        {`
          .ant-select .ant-select-selector {
            background-color: transparent !important;
            color: #fff;
          }
          .ant-form-item-label > label {
            color: #ccc !important;
            font-size: 1.15em !important;
          }
          .ant-select-arrow {
            color: #fff;
          }
        `}
      </style>
    </Form.Item>
  );
}
