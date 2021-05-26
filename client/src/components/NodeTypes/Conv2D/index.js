import HandleComponent from '../../HandleComponent';
import Conv2DForm from './Conv2DForm';

const index = ({ data }) => {
  return (
    <div className="node-main">
      <HandleComponent
        type="target"
        position="left"
        active={data.target_active}
      />
      <div className="node-body">
        <div className="node_header">{data.label}</div>
        <div className="node_content">
          <Conv2DForm />
        </div>
      </div>
      <HandleComponent
        type="source"
        position="right"
        active={data.source_active}
      />

      <style jsx>
        {`
          .node-main {
            color: #fff;
            height: auto;
            width: auto;
            min-width: 400px;
            background-color: transparent;
          }
          .node_header {
            text-align: left;
            box-sizing: border-box;
            border-top: 1px solid rgba(255, 255, 255, 0.1);
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
            padding: 5px 10px;
          }
          .node-body {
            display: flex;
            flex-direction: column;
            background-color: #232136;
            margin: 5px 15px;
            height: 100%;
          }
          .node_content {
            width: 100%;
            padding: 10px 10px;
          }
        `}
      </style>
    </div>
  );
};

export default index;
