import React from 'react';

const StatusBadge = ({ status }) => {
  const statusConfig = {
    LOW: { color: 'bg-green-100 text-green-800', icon: '🟢' },
    MEDIUM: { color: 'bg-yellow-100 text-yellow-800', icon: '🟡' },
    HIGH: { color: 'bg-red-100 text-red-800', icon: '🔴' },
  };

  const config = statusConfig[status] || statusConfig.MEDIUM;

  return (
    <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-semibold ${config.color}`}>
      {config.icon} {status}
    </span>
  );
};

export default StatusBadge;
