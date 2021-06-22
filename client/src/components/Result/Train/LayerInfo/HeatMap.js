import { useState, useEffect } from 'react';
import { useSocket } from '../../../../contexts/SocketContext';
import ReactECharts from 'echarts-for-react';
import * as echarts from 'echarts/core';
import myTheme from '../theme';
import { Button } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';

const HeatMap = ({ layer }) => {
  console.log(layer);
  const { layers } = useSocket();
  const [data, setData] = useState({
    min: 0,
    max: 0,
    data: [],
    shape: [],
  });
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    echarts.registerTheme('theme', myTheme);
  }, []);

  const UpdateData = () => {
    const weights = layers[layer].weights[currentIndex];
    const shape = layers[layer].shape;
    try {
      setData({
        min: Math.min(...weights),
        max: Math.max(...weights),
        data: createData(createArray(weights, shape)),
        shape,
      });
    } catch {
      null;
    }
  };

  useEffect(() => {
    layers[layer].weights ? UpdateData() : null;
  }, [layer, layers]);

  const createArray = (array, shape) => {
    let row = shape[0] - 1;
    let column = 0;
    let result = [];

    for (const item of array) {
      result.push([row, column, item]);
      column += 1;
      if (column === shape[0]) {
        column = 0;
        row -= 1;
      }
    }
    return result;
  };

  const createData = (data) => {
    return data.map((item) => {
      return [item[1], item[0], item[2] || '-'];
    });
  };

  const nextIndex = async (e) => {
    console.log(currentIndex);
    const nextIndex = currentIndex + 1 >= data.shape[3] ? 0 : currentIndex + 1;
    setCurrentIndex(nextIndex);
    UpdateData();
  };

  const option = {
    legend: { data: 'HeatMap' },
    gradientColor: ['#ccc', '#000'],
    grid: {
      height: '90%',
      top: '10',
    },
    xAxis: {
      type: 'category',
      data: data.shape ? Array.from(Array(data.shape[0]).keys()) : null,
      splitArea: {
        show: true,
      },
    },
    yAxis: {
      type: 'category',
      data: data.shape ? Array.from(Array(data.shape[0]).keys()) : null,
      splitArea: {
        show: true,
      },
    },
    visualMap: {
      show: false,
      min: data.min,
      max: data.max == 0 && data.min == 0 ? 1 : data.max,
      calculable: true,
      orient: 'horizontal',
      left: 'center',
      bottom: '15%',
    },
    series: [
      {
        type: 'heatmap',
        data: data.data,
        label: {
          show: false,
        },
      },
    ],
  };

  return (
    <div className="heat_wrapper">
      <Button
        className="nav_button"
        onClick={nextIndex}
        type="primary"
        icon={<ArrowRightOutlined />}
        size="large"
      />
      <ReactECharts option={option} theme="theme" />
      <style jsx>{`
        .heat_wrapper {
          position: relative;
        }
        .nav_button {
          position: absolute;
          z-index:99;
          top:45%;
          right: 10px;
        }
      `}</style>
    </div>
  );
};

export default HeatMap;
