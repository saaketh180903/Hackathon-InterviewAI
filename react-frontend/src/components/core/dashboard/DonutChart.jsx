import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip } from 'chart.js';

// Register ChartJS components
ChartJS.register(ArcElement, Tooltip);

const DonutChart = ({ value, label }) => {
  const percentage = value;
  const remaining = 100 - percentage;

  const data = {
    datasets: [
      {
        data: [percentage, remaining],
        backgroundColor: ['#1A3652', '#A0A19F'], // purple and light gray
        borderWidth: 0,
        cutout: '70%', // how thick the donut is
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      tooltip: {
        enabled: false, // disable tooltip if not needed
      },
    },
  };

  return (
    <div className="relative w-30 h-30">
      <Doughnut data={data} options={options} />
      <div className="absolute inset-0 flex flex-col items-center justify-center ">
        <span className="text-xl font-bold text-gray-900">{percentage}%</span>
        {label && <span className="text-xs text-gray-500">{label}</span>}
      </div>
    </div>
  );
};

export default DonutChart;
