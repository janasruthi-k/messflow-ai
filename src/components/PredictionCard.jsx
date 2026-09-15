import React from 'react';
import { TrendingUp, AlertCircle, Zap } from 'lucide-react';

const PredictionCard = ({ meal, expectedStudents, predictedPeak, expectedQueue, predictedWait, risk }) => {
  const getRiskColor = (riskLevel) => {
    switch (riskLevel) {
      case 'LOW':
        return 'bg-green-50 text-green-800';
      case 'MEDIUM':
        return 'bg-yellow-50 text-yellow-800';
      case 'HIGH':
        return 'bg-red-50 text-red-800';
      default:
        return 'bg-gray-50 text-gray-800';
    }
  };

  const getRiskIcon = (riskLevel) => {
    switch (riskLevel) {
      case 'HIGH':
        return '🔴';
      case 'MEDIUM':
        return '🟡';
      case 'LOW':
        return '🟢';
      default:
        return '⚪';
    }
  };

  return (
    <div className="bg-white rounded-2xl p-6 shadow-card hover-lift">
      <h3 className="text-xl font-bold text-gray-900 mb-4">{meal} Prediction</h3>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-blue-50 rounded-lg p-4">
          <p className="text-sm text-gray-600 mb-1">Expected Students</p>
          <p className="text-2xl font-bold text-blue-600">{expectedStudents}</p>
        </div>
        <div className="bg-orange-50 rounded-lg p-4">
          <p className="text-sm text-gray-600 mb-1">Predicted Peak</p>
          <p className="text-2xl font-bold text-orange-600">{predictedPeak}</p>
        </div>
        <div className="bg-teal-50 rounded-lg p-4">
          <p className="text-sm text-gray-600 mb-1">Queue Size</p>
          <p className="text-2xl font-bold text-teal-600">{expectedQueue}</p>
        </div>
        <div className="bg-purple-50 rounded-lg p-4">
          <p className="text-sm text-gray-600 mb-1">Wait Time</p>
          <p className="text-2xl font-bold text-purple-600">~{predictedWait}m</p>
        </div>
      </div>

      {/* Risk Badge */}
      <div className={`p-3 rounded-lg flex items-center justify-between ${getRiskColor(risk)}`}>
        <div className="flex items-center gap-2">
          <AlertCircle size={18} />
          <span className="font-semibold">Risk Level: {risk}</span>
        </div>
        <span className="text-xl">{getRiskIcon(risk)}</span>
      </div>
    </div>
  );
};

export default PredictionCard;
