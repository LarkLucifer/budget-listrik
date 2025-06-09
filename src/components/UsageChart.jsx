import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

function UsageChart({ devices = [] }) {
  const data = {
    labels: devices.map(device => device.name),
    datasets: [
      {
        data: devices.map(device => (device.watt * device.hours * 30) / 1000),
        backgroundColor: [
          '#6366F1', // indigo-500
          '#22D3EE', // cyan-400
          '#F59E42', // orange-400
          '#F472B6', // pink-400
          '#34D399', // green-400
          '#FBBF24', // yellow-400
          '#A78BFA', // purple-400
        ],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
        labels: { color: '#4B5563', font: { size: 13, weight: 'bold' } },
      },
      title: {
        display: true,
        text: 'Proporsi Konsumsi Listrik per Perangkat',
        color: '#3730A3',
        font: { size: 16, weight: 'bold' },
      },
    },
  };

  return (
    <div className="mb-6 p-5 bg-white rounded-xl shadow border border-indigo-100">
      <h2 className="text-lg font-semibold mb-3 text-indigo-700">Grafik Konsumsi</h2>
      {devices.length > 0 ? (
        <div className="w-full max-w-xs mx-auto">
          <Pie data={data} options={options} />
        </div>
      ) : (
        <p className="text-gray-400 italic">Belum ada data untuk ditampilkan.</p>
      )}
    </div>
  );
}

export default UsageChart; 