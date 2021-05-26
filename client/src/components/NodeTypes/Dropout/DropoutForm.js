import { Form } from 'antd';
import { NumberInput } from '../Utils';

export default function DropoutForm() {
  return (
    <Form layout="vertical">
      <NumberInput label="Rate" name="rate" max={1} step={0.05} isInt={false} />
    </Form>
  );
}
