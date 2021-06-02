import { useState } from 'react';
import { Form, Collapse } from 'antd';
import { NumberInput, SelectInput, SwitchInput } from '../../Utils';

const { Panel } = Collapse;

export default function CompileOptionsForm({ onChange }) {
  const [esSwitch, setEsSwitch] = useState(false);
  const [earlyStopping, setEarlyStopping] = useState({
    monitor: 'val_loss',
    patience: 1,
  });

  const onESSwitchChange = (name, checked) => {
    if (checked) {
      setEsSwitch(true);
      onChange(name, earlyStopping);
    } else {
      setEsSwitch(false);
      onChange(name, false);
    }
  };

  const onESChange = (name, e) => {
    setEarlyStopping((prev) => {
      prev[name] = e;
      return prev;
    });
    onChange('early_stopping', earlyStopping);
  };
  return (
    <Form className="train_form" layout="vertical">
      <NumberInput
        label="Batch Size"
        name="batch_size"
        isInt={true}
        max={1024}
        onChange={onChange}
      />
      <NumberInput
        label="Epochs"
        name="epochs"
        isInt={true}
        min={1}
        onChange={onChange}
      />
      <NumberInput
        label="Validation Split"
        name="validation_split"
        isInt={false}
        step={0.05}
        max={0.8}
        min={0.2}
        onChange={onChange}
      />

      <SwitchInput name="shuffle" title="Shuffle" onChange={onChange} />

      <Collapse ghost>
        <Panel header="Callbacks" key="1">
          <SwitchInput
            name="early_stopping"
            title="Early Stopping"
            onChange={(name, checked) => onESSwitchChange(name, checked)}
          />
          {esSwitch && (
            <>
              <SelectInput
                label="Monitor"
                name="monitor"
                options={['val_loss', 'val_acc']}
                onChange={onESChange}
              />
              <NumberInput
                label="Patience"
                name="patience"
                isInt={true}
                min={0}
                onChange={onESChange}
              />
            </>
          )}
        </Panel>
      </Collapse>
    </Form>
  );
}
