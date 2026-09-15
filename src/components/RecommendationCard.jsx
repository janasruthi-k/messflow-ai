import React from 'react';
import { Lightbulb, TrendingDown } from 'lucide-react';

const RecommendationCard = ({ recommendation, reason, currentWait, expectedWait, onActivate, isActive }) => {
  return (
    <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6 shadow-card border-2 border-orange-200">
      <div className="flex items-start gap-3 mb-4">
        <div className="bg-orange-600 rounded-full p-2">
          <Lightbulb size={24} className="text-white" />
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-bold text-gray-900">AI Recommendation</h3>
          <p className="text-sm text-gray-600 mt-1">{recommendation}</p>
        </div>
      </div>

      <div className="bg-white rounded-lg p-4 mb-4">
        <p className="text-sm text-gray-600 mb-2">Reason:</p>
        <p className="text-gray-800 text-sm leading-relaxed">{reason}</p>
      </div>

      <div className="grid grid-cols-2 gap-3 mb-4">
        <div>
          <p className="text-xs text-gray-600">Current Wait</p>
          <p className="text-2xl font-bold text-gray-900">{currentWait}m</p>
        </div>
        <div>
          <p className="text-xs text-gray-600">Expected Wait</p>
          <div className="flex items-center gap-2">
            <p className="text-2xl font-bold text-teal-600">{expectedWait}m</p>
            <TrendingDown className="text-teal-600" size={20} />
          </div>
        </div>
      </div>

      <button
        onClick={onActivate}
        disabled={isActive}
        className={`w-full py-3 rounded-lg font-semibold transition-smooth ${
          isActive
            ? 'bg-green-500 text-white cursor-not-allowed'
            : 'bg-orange-600 hover:bg-orange-700 text-white hover-lift'
        }`}
      >
        {isActive ? '✓ Activated' : 'Activate Recommendation'}
      </button>
    </div>
  );
};

export default RecommendationCard;
