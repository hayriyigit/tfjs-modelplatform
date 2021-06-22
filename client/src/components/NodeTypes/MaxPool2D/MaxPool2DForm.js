import { Form, Collapse } from 'antd';
import { NumberInput, SelectInput } from '../../Utils';

const { Panel } = Collapse;

const padding = ['valid', 'same'];
const dataFormat = ['channelsLast', 'channelsFirst'];

export default function MaxPool2DForm({ onChange }) {
  return (
    <Form layout="vertical">
      <NumberInput
        onChange={onChange}
        label="Pool Size"
        name="poolSize"
        isInt={true}
        value={2}
      />
      <NumberInput
        onChange={onChange}
        label="Strides"
        name="strides"
        isInt={true}
        value={2}
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
            name="dataFormat"
            options={dataFormat}
          />
        </Panel>
      </Collapse>
    </Form>
  );
}
