import React, { useCallback } from 'react';
import ReactFlow, {
  Node,
  Edge,
  addEdge,
  Connection,
  useNodesState,
  useEdgesState,
  Controls,
  Background,
  MiniMap,
  BackgroundVariant
} from 'reactflow';

// Import the default React Flow styles
import 'reactflow/dist/style.css';

// Import custom node components
import { nodeTypes } from './CustomNodes';

const initialNodes: Node[] = [
  {
    id: '1',
    position: { x: 250, y: 25 },
    data: { label: 'Start' },
    type: 'startNode',
  },
  {
    id: '2',
    position: { x: 100, y: 125 },
    data: { label: 'Process A' },
    type: 'processNode',
  },
  {
    id: '3',
    position: { x: 400, y: 125 },
    data: { label: 'Process B' },
    type: 'processNode',
  },
  {
    id: '4',
    position: { x: 250, y: 200 },
    data: { label: 'Decision' },
    type: 'decisionNode',
  },
  {
    id: '5',
    position: { x: 150, y: 300 },
    data: { label: 'End A' },
    type: 'endNode',
  },
  {
    id: '6',
    position: { x: 350, y: 300 },
    data: { label: 'End B' },
    type: 'endNode',
  },
];

const initialEdges: Edge[] = [
  { id: 'e1-2', source: '1', target: '2', sourceHandle: 'bottom', targetHandle: 'top' },
  { id: 'e1-3', source: '1', target: '3', sourceHandle: 'right', targetHandle: 'left' },
  { id: 'e2-4', source: '2', target: '4', sourceHandle: 'bottom', targetHandle: 'top' },
  { id: 'e3-4', source: '3', target: '4', sourceHandle: 'bottom', targetHandle: 'top' },
  { id: 'e4-5', source: '4', target: '5', sourceHandle: 'left-no', targetHandle: 'left', label: 'No' },
  { id: 'e4-6', source: '4', target: '6', sourceHandle: 'right-maybe', targetHandle: 'left', label: 'Maybe' },
];

const FlowExample: React.FC = () => {
  const [nodes, , onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params: Connection) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        fitView
      >
        <Controls />
        <MiniMap />
        <Background variant={BackgroundVariant.Dots} gap={12} size={1} />
      </ReactFlow>
    </div>
  );
};

export default FlowExample;
