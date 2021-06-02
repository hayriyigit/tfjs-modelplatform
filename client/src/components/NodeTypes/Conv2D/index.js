import { NodeWrapper } from '../../Utils';
import Conv2DForm from './Conv2DForm';

export default function Conv2D({ data }) {
  return (
    <NodeWrapper data={data}>
      <Conv2DForm onChange={data.onChange} />
    </NodeWrapper>
  );
}
