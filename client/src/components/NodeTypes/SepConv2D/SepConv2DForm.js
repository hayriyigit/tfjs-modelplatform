import { Form, Collapse } from 'antd';
import { NumberInput, SelectInput } from '../../Utils';

const { Panel } = Collapse;

const padding = ['valid', 'same'];
const activation = [
  'elu',
  'hardSigmoid',
  'linear',
  'relu',
  'relu6',
  'selu',
  'sigmoid',
  'softmax',
  'softplus',
  'softsign',
  'tanh',
  'swish',
  'mish',
];
const kernelInitializer = [
  'constant',
  'glorotNormal',
  'glorotUniform',
  'heNormal',
  'heUniform',
  'identity',
  'leCunNormal',
  'leCunUniform',
  'ones',
  'orthogonal',
  'randomNormal',
  'randomUniform',
  'truncatedNormal',
  'varianceScaling',
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
        value={8}
      />
      <NumberInput
        onChange={onChange}
        label="Kernel Size"
        name="kernelSize"
        isInt={true}
        value={3}
      />
      <NumberInput
        onChange={onChange}
        label="Strides"
        name="strides"
        isInt={true}
        value={1}
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
            label="Kernel Initializer"
            name="kernelInitializer"
            options={kernelInitializer}
          />
        </Panel>
      </Collapse>
    </Form>
  );
}
