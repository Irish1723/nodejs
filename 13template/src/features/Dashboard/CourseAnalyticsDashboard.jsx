import React from 'react';

export default function CourseAnalyticsDashboard() {
  // Replace with Recharts or Chart.js actual component
  return (
    <div>
      <div className="mb-2 text-gray-700">Progress per week (example):</div>
      <div className="w-full h-52 bg-gray-100 rounded flex items-center justify-center text-gray-500">
        {/* Chart.js or Recharts chart goes here */}
        [Chart Placeholder]
      </div>
      <div className="mt-2 text-gray-500 text-sm">
        Completion: <span className="font-semibold">78%</span> | Avg Quiz Score: <span className="font-semibold">85%</span>
      </div>
    </div>
  );
}
