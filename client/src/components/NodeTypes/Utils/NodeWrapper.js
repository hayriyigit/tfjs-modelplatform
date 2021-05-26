import HandleComponent from '../../HandleComponent';

export default function NodeWrapper({ children, data }) {
  return (
    <div className="node-main">
      <HandleComponent
        type="target"
        position="left"
        active={data.target_active}
      />
      <div className="node-body">
        <div className="node_header">{data.label}</div>
        <div className="node_content">{children}</div>
      </div>
      <HandleComponent
        type="source"
        position="right"
        active={data.source_active}
      />
    </div>
  );
}
