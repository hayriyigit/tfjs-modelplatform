import { NodeWrapper } from '../../Utils';
import DenseForm from './DenseForm';

export default function Dense({ id, data }) {
  return (
    <NodeWrapper data={data}>
      <DenseForm onChange={data.onChange} id={id} />
    </NodeWrapper>
  );
}
