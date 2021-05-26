import { Form, Collapse } from 'antd';
import { NumberInput, SelectInput } from '../Utils';

const { Panel } = Collapse;

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

export default function DenseForm() {
  return (
    <Form layout="vertical">
      <NumberInput label="Units" name="units" isInt={true} />
      <SelectInput
        label="Activation Function"
        name="activation"
        options={activation}
      />
      <Collapse ghost>
        <Panel header="Advanced" key="1">
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
