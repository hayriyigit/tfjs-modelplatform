import { Form } from 'antd';
import { NumberInput, SelectInput } from '../../Utils'

const optimizers = [
  'adadelta',
  'adagrad',
  'adam',
  'adamax',
  'ftrl',
  'gradient_descent',
  'nadam',
  'rmsprop',
];

const losses = [
  'binary_crossentropy',
  'categorical_crossentropy',
  'categorical_hinge',
  'cosine_similarity',
  'hinge',
  'huber',
  'kl_divergence',
  'kld',
  'kullback_leibler_divergence',
  'mean_absolute_error',
  'mae',
  'mean_absolute_percentage_error',
  'mape',
  'mean_squared_error',
  'mse',
  'mean_squared_logarithmic_error',
  'msle',
  'poisson',
  'sparse_categorical_crossentropy',
  'squared_hinge',
];

export default function CompileOptionsForm({ onChange }) {
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
        name="learning_rate"
        isInt={false}
        step={0.001}
        onChange={onChange}
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
