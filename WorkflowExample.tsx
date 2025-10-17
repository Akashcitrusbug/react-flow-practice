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

// Import workflow node components
import { workflowNodeTypes } from './WorkflowNodes';

const initialNodes: Node[] = [
  // Script nodes
  {
    id: 'script1',
    position: { x: 50, y: 100 },
    data: { 
      subtitle: 'Short note to this...'
    },
    type: 'scriptNode',
  },
  {
    id: 'script2',
    position: { x: 650, y: 200 },
    data: { 
      subtitle: 'Short note to this...',
      hasCodeIcon: true,
      showAddButton: true
    },
    type: 'scriptNode',
  },
  {
    id: 'script3',
    position: { x: 850, y: 300 },
    data: { 
      subtitle: 'Short note to this...',
      hasCodeIcon: true,
      showAddButton: true
    },
    type: 'scriptNode',
  },
  
  // Data node
  {
    id: 'data1',
    position: { x: 300, y: 100 },
    data: { 
      fileName: 'formats.xlsx'
    },
    type: 'dataNode',
  },
  
  // Process nodes
  {
    id: 'headline',
    position: { x: 500, y: 50 },
    data: { label: 'Headline' },
    type: 'processNode',
  },
  {
    id: 'label',
    position: { x: 500, y: 150 },
    data: { label: 'Label' },
    type: 'processNode',
  },
  {
    id: 'version',
    position: { x: 500, y: 250 },
    data: { label: 'Version name' },
    type: 'processNode',
  },
  
  // Image and mask nodes
  {
    id: 'image1',
    position: { x: 500, y: 350 },
    data: { label: 'Image and mask' },
    type: 'imageMaskNode',
  },
  {
    id: 'image2',
    position: { x: 750, y: 350 },
    data: { 
      label: 'Image and mask',
      nodeCount: 193,
      isHighlighted: true
    },
    type: 'imageMaskNode',
  },
  
  // Output node
  {
    id: 'output1',
    position: { x: 1050, y: 300 },
    data: {},
    type: 'outputNode',
  },
];

const initialEdges: Edge[] = [
  // From first script to data node
  {
    id: 'e1-2',
    source: 'script1',
    target: 'data1',
    label: '32 items',
    sourceHandle: 'output',
    targetHandle: 'input',
    type: 'default',
  },
  
  // From data node to process nodes
  {
    id: 'e2-3',
    source: 'data1',
    target: 'headline',
    label: '64 items',
    sourceHandle: 'output',
    targetHandle: 'input',
    type: 'straight',
  },
  {
    id: 'e2-4',
    source: 'data1',
    target: 'label',
    label: '64 items',
    sourceHandle: 'output',
    targetHandle: 'input',
    type: 'step',
  },
  {
    id: 'e2-5',
    source: 'data1',
    target: 'version',
    label: '64 items',
    sourceHandle: 'output',
    targetHandle: 'input',
    type: 'smoothstep',
  },
  {
    id: 'e2-6',
    source: 'data1',
    target: 'image1',
    label: '64 items',
    sourceHandle: 'output',
    targetHandle: 'input',
    type: 'simplebezier',
    animated: true
  },
  
  // From label to script
  {
    id: 'e4-7',
    source: 'label',
    target: 'script2',
    label: '1 item',
    sourceHandle: 'output',
    targetHandle: 'input',
  },
  
  // From script to output
  {
    id: 'e7-10',
    source: 'script2',
    target: 'output1',
    label: '640 items',
    sourceHandle: 'output',
    targetHandle: 'input',
  },
  
  // From image1 to image2
  {
    id: 'e6-8',
    source: 'image1',
    target: 'image2',
    label: '64 items',
    sourceHandle: 'output',
    targetHandle: 'input',
  },
];

const WorkflowExample: React.FC = () => {
  const [nodes, , onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params: Connection) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      {/* Top UI Elements */}
      <div className="top-ui">
        <div className="top-left-icons">
          <div className="ui-icon">📦</div>
          <div className="ui-icon">📄</div>
          <div className="ui-icon">📋</div>
        </div>
      </div>
      
      {/* Main Flow */}
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={workflowNodeTypes}
        fitView
        fitViewOptions={{ padding: 0.2 }}
      >
        <Controls />
        <MiniMap />
        <Background variant={BackgroundVariant.Dots} gap={20} size={1} color="#e2e8f0" />
      </ReactFlow>
      
      {/* Bottom UI Elements */}
      <div className="bottom-ui">
        <div className="bottom-left">
          <div className="logs-section">
            <span>Logs</span>
            <div className="dropdown-arrow">▼</div>
          </div>
        </div>
        
        <div className="bottom-center">
          <button className="run-workflow-btn">
            <span>▶</span>
            Run workflow
          </button>
        </div>
        
        <div className="bottom-right">
          <div className="canvas-controls">
            <button className="control-btn">+</button>
            <button className="control-btn">−</button>
            <button className="control-btn">🎯</button>
            <button className="control-btn">📐</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkflowExample;
