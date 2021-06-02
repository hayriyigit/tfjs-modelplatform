import { NodeWrapper } from '../../Utils';
import SepConv2DForm from './SepConv2DForm';

export default function SepConv2D({ data }) {
  return (
    <NodeWrapper data={data}>
      <SepConv2DForm onChange={data.onChange} />
    </NodeWrapper>
  );
}
