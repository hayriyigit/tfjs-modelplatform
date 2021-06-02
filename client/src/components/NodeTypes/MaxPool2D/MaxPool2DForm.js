import { Form, Collapse } from 'antd';
import { NumberInput, SelectInput } from '../../Utils';

const { Panel } = Collapse;

const padding = ['valid', 'same'];
const data_format = ['channels_last', 'channels_first'];

export default function MaxPool2DForm({ onChange }) {
  return (
    <Form layout="vertical">
      <NumberInput
        onChange={onChange}
        label="Pool Size"
        name="pool_size"
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
            label="Data Format"
            name="data_format"
            options={data_format}
          />
        </Panel>
      </Collapse>
    </Form>
  );
}
