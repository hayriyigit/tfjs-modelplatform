import { Form, Collapse } from 'antd';
import { NumberInput, SelectInput } from '../../Utils';

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

export default function DenseForm({ onChange, id }) {
  return (
    <Form layout="vertical">
      <NumberInput
        onChange={(name, e) => onChange(name, id, e)}
        label="Units"
        name="units"
        isInt={true}
        value={10}
      />
      <SelectInput
        onChange={(name, e) => onChange(name, id, e)}
        label="Activation Function"
        name="activation"
        options={activation}
      />
      <Collapse ghost>
        <Panel header="Advanced" key="1">
          <SelectInput
            onChange={(name, e) => onChange(name, id, e)}
            label="Kernel Initializer"
            name="kernelInitializer"
            options={kernelInitializer}
          />
        </Panel>
      </Collapse>
    </Form>
  );
}
