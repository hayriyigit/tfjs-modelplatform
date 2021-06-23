import { Form } from 'antd';
import { NumberInput } from '../../Utils';

export default function DropoutForm({ onChange, id }) {
  return (
    <Form layout="vertical">
      <NumberInput
        onChange={(name, e) => onChange(name, id, e)}
        label="Rate"
        name="rate"
        max={1}
        step={0.05}
        isInt={false}
        value={0}
      />
    </Form>
  );
}
