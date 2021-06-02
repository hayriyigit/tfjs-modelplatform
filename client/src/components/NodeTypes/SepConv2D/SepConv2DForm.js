import { Form, Collapse } from 'antd';
import { NumberInput, SelectInput } from '../../Utils';

const { Panel } = Collapse;

const padding = ['valid', 'same'];
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
const depthwise_initializer = [
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

export default function SepConv2DForm({ onChange }) {
  return (
    <Form layout="vertical">
      <NumberInput
        onChange={onChange}
        label="Filter Size"
        name="filters"
        isInt={true}
      />
      <NumberInput
        onChange={onChange}
        label="Kernel Size"
        name="kernel_size"
        isInt={true}
      />
      <NumberInput
        onChange={onChange}
        label="Strides"
        name="strides"
        isInt={true}
      />
      <Collapse ghost>
        <Panel header="Advanced" key="1">
          <SelectInput
            onChange={onChange}
            label="Padding Mode"
            name="padding"
            options={padding}
          />
          <SelectInput
            onChange={onChange}
            label="Activation Function"
            name="activation"
            options={activation}
          />
          <SelectInput
            onChange={onChange}
            label="Depthwise Initializer"
            name="depthwise_initializer"
            options={depthwise_initializer}
          />
        </Panel>
      </Collapse>
    </Form>
  );
}
