import React from 'react';
import { Collapse } from 'antd';
import SidebarItem from '../Elements/SidebarItem';

const { Panel } = Collapse;

export default function index() {
  return (
    <div className="sidebar">
      <Collapse expandIconPosition="right" defaultActiveKey={1} ghost>
        <Panel header="Primitive Layers" key="1">
          <SidebarItem name="Input" type="Input" />
          <SidebarItem name="Dense" type="Dense" />
          <SidebarItem name="Flatten" type="Flatten" />
          <SidebarItem name="Concatenate" type="Concatenate" />
        </Panel>
        <Panel header="Convolutional Layers" key="2">
          <SidebarItem name="Conv2D" type="Conv2D" />
          <SidebarItem name="SepConv2D" type="SepConv2D" />
        </Panel>
        <Panel header="Pooling Layers" key="3">
          <SidebarItem name="AvgPooling2D" type="AvgPooling2D" />
          <SidebarItem name="MaxPool2D" type="MaxPool2D" />
          <SidebarItem
            name="GlobalAveragePooling2D"
            type="GlobalAveragePooling2D"
          />
          <SidebarItem name="GlobalMaxPooling2D" type="GlobalMaxPooling2D" />
        </Panel>
        <Panel header="Regularizers" key="4">
          <SidebarItem name="Dropout" type="Dropout" />
          <SidebarItem name="BatchNorm" type="BatchNorm" />
        </Panel>
      </Collapse>

      <style jsx>{`
        .sidebar {
          display: flex;
          flex-direction: column;
          height: 100%;
          width: 250px;
          background-color: #232136;
          overflow-y: auto;
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .sidebar::-webkit-scrollbar {
          display: none;
        }
        .ant-collapse-header {
          color: #fff !important;
          font-weight: bold;
          font-size: 1.15em;
        }
        .ant-collapse-arrow svg {
          width: 1.2em !important;
          height: 1.2em !important;
        }
      `}</style>
    </div>
  );
}
