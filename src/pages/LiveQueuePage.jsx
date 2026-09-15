import React, { useState } from 'react';
import QueueCard from '../components/QueueCard';
import { mockQueueData } from '../data/mockData';

const LiveQueuePage = () => {
  const [selectedQueue, setSelectedQueue] = useState(null);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold text-gray-900">Live Queue Monitoring</h1>
        <p className="text-gray-600 mt-2">Real-time queue status for all meal times</p>
      </div>

      {/* Queue Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {Object.entries(mockQueueData).map(([key, queue]) => (
          <QueueCard
            key={key}
            {...queue}
            onClick={() => setSelectedQueue(key)}
          />
        ))}
      </div>

      {/* Detailed View */}
      {selectedQueue && (
        <div className="bg-white rounded-2xl shadow-card p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            {mockQueueData[selectedQueue].meal} - Detailed Metrics
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-blue-50 rounded-lg p-6">
              <p className="text-sm text-gray-600 mb-2">Queue Growth Rate</p>
              <p className="text-3xl font-bold text-blue-600">+12 students/min</p>
              <p className="text-xs text-gray-500 mt-2">Last 5 minutes</p>
            </div>
            <div className="bg-teal-50 rounded-lg p-6">
              <p className="text-sm text-gray-600 mb-2">Avg Service Time</p>
              <p className="text-3xl font-bold text-teal-600">1.5 min</p>
              <p className="text-xs text-gray-500 mt-2">Per student</p>
            </div>
            <div className="bg-orange-50 rounded-lg p-6">
              <p className="text-sm text-gray-600 mb-2">Counter Efficiency</p>
              <p className="text-3xl font-bold text-orange-600">87%</p>
              <p className="text-xs text-gray-500 mt-2">Utilization rate</p>
            </div>
            <div className="bg-green-50 rounded-lg p-6">
              <p className="text-sm text-gray-600 mb-2">Throughput</p>
              <p className="text-3xl font-bold text-green-600">24 students/hr</p>
              <p className="text-xs text-gray-500 mt-2">Per counter</p>
            </div>
          </div>

          {/* Queue Timeline */}
          <div className="mt-8">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Queue Timeline (Last Hour)</h3>
            <div className="space-y-2">
              {[
                { time: 'Now', students: 68, status: 'Current' },
                { time: '-5 min', students: 55, status: 'Previous' },
                { time: '-10 min', students: 42, status: 'Previous' },
                { time: '-15 min', students: 38, status: 'Previous' },
              ].map((entry, idx) => (
                <div key={idx} className="flex items-center gap-4">
                  <div className="w-16 text-sm font-semibold text-gray-600">{entry.time}</div>
                  <div className="flex-1 bg-gray-200 rounded-full h-8">
                    <div
                      className="bg-blue-600 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold"
                      style={{ width: `${(entry.students / 100) * 100}%` }}
                    >
                      {entry.students}
                    </div>
                  </div>
                  <div className="w-20 text-right text-sm text-gray-600">{entry.students} students</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LiveQueuePage;
