import React from 'react';
import { Handle, Position, NodeProps } from 'reactflow';
import './custom-node.css';

// Custom Start Node Component
export const StartNode: React.FC<NodeProps> = ({ data, selected }) => {
  return (
    <div className={`custom-node start-node ${selected ? 'selected' : ''}`}>
      <Handle type="source" position={Position.Bottom} id="bottom" />
      <Handle type="source" position={Position.Right} id="right" />
      <div>{data.label}</div>
    </div>
  );
};

// Custom Process Node Component
export const ProcessNode: React.FC<NodeProps> = ({ data, selected }) => {
  return (
    <div className={`custom-node process-node ${selected ? 'selected' : ''}`}>
      <Handle type="target" position={Position.Top} id="top" />
      <Handle type="target" position={Position.Left} id="left" />
      <Handle type="source" position={Position.Bottom} id="bottom" />
      <Handle type="source" position={Position.Right} id="right" />
      <div>{data.label}</div>
    </div>
  );
};

// Custom Decision Node Component
export const DecisionNode: React.FC<NodeProps> = ({ data, selected }) => {
  return (
    <div className={`custom-node decision-node ${selected ? 'selected' : ''}`}>
      <Handle type="target" position={Position.Top} id="top" />
      <Handle type="source" position={Position.Bottom} id="bottom-yes" />
      <Handle type="source" position={Position.Right} id="right-maybe" />
      <div>{data.label}</div>
    </div>
  );
};

// Custom End Node Component
export const EndNode: React.FC<NodeProps> = ({ data, selected }) => {
  return (
    <div className={`custom-node end-node ${selected ? 'selected' : ''}`}>
      <Handle type="target" position={Position.Top} id="top" />
      <Handle type="target" position={Position.Left} id="left" />
      <div>{data.label}</div>
    </div>
  );
};

// Export all custom node types
export const nodeTypes = {
  startNode: StartNode,
  processNode: ProcessNode,
  decisionNode: DecisionNode,
  endNode: EndNode,
};
