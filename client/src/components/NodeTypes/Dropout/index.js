import { NodeWrapper } from '../Utils';
import DropoutForm from './DropoutForm';

export default function Dropout({ data }) {
  return (
    <NodeWrapper data={data}>
      <DropoutForm onChange={data.onChange} />
    </NodeWrapper>
  );
}
