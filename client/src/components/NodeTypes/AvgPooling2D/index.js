import { NodeWrapper } from '../Utils';
import AvgPooling2DForm from './AvgPooling2DForm';

export default function AvgPooling2D({ data }) {
  return (
    <NodeWrapper data={data}>
      <AvgPooling2DForm />
    </NodeWrapper>
  );
}
