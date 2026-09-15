import React from 'react';
import { Bell, AlertCircle, CheckCircle, Info, X } from 'lucide-react';

const NotificationCard = ({ id, type, message, timestamp, onDismiss, onRead }) => {
  const getIcon = (notificationType) => {
    switch (notificationType) {
      case 'warning':
        return <AlertCircle className="text-red-600" size={20} />;
      case 'success':
        return <CheckCircle className="text-green-600" size={20} />;
      case 'info':
        return <Info className="text-blue-600" size={20} />;
      default:
        return <Bell className="text-gray-600" size={20} />;
    }
  };

  const getBackgroundColor = (notificationType) => {
    switch (notificationType) {
      case 'warning':
        return 'bg-red-50';
      case 'success':
        return 'bg-green-50';
      case 'info':
        return 'bg-blue-50';
      default:
        return 'bg-gray-50';
    }
  };

  return (
    <div className={`${getBackgroundColor(type)} rounded-lg p-4 mb-3 flex items-start gap-3`}>
      <div className="flex-shrink-0">{getIcon(type)}</div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-semibold text-gray-900">{message}</p>
        <p className="text-xs text-gray-500 mt-1">{timestamp}</p>
      </div>
      <button
        onClick={() => onDismiss(id)}
        className="text-gray-400 hover:text-gray-600 flex-shrink-0"
      >
        <X size={18} />
      </button>
    </div>
  );
};

export default NotificationCard;
