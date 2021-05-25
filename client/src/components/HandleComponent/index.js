import { memo } from 'react';
import { Handle } from 'react-flow-renderer';

const input_active = {
  border: '1px solid rgba(255,255,255,0.1)',
  boxSizing: 'border-box',
  borderRadius: 0,
  width: 19,
  height: 'calc(100% - 10px)',
  backgroundColor: '#232136',
};

const input_inactive = {
  ...input_active,
  backgroundColor: '#403f66',
};

const index = memo(({ type, position, id, active }) => {
  return (
    <Handle
      type={type}
      position={position}
      style={active ? input_active : input_inactive}
      id={id}
    />
  );
});

export default index;
