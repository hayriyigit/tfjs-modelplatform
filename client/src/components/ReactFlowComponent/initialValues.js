export const initialValues = {
  Dense: {
    units: 0,
    activation: 'elu',
    kernel_initializer: 'glorot_uniform',
  },
  Flatten: {
    data_format: 'channels_last',
  },
  Conv2D: {
    filters: 0,
    kernel_size: 0,
    strides: 0,
    padding: 'valid',
    activation: 'elu',
    kernel_initializer: 'glorot_uniform',
  },
  SepConv2D: {
    filters: 0,
    kernel_size: 0,
    strides: 0,
    padding: 'valid',
    activation: 'elu',
    depthwise_initializer: 'glorot_uniform',
  },
  AvgPooling2D: {
    pool_size: 0,
    strides: 0,
    padding: 'valid',
    data_format: 'channels_last',
  },
  MaxPool2D: {
    pool_size: 0,
    strides: 0,
    padding: 'valid',
    data_format: 'channels_last',
  },
  Dropout: {
    rate: 0,
  },
};
