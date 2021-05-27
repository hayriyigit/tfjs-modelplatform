import { Form, Collapse } from 'antd';
import { NumberInput, SelectInput } from '../Utils';

const { Panel } = Collapse;

const padding = ['valid', 'same', 'causal'];
const dataFormat = ['channelsFirst', 'channelsLast'];

export default function AvgPooling2DForm({ onChange }) {
  return (
    <Form layout="vertical">
      <NumberInput
        onChange={onChange}
        label="Pool Size"
        name="poolSize"
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
            name="dataFormat"
            options={dataFormat}
          />
        </Panel>
      </Collapse>
    </Form>
  );
}
