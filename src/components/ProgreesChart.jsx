import React, { useState } from 'react';
import {
  Pie,
  PieChart,
  ResponsiveContainer,
  Cell,
} from 'recharts';

const ProgressChart = () => {
  const [progressValue] = useState(72);

  const pieChartData = [
    { name: 'Progress', value: progressValue },
    { name: 'Remaining', value: 100 - progressValue },
  ];

  const fullCircle = [{ name: 'Background', value: 100 }];

  return (
    <div className="rounded-[12px] border border-[rgba(0,0,0,0.1)] py-[15px] px-4">
      <div className="flex flex-col items-center justify-center">
        <div className="relative" style={{ width: '200px', height: '200px' }}>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <defs>
                <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#7ed321" />
                  <stop offset="100%" stopColor="#4caf50" />
                </linearGradient>
                <linearGradient id="remainingGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#f5f5f5" />
                  <stop offset="100%" stopColor="#e8f5e8" />
                </linearGradient>
              </defs>

              <Pie
                data={fullCircle}
                cx="50%"
                cy="50%"
                innerRadius={91}
                outerRadius={96}
                startAngle={0}
                endAngle={360}
                dataKey="value"
                stroke="none"
              >
                <Cell fill="#e0e0e0" />
              </Pie>

              <Pie
                data={pieChartData}
                cx="50%"
                cy="50%"
                innerRadius={70}
                outerRadius={90}
                startAngle={90}
                endAngle={450}
                dataKey="value"
                isAnimationActive={true}
                animationDuration={1000}
                stroke="none"
              >
                <Cell fill="url(#progressGradient)" />
                <Cell fill="url(#remainingGradient)" />
              </Pie>
            </PieChart>
          </ResponsiveContainer>

          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
            <span className="font-bold text-5xl text-gray-800">{progressValue}%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressChart;
