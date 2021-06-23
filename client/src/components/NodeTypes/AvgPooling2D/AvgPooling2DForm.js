import { Form, Collapse } from 'antd';
import { NumberInput, SelectInput } from '../../Utils';

const { Panel } = Collapse;

const padding = ['valid', 'same'];
const dataFormat = ['channels_first', 'channels_last'];

export default function AvgPooling2DForm({ onChange, id }) {
  return (
    <Form layout="vertical">
      <NumberInput
        onChange={(name, e) => onChange(name, id, e)}
        label="Pool Size"
        name="poolSize"
        isInt={true}
        value={2}
      />
      <NumberInput
        onChange={(name, e) => onChange(name, id, e)}
        label="Strides"
        name="strides"
        isInt={true}
        value={2}
      />
      <Collapse ghost>
        <Panel header="Advanced" key="1">
          <SelectInput
            onChange={(name, e) => onChange(name, id, e)}
            label="Padding Mode"
            name="padding"
            options={padding}
          />
          <SelectInput
            onChange={(name, e) => onChange(name, id, e)}
            label="Data Format"
            name="dataFormat"
            options={dataFormat}
          />
        </Panel>
      </Collapse>
    </Form>
  );
}
