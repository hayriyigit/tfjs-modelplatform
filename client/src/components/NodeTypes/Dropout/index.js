import { NodeWrapper } from '../../Utils';
import DropoutForm from './DropoutForm';

export default function Dropout({ id, data }) {
  return (
    <NodeWrapper data={data}>
      <DropoutForm onChange={data.onChange} id={id} />
    </NodeWrapper>
  );
}
