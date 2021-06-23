import { NodeWrapper } from '../../Utils';
import InputForm from './InputForm';

export default function Input({ id, data }) {
  return (
    <NodeWrapper data={data}>
      <InputForm onChange={data.onChange} id={id} />
    </NodeWrapper>
  );
}
