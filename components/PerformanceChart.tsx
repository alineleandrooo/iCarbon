
import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { name: 'Jan', ICT: 400, BTC: 2400, ETH: 1400 },
  { name: 'Feb', ICT: 450, BTC: 1398, ETH: 1210 },
  { name: 'Mar', ICT: 500, BTC: 9800, ETH: 2290 },
  { name: 'Apr', ICT: 520, BTC: 3908, ETH: 2000 },
  { name: 'May', ICT: 580, BTC: 4800, ETH: 2181 },
  { name: 'Jun', ICT: 610, BTC: 3800, ETH: 2500 },
  { name: 'Jul', ICT: 650, BTC: 4300, ETH: 2100 },
];

const PerformanceChart: React.FC = () => {
  return (
    <div className="w-full h-80 bg-gray-900 p-4 rounded-lg shadow-lg">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
          <XAxis dataKey="name" stroke="#9CA3AF" />
          <YAxis stroke="#9CA3AF" />
          <Tooltip contentStyle={{ backgroundColor: '#1F2937', border: '1px solid #374151' }} />
          <Legend />
          <Line type="monotone" dataKey="ICT" stroke="#4ADE80" strokeWidth={2} activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="BTC" stroke="#FBBF24" strokeWidth={2} />
          <Line type="monotone" dataKey="ETH" stroke="#60A5FA" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PerformanceChart;
