import { Form } from 'antd';
import { SelectInput } from '../Utils';

const data_format = ['channels_last', 'channels_first'];

export default function FlattenForm({ onChange }) {
  return (
    <Form layout="vertical">
      <SelectInput
        onChange={onChange}
        label="Data Format"
        name="data_format"
        options={data_format}
      />
    </Form>
  );
}
