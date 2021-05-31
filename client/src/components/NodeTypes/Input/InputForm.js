import { Form } from 'antd';
import { SelectInput } from '../Utils';

const datasets = ['mnist', 'other1', 'other2'];

export default function InputForm({ onChange }) {
  return (
    <Form layout="vertical">
      <SelectInput
        onChange={onChange}
        label="Dataset"
        name="dataset"
        options={datasets}
      />
    </Form>
  );
}
