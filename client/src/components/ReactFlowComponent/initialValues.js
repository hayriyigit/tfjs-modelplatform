export const initialValues = {
  Input: {
    dataset: 'mnist',
  },
  Dense: {
    units: 1,
    activation: 'elu',
    kernel_initializer: 'glorot_uniform',
  },
  Flatten: {
    data_format: 'channels_last',
  },
  Conv2D: {
    filters: 1,
    kernel_size: 1,
    strides: 1,
    padding: 'valid',
    activation: 'elu',
    kernel_initializer: 'glorot_uniform',
  },
  SepConv2D: {
    filters: 1,
    kernel_size: 1,
    strides: 1,
    padding: 'valid',
    activation: 'elu',
    depthwise_initializer: 'glorot_uniform',
  },
  AvgPooling2D: {
    pool_size: 1,
    strides: 1,
    padding: 'valid',
    data_format: 'channels_last',
  },
  MaxPool2D: {
    pool_size: 1,
    strides: 1,
    padding: 'valid',
    data_format: 'channels_last',
  },
  Dropout: {
    rate: 0,
  },
};
