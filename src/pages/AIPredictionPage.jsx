import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import PredictionCard from '../components/PredictionCard';
import RecommendationCard from '../components/RecommendationCard';
import { mockPredictionData, mockQueueHistory } from '../data/mockData';

const AIPredictionPage = () => {
  const [activeCounters, setActiveCounters] = useState(4);

  const handleActivateCounter = () => {
    if (activeCounters < 5) {
      setActiveCounters(activeCounters + 1);
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold text-gray-900">AI Queue Prediction</h1>
        <p className="text-gray-600 mt-2">Machine learning-powered predictions for meal queue management</p>
      </div>

      {/* Problem Statement */}
      <div className="bg-blue-50 border-l-4 border-blue-600 rounded-lg p-6">
        <p className="text-gray-800 font-semibold mb-2">📊 Problem Statement</p>
        <p className="text-gray-700">
          Hostel students currently experience long queues during peak meal times, causing unnecessary waiting and crowding
          because student arrival patterns change rapidly while mess counter capacity remains fixed.
        </p>
      </div>

      {/* Prediction Cards */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Meal Time Predictions</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {mockPredictionData.map((pred, idx) => (
            <PredictionCard key={idx} {...pred} />
          ))}
        </div>
      </div>

      {/* Queue History Chart */}
      <div className="bg-white rounded-2xl shadow-card p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Lunch Queue Trend (Last Hour)</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={mockQueueHistory}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="time" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="students"
              stroke="#0ea5e9"
              strokeWidth={2}
              dot={{ fill: '#0ea5e9', r: 6 }}
              name="Queue Size"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* AI Recommendation */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">AI Recommendation</h2>
        <RecommendationCard
          recommendation="Open Counter 5 for the next 20 minutes"
          reason="Predicted queue exceeds 80 students. Historical data shows peak arrival at 1:05 PM. Current growth rate is 12 students/minute."
          currentWait={16}
          expectedWait={8}
          onActivate={handleActivateCounter}
          isActive={activeCounters > 4}
        />
      </div>

      {/* AI Explanation */}
      <div className="bg-white rounded-2xl shadow-card p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Why is the queue predicted to increase?</h2>
        
        <div className="space-y-6">
          {/* Main explanation */}
          <div className="bg-blue-50 rounded-lg p-4">
            <p className="text-gray-800 text-lg font-semibold">
              Historical meal-time patterns indicate a high student arrival rate around 1:00 PM. Current queue growth is also above the normal baseline.
            </p>
          </div>

          {/* Factors */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-4">Contributing Factors:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  factor: '📊 Historical Crowd Pattern',
                  description: 'Friday lunch typically sees 15-20% higher attendance due to weekend preparation',
                }
              ,
                {
                  factor: '📈 Current Queue Size',
                  description: 'Current queue at 68 students, which is 35% higher than average for this time',
                },
                {
                  factor: '⏰ Meal Timing',
                  description: 'Lunch time (12:30 PM - 2:00 PM) aligns with peak class schedule gap',
                },
                {
                  factor: '📅 Day of Week',
                  description: 'Fridays show 12% higher attendance compared to weekdays',
                },
                {
                  factor: '👥 Previous Attendance',
                  description: 'Last Friday: 520 students. Today trend suggests similar or higher',
                },
                {
                  factor: '🔄 Queue Growth Rate',
                  description: 'Current growth: +12 students/minute (vs normal +6 students/minute)',
                },
              ].map((item, idx) => (
                <div key={idx} className="bg-gray-50 rounded-lg p-4">
                  <p className="font-semibold text-gray-900 mb-1">{item.factor}</p>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* AI Techniques */}
      <div className="bg-white rounded-2xl shadow-card p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">AI Techniques Used</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            {
              name: '📊 Time-Series Forecasting',
              description: 'Analyzes historical queue data to predict future trends',
            },
            {
              name: '🔍 Anomaly Detection',
              description: 'Identifies unusual patterns that deviate from normal behavior',
            },
            {
              name: '📈 Linear Regression',
              description: 'Models relationship between time and queue size',
            },
            {
              name: '📅 Seasonal Analysis',
              description: 'Accounts for day-of-week and time-based patterns',
            },
            {
              name: '🎯 Classification',
              description: 'Categorizes queue status into LOW, MEDIUM, HIGH',
            },
            {
              name: '⚙️ Feature Engineering',
              description: 'Combines multiple factors for accurate prediction',
            },
          ].map((tech, idx) => (
            <div key={idx} className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-lg p-4 border border-blue-200">
              <p className="font-bold text-gray-900 mb-2">{tech.name}</p>
              <p className="text-sm text-gray-600">{tech.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Disclaimer */}
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
        <p className="text-sm text-yellow-800">
          <strong>⚠️ Prototype Note:</strong> This is a working prototype demonstration. Predictions are based on mock data and simulated ML models.
          In a production environment, this would connect to real historical data and trained machine learning models.
        </p>
      </div>
    </div>
  );
};

export default AIPredictionPage;
