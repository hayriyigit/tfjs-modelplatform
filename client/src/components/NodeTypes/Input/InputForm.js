import { Form } from 'antd';
import { SelectInput } from '../../Utils';

const datasets = ['mnist', 'other1', 'other2'];

export default function InputForm({ onChange, id }) {
  return (
    <Form layout="vertical">
      <SelectInput
        onChange={(name, e) => onChange(name, id, e)}
        label="Dataset"
        name="dataset"
        options={datasets}
      />
    </Form>
  );
}
