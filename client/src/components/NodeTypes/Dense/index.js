import { NodeWrapper } from "../Utils";
import DenseForm from './DenseForm';


const index = ({ data }) => {
  return (
    <NodeWrapper data={data}>
      <DenseForm/>
    </NodeWrapper>
  );
};

export default index;
