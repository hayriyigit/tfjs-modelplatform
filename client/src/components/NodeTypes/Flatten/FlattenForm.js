import { Form } from 'antd';
import { SelectInput } from '../../Utils';

const dataFormat = ['channelsLast', 'channelsFirst'];

export default function FlattenForm({ onChange, id }) {
  return (
    <Form layout="vertical">
      <SelectInput
        onChange={(name, e) => onChange(name, id, e)}
        label="Data Format"
        name="dataFormat"
        options={dataFormat}
      />
    </Form>
  );
}
