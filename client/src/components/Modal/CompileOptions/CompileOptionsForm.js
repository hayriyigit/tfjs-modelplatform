import { Form } from 'antd';
import { NumberInput, SelectInput } from '../../Utils';

const optimizers = [
  'sgd',
  'momentum',
  'adagrad',
  'adadelta',
  'adam',
  'adamax',
  'rmsprop',
];
const losses = [
  'absoluteDifference',
  'computeWeightedLoss',
  'cosineDistance',
  'hingeLoss',
  'huberLoss',
  'logLoss',
  'meanSquaredError',
  'sigmoidCrossEntropy',
  'softmaxCrossEntropy',
  'categoricalCrossentropy',
];

export default function CompileOptionsForm({ onChange, values }) {
  return (
    <Form layout="vertical">
      <SelectInput
        label="Optimizer Function"
        name="optimizer"
        options={optimizers}
        onChange={onChange}
      />
      <NumberInput
        label="Learning Rate"
        name="learningRate"
        isInt={false}
        step={0.001}
        onChange={onChange}
        value={values.learningRate}
      />
      <SelectInput
        label="Loss Function"
        name="loss"
        options={losses}
        onChange={onChange}
      />
    </Form>
  );
}
