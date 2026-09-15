import React from 'react';
import { Users, Clock, Activity } from 'lucide-react';
import StatusBadge from './StatusBadge';

const QueueCard = ({ meal, time, students, waiting, counters, status, onClick }) => {
  const getQueueStatus = (count) => {
    if (count <= 20) return 'LOW';
    if (count <= 50) return 'MEDIUM';
    return 'HIGH';
  };

  const queueStatus = status || getQueueStatus(students);
  const avgWaitTime = Math.ceil((students / (counters || 1)) * 1.5);

  return (
    <div
      onClick={onClick}
      className="bg-white rounded-2xl p-6 shadow-card hover-lift cursor-pointer transition-smooth"
    >
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-xl font-bold text-gray-900">{meal}</h3>
          <p className="text-sm text-gray-500 mt-1">{time}</p>
        </div>
        <StatusBadge status={queueStatus} />
      </div>

      <div className="space-y-3">
        <div className="flex items-center gap-3 text-gray-700">
          <Users size={18} className="text-blue-600" />
          <span className="text-sm">
            <strong>{students}</strong> students waiting
          </span>
        </div>
        <div className="flex items-center gap-3 text-gray-700">
          <Clock size={18} className="text-orange-600" />
          <span className="text-sm">
            ~<strong>{avgWaitTime}</strong> min wait
          </span>
        </div>
        <div className="flex items-center gap-3 text-gray-700">
          <Activity size={18} className="text-teal-600" />
          <span className="text-sm">
            <strong>{counters}</strong> active counters
          </span>
        </div>
      </div>

      {/* Progress bar */}
      <div className="mt-4 bg-gray-200 rounded-full h-2">
        <div
          className={`h-2 rounded-full ${
            queueStatus === 'LOW'
              ? 'bg-green-500'
              : queueStatus === 'MEDIUM'
              ? 'bg-yellow-500'
              : 'bg-red-500'
          }`}
          style={{ width: `${Math.min((students / 100) * 100, 100)}%` }}
        />
      </div>
    </div>
  );
};

export default QueueCard;
