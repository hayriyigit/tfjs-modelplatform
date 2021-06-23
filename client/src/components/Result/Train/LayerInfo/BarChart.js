import { useEffect } from 'react';
import { useSocket } from '../../../../contexts/SocketContext';
import ReactECharts from 'echarts-for-react';
import * as echarts from 'echarts/core';
import myTheme from '../theme';

const BarChart = ({ layer, mode }) => {
  const { layers } = useSocket();
  const data = mode === 'weight' ? layers[layer].weights : layers[layer].biases;

  useEffect(() => {
    echarts.registerTheme('theme', myTheme);
  }, []);

  const option = {
    legend: {
      data: [mode],
    },
    grid: { top: 40, right: 5, bottom: 0, left: 20, containLabel: true },
    xAxis: {
      type: 'category',
      data: [...Array(data.length).keys()],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        name: layer,
        data: data,
        type: 'bar',
        sampling: 'lttb',
        smooth: true,
      },
    ],
    tooltip: {
      trigger: 'axis',
    },
  };

  return <ReactECharts option={option} theme="theme" />;
};

export default BarChart;
