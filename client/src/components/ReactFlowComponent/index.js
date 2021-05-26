import { useCallback, useState, useRef } from 'react';
import ReactFlow, {
  addEdge,
  removeElements,
  Controls,
} from 'react-flow-renderer';
import { nodeTypes } from '../NodeTypes';

import './reactflowcomponent.scss';

let id = 0;
const getId = () => `dndnode_${id++}`;

export default function App() {
  const reactFlowWrapper = useRef(null);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);
  const [elements, setElements] = useState([]);

  const onConnect = (params) => {
    const source_node_index = elements.findIndex(
      (item) => item.id === params.source
    );
    const target_node_index = elements.findIndex(
      (item) => item.id === params.target
    );

    setElements((els) => {
      els[source_node_index].data.source_active = true;
      els[target_node_index].data.target_active = true;
      return addEdge({ ...params }, els);
    });
  };

  const onElementsRemove = useCallback(
    (elementsToRemove) =>
      setElements((els) => removeElements(elementsToRemove, els)),
    []
  );

  const onLoad = (_reactFlowInstance) =>
    setReactFlowInstance(_reactFlowInstance);

  const onDragOver = (event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  };

  const onDrop = (event) => {
    event.preventDefault();
    const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
    const type = event.dataTransfer.getData('application/reactflow');
    const position = reactFlowInstance.project({
      x: event.clientX - reactFlowBounds.left,
      y: event.clientY - reactFlowBounds.top,
    });
    const newNode = {
      id: getId(),
      type,
      position,
      data: { label: `${type} node` },
    };

    setElements((es) => es.concat(newNode));
  };

  return (
    <div
      style={{
        height: '100%',
      }}
      ref={reactFlowWrapper}
    >
      <ReactFlow
        elements={elements}
        nodeTypes={nodeTypes}
        onConnect={onConnect}
        onElementsRemove={onElementsRemove}
        onLoad={onLoad}
        onDrop={onDrop}
        onDragOver={onDragOver}
      >
        <Controls />
      </ReactFlow>
    </div>
  );
}
