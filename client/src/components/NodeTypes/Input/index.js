import { NodeWrapper } from '../../Utils';
import InputForm from './InputForm';

export default function Input({ data }) {
  return (
    <NodeWrapper data={data}>
      <InputForm onChange={data.onChange} />
    </NodeWrapper>
  );
}
