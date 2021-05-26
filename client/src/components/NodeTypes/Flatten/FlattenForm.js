import { Form } from 'antd';
import { SelectInput } from '../Utils';

const dataFormat = ['channelsFirst', 'channelsLast'];

export default function FlattenForm() {
  return (
    <Form layout="vertical">
      <SelectInput label="Data Format" name="dataFormat" options={dataFormat} />
    </Form>
  );
}
