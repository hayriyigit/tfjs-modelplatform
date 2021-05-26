import { Form, Collapse } from 'antd';
import { NumberInput, SelectInput } from '../Utils';

const { Panel } = Collapse;

const padding = ['valid', 'same', 'causal'];
const dataFormat = ['channelsFirst', 'channelsLast'];

export default function AvgPooling2DForm() {
  return (
    <Form layout="vertical">
      <NumberInput label="Pool Size" name="poolSize" isInt={true} />
      <NumberInput label="Strides" name="strides" isInt={true} />
      <Collapse ghost>
        <Panel header="Advanced" key="1">
          <SelectInput label="Padding Mode" name="padding" options={padding} />
          <SelectInput
            label="Data Format"
            name="dataFormat"
            options={dataFormat}
          />
        </Panel>
      </Collapse>
    </Form>
  );
}
