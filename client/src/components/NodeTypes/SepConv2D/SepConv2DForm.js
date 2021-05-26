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

export default function SepConv2DForm() {
  return (
    <Form layout="vertical">
      <NumberInput label="Filter Size" name="filters" isInt={true} />
      <NumberInput label="Kernel Size" name="kernelSize" isInt={true} />
      <NumberInput label="Strides" name="strides" isInt={true} />
      <Collapse ghost>
        <Panel header="Advanced" key="1">
          <SelectInput label="Padding Mode" name="padding" options={padding} />
          <SelectInput
            label="Activation Function"
            name="activation"
            options={activation}
          />
          <SelectInput
            label="Kernel Initializer"
            name="kernelInitializer"
            options={kernelInitializer}
          />
        </Panel>
      </Collapse>
    </Form>
  );
}
