import { useCallback, useState } from 'react';
import ReactFlow, { addEdge, Controls, Background } from 'react-flow-renderer';
import { Conv2D } from '../NodeTypes';

import './reactflowcomponent.scss';

const nodeTypes = {
  Conv2D,
};

const initialElements = [
  {
    id: '1',
    type: 'Conv2D',
    data: { label: 'Custom node 1' },
    position: { x: 100, y: 100 },
  },
  {
    id: '2',
    type: 'Conv2D',
    data: { label: 'Custom node 2' },
    position: { x: 100, y: 350 },
  },
];

export default function App() {
  const [elements, setElements] = useState(initialElements);

  const onConnect = useCallback((params) => {
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
  }, []);

  return (
    <ReactFlow
      style={{
        height: '100%',
        backgroundColor: '#191929',
      }}
      elements={elements}
      nodeTypes={nodeTypes}
      onConnect={onConnect}
    >
      <Controls />
    </ReactFlow>
  );
}
