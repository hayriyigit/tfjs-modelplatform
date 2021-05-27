import { Form } from 'antd';
import { NumberInput } from '../Utils';

export default function DropoutForm({ onChange }) {
  return (
    <Form layout="vertical">
      <NumberInput
        onChange={onChange}
        label="Rate"
        name="rate"
        max={1}
        step={0.05}
        isInt={false}
      />
    </Form>
  );
}
