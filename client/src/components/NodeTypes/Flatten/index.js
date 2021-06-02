import { NodeWrapper } from '../../Utils';
import FlattenForm from './FlattenForm';

export default function Flatten({ data }) {
  return (
    <NodeWrapper data={data}>
      <FlattenForm onChange={data.onChange} />
    </NodeWrapper>
  );
}
