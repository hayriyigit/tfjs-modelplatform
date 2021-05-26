import { NodeWrapper } from '../Utils';
import Conv2DForm from './Conv2DForm';

const index = ({ data }) => {
  return (
    <NodeWrapper data={data}>
      <Conv2DForm />
    </NodeWrapper>
  );
};

export default index;
