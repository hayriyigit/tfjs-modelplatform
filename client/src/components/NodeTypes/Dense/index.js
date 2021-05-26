import { NodeWrapper } from '../Utils';
import DenseForm from './DenseForm';

export default function Dense({ data }) {
  return (
    <NodeWrapper data={data}>
      <DenseForm />
    </NodeWrapper>
  );
}
