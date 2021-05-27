import { Form } from 'antd';
import { SelectInput } from '../Utils';

const dataFormat = ['channelsFirst', 'channelsLast'];

export default function FlattenForm({ onChange }) {
  return (
    <Form layout="vertical">
      <SelectInput
        onChange={onChange}
        label="Data Format"
        name="dataFormat"
        options={dataFormat}
      />
    </Form>
  );
}
