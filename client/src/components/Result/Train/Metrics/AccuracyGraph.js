import { useState, useEffect } from 'react';
import { useSocket } from '../../../../contexts/SocketContext';
import ReactECharts from 'echarts-for-react';
import * as echarts from 'echarts/core';
import myTheme from '../theme';

export default function AccuracyGraph() {
  const { metrics } = useSocket();

  useEffect(() => {
    echarts.registerTheme('theme', myTheme);
  }, []);

  const option = {
    legend: {
      data: ['Accuracy', 'Validation Accuracy'],
    },
    grid: { top: 40, right: 5, bottom: 0, left: 20, containLabel: true },
    xAxis: {
      type: 'category',
      data: [...Array(metrics.acc.length).keys()],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        name: `Accuracy`,
        data: metrics.acc,
        type: 'line',
        sampling: 'lttb',
        smooth: true,
      },
      {
        name: `Validation Accuracy`,
        data: metrics.val_acc,
        type: 'line',
        sampling: 'lttb',
        smooth: true,
      },
    ],
    tooltip: {
      trigger: 'axis',
    },
  };

  return <ReactECharts option={option} theme="theme" />;
}
