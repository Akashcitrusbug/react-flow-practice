import React from 'react';
import { Handle, Position, NodeProps } from 'reactflow';
import './workflow-node.css';

// Script Node Component
export const ScriptNode: React.FC<NodeProps> = ({ data, selected }) => {
  return (
    <div className={`workflow-node script-node ${selected ? 'selected' : ''}`}>
      <Handle type="source" position={Position.Right} id="output" />
      <Handle type="target" position={Position.Left} id="input" />
      
      <div className="node-content">
        <div className="node-icon">
          {data.hasCodeIcon && <span className="code-icon">{'{}'}</span>}
        </div>
        <div className="node-text">
          <div className="node-title">Script</div>
          <div className="node-subtitle">{data.subtitle || 'Short note to this...'}</div>
        </div>
        <div className="node-actions">
          <div className="dropdown-arrow">▼</div>
          {data.showAddButton && <button className="add-button">+</button>}
        </div>
      </div>
    </div>
  );
};

// Data Node Component
export const DataNode: React.FC<NodeProps> = ({ data, selected }) => {
  return (
    <div className={`workflow-node data-node ${selected ? 'selected' : ''}`}>
      <Handle type="source" position={Position.Right} id="output" />
      <Handle type="target" position={Position.Left} id="input" />
      
      <div className="node-content">
        <div className="node-icon">
          <div className="database-icon">
            <div className="db-cylinder"></div>
            <div className="db-cylinder"></div>
          </div>
        </div>
        <div className="node-text">
          <div className="node-title">Data node</div>
          <div className="node-subtitle">{data.fileName || 'formats.xlsx'}</div>
        </div>
        <div className="node-actions">
          <div className="dropdown-arrow">▼</div>
        </div>
      </div>
    </div>
  );
};

// Simple Process Node Component
export const ProcessNode: React.FC<NodeProps> = ({ data, selected }) => {
  return (
    <div className={`workflow-node process-node ${selected ? 'selected' : ''}`}>
      <Handle type="source" position={Position.Right} id="output" />
      <Handle type="target" position={Position.Left} id="input" />
      
      <div className="node-content">
        <div className="node-text">
          <div className="node-title">{data.label}</div>
        </div>
        <div className="node-actions">
          <button className="add-button">+</button>
        </div>
      </div>
    </div>
  );
};

// Image and Mask Node Component (with count)
export const ImageMaskNode: React.FC<NodeProps> = ({ data, selected }) => {
  return (
    <div className={`workflow-node image-mask-node ${selected ? 'selected' : ''} ${data.isHighlighted ? 'highlighted' : ''}`}>
      <Handle type="source" position={Position.Right} id="output" />
      <Handle type="target" position={Position.Left} id="input" />
      
      <div className="node-content">
        <div className="node-text">
          <div className="node-title">Image and mask</div>
          {data.nodeCount && <div className="node-count">{data.nodeCount} nodes</div>}
        </div>
        <div className="node-actions">
          <button className="add-button">+</button>
        </div>
      </div>
    </div>
  );
};

// Output Node Component
export const OutputNode: React.FC<NodeProps> = ({ data, selected }) => {
  return (
    <div className={`workflow-node output-node ${selected ? 'selected' : ''}`}>
      <Handle type="target" position={Position.Left} id="input" />
      
      <div className="node-content">
        <div className="node-icon">
          <div className="circular-arrow">⟲</div>
        </div>
        <div className="node-text">
          <div className="node-title">Output</div>
          <div className="node-subtitle">
            Set up <span className="wrench-icon">🔧</span>
          </div>
        </div>
        <div className="node-actions">
          <div className="dropdown-arrow">▼</div>
        </div>
      </div>
    </div>
  );
};

// Export all workflow node types
export const workflowNodeTypes = {
  scriptNode: ScriptNode,
  dataNode: DataNode,
  processNode: ProcessNode,
  imageMaskNode: ImageMaskNode,
  outputNode: OutputNode,
};
