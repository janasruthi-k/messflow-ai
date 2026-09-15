import React from 'react';
import { Ticket, X, Clock } from 'lucide-react';

const TokenCard = ({ token, currentToken, peopleAhead, estimatedWait, onCancel }) => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-card">
      <div className="grid grid-cols-2 gap-4 mb-6">
        {/* Your Token */}
        <div className="bg-blue-50 rounded-lg p-4">
          <p className="text-sm text-gray-600 mb-2">Your Token</p>
          <div className="flex items-center gap-2">
            <Ticket className="text-blue-600" size={20} />
            <span className="text-3xl font-bold text-blue-600">{token}</span>
          </div>
        </div>

        {/* Currently Serving */}
        <div className="bg-teal-50 rounded-lg p-4">
          <p className="text-sm text-gray-600 mb-2">Serving Now</p>
          <div className="flex items-center gap-2">
            <Ticket className="text-teal-600" size={20} />
            <span className="text-3xl font-bold text-teal-600">{currentToken}</span>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="space-y-3 mb-6">
        <div className="flex justify-between items-center bg-gray-50 p-3 rounded-lg">
          <span className="text-gray-700">People Ahead:</span>
          <span className="font-bold text-lg text-gray-900">{peopleAhead}</span>
        </div>
        <div className="flex justify-between items-center bg-gray-50 p-3 rounded-lg">
          <span className="text-gray-700">Estimated Wait:</span>
          <div className="flex items-center gap-1">
            <Clock size={18} className="text-orange-600" />
            <span className="font-bold text-lg text-orange-600">~{estimatedWait} min</span>
          </div>
        </div>
      </div>

      {/* Cancel Button */}
      {onCancel && (
        <button
          onClick={onCancel}
          className="w-full bg-red-50 hover:bg-red-100 text-red-600 font-semibold py-2 rounded-lg transition-smooth flex items-center justify-center gap-2"
        >
          <X size={18} />
          Cancel Token
        </button>
      )}
    </div>
  );
};

export default TokenCard;
