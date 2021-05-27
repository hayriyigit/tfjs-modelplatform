import { Form, Collapse } from 'antd';
import { NumberInput, SelectInput } from '../Utils';

const { Panel } = Collapse;

const padding = ['valid', 'same', 'causal'];
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
];
const kernelInitializer = [
  'glorotNormal',
  'glorotUniform',
  'heNormal',
  'heUniform',
  'leCunNormal',
  'leCunUniform',
  'ones',
  'zeros',
];

export default function Conv2DForm({ onChange }) {
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
        name="kernelSize"
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
            label="Kernel Initializer"
            name="kernelInitializer"
            options={kernelInitializer}
          />
        </Panel>
      </Collapse>
    </Form>
  );
}
