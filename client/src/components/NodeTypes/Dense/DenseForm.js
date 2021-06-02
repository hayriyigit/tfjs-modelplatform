import { Form, Collapse } from 'antd';
import { NumberInput, SelectInput } from '../../Utils';

const { Panel } = Collapse;

const activation = [
  'elu',
  'exponential',
  'gelu',
  'hard_sigmoid',
  'linear',
  'relu',
  'selu',
  'sigmoid',
  'softmax',
  'softplus',
  'softsign',
  'swish',
  'tanh',
];
const kernel_initializer = [
  'constant',
  'glorot_normal',
  'glorot_uniform',
  'he_normal',
  'he_uniform',
  'identity',
  'lecun_normal',
  'lecun_uniform',
  'ones',
  'orthogonal',
  'random_normal',
  'random_uniform',
  'truncated_normal',
  'variance_scaling',
  'zeros',
];

export default function DenseForm({ onChange }) {
  return (
    <Form layout="vertical">
      <NumberInput
        onChange={onChange}
        label="Units"
        name="units"
        isInt={true}
      />
      <SelectInput
        onChange={onChange}
        label="Activation Function"
        name="activation"
        options={activation}
      />
      <Collapse ghost>
        <Panel header="Advanced" key="1">
          <SelectInput
            onChange={onChange}
            label="Kernel Initializer"
            name="kernel_initializer"
            options={kernel_initializer}
          />
        </Panel>
      </Collapse>
    </Form>
  );
}
