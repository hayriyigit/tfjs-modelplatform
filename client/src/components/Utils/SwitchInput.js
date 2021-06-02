import { Switch } from 'antd';

export default function SwitchInput({ name, title, onChange }) {
  return (
    <div style={{ display: 'flex', gap: '50px' }}>
      <div style={{ color: '#fff', fontSize: '1.15em' }}>{title} :</div>
      <Switch name={name} onChange={(checked, e) => onChange(name, checked)} />
    </div>
  );
}
