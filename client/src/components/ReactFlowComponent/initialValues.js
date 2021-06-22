export const initialValues = {
  Input: {
    dataset: 'mnist',
  },
  Dense: {
    units: 10,
    activation: 'softmax',
    kernelInitializer: 'glorotUniform',
  },
  Flatten: {
    dataFormat: 'channelsLast',
  },
  Conv2D: {
    filters: 8,
    kernelSize: 3,
    strides: 1,
    padding: 'same',
    activation: 'relu',
    kernelInitializer: 'glorotUniform',
  },
  SepConv2D: {
    filters: 1,
    kernelSize: 1,
    strides: 1,
    padding: 'valid',
    activation: 'elu',
    kernelInitializer: 'glorotUniform',
  },
  AvgPooling2D: {
    poolSize: 1,
    strides: 1,
    padding: 'valid',
    dataFormat: 'channelsLast',
  },
  MaxPool2D: {
    poolSize: 2,
    strides: 2,
    padding: 'same',
    dataFormat: 'channelsLast',
  },
  Dropout: {
    rate: 0,
  },
};
