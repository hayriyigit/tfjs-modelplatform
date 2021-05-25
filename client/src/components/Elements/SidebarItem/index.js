import React from 'react';

export default function index({ name }) {
  return (
    <div className="dndnode" draggable>
      {name}

      <style jsx>
        {`
          .dndnode {
            position: relative;
            color: #fff;
            background-color: #323151;
            margin-bottom: 10px;
            padding: 10px 30px;
            border-radius: 2px;
          }
          .dndnode:before {
            content: '.';
            position: absolute;
            left: 10px;
            top: 0;
            font-size: 20px;
            line-height: 20px;
            color: #fff;
            text-shadow: 0 5px #fff, 0 10px #fff, 5px 0 #fff, 5px 5px #fff,
              5px 10px #fff;
          }
        `}
      </style>
    </div>
  );
}
