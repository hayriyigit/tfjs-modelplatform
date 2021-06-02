import { NodeWrapper } from '../../Utils';
import MaxPool2DForm from './MaxPool2DForm';

export default function MaxPool2D({ data }) {
  return (
    <NodeWrapper data={data}>
      <MaxPool2DForm onChange={data.onChange} />
    </NodeWrapper>
  );
}
