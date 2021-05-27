export const initialValues = {
  Dense: {
    units: 0,
    activation: 'elu',
    kernelInitializer: 'glorotNormal',
  },
  Flatten: {
    dataFormat: 'channelsFirst',
  },
  Conv2D: {
    filters: 0,
    kernelSize: 0,
    strides: 0,
    padding: 'valid',
    activation: 'elu',
    kernelInitializer: 'glorotNormal',
  },
  SepConv2D: {
    filters: 0,
    kernelSize: 0,
    strides: 0,
    padding: 'valid',
    activation: 'elu',
    kernelInitializer: 'glorotNormal',
  },
  AvgPooling2D: {
    poolSize: 0,
    strides: 0,
    padding: 'valid',
    dataFormat: 'channelsFirst',
  },
  MaxPool2D: {
    poolSize: 0,
    strides: 0,
    padding: 'valid',
    dataFormat: 'channelsFirst',
  },
  Dropout: {
    rate: 0,
  },
};
