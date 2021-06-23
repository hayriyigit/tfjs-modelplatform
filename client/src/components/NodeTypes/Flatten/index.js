import { NodeWrapper } from '../../Utils';
import FlattenForm from './FlattenForm';

export default function Flatten({ id, data }) {
  return (
    <NodeWrapper data={data}>
      <FlattenForm onChange={data.onChange} id={id} />
    </NodeWrapper>
  );
}
