import React, { useState } from 'react';
import { Download, Eye } from 'lucide-react';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import Button from '../components/Button';
import { mockReports, mockFoodDemandData } from '../data/mockData';
import { exportToCSV } from '../utils/helpers';

const ReportsPage = () => {
  const [selectedReport, setSelectedReport] = useState(0);
  const report = mockReports[selectedReport];

  const dailyQueueData = [
    { date: 'Mon', queue: 65 },
    { date: 'Tue', queue: 72 },
    { date: 'Wed', queue: 58 },
    { date: 'Thu', queue: 85 },
    { date: 'Fri', queue: 92 },
    { date: 'Sat', queue: 105 },
    { date: 'Sun', queue: 110 },
  ];

  const weeklyWaitTime = [
    { day: 'Mon', wait: 8 },
    { day: 'Tue', wait: 9 },
    { day: 'Wed', wait: 7 },
    { day: 'Thu', wait: 11 },
    { day: 'Fri', wait: 13 },
    { day: 'Sat', wait: 15 },
    { day: 'Sun', wait: 16 },
  ];

  const mealsServedPerMeal = [
    { meal: 'Breakfast', students: 280 },
    { meal: 'Lunch', students: 520 },
    { meal: 'Dinner', students: 400 },
  ];

  const handleExportCSV = () => {
    exportToCSV(mockReports, 'mess-reports.csv');
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold text-gray-900">Reports & Analytics</h1>
        <p className="text-gray-600 mt-2">Comprehensive mess management insights and statistics</p>
      </div>

      {/* Report Selector */}
      <div className="bg-white rounded-2xl shadow-card p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Select Report Date</h2>
        <div className="flex flex-wrap gap-2">
          {mockReports.map((r, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedReport(idx)}
              className={`px-4 py-2 rounded-lg font-semibold transition-smooth ${
                selectedReport === idx
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {r.date}
            </button>
          ))}
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-2xl shadow-card p-6">
          <p className="text-sm text-gray-600 mb-2">Average Waiting Time</p>
          <p className="text-3xl font-bold text-blue-600">{report.avgWaitTime} min</p>
          <p className="text-xs text-gray-500 mt-2">Down 2 min from yesterday</p>
        </div>
        <div className="bg-white rounded-2xl shadow-card p-6">
          <p className="text-sm text-gray-600 mb-2">Maximum Queue Size</p>
          <p className="text-3xl font-bold text-orange-600">{report.maxQueue}</p>
          <p className="text-xs text-gray-500 mt-2">Peak at {report.peakTime}</p>
        </div>
        <div className="bg-white rounded-2xl shadow-card p-6">
          <p className="text-sm text-gray-600 mb-2">Students Served</p>
          <p className="text-3xl font-bold text-teal-600">{report.studentsServed}</p>
          <p className="text-xs text-gray-500 mt-2">Across all meals</p>
        </div>
        <div className="bg-white rounded-2xl shadow-card p-6">
          <p className="text-sm text-gray-600 mb-2">Counter Utilization</p>
          <p className="text-3xl font-bold text-green-600">{report.counterUtilization}%</p>
          <p className="text-xs text-gray-500 mt-2">Average efficiency</p>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Daily Queue Size Chart */}
        <div className="bg-white rounded-2xl shadow-card p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Daily Queue Size (This Week)</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={dailyQueueData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="queue" fill="#0ea5e9" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Weekly Waiting Time Chart */}
        <div className="bg-white rounded-2xl shadow-card p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Weekly Average Waiting Time</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={weeklyWaitTime}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="wait" stroke="#f97316" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* More Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Students Served per Meal */}
        <div className="bg-white rounded-2xl shadow-card p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Students Served per Meal</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={mealsServedPerMeal}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, value }) => `${name}: ${value}`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="students"
              >
                <Cell fill="#0ea5e9" />
                <Cell fill="#14b8a6" />
                <Cell fill="#f97316" />
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Prediction vs Actual */}
        <div className="bg-white rounded-2xl shadow-card p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Predicted vs Actual Attendance</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={mockFoodDemandData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="mealTime" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="predicted" fill="#0ea5e9" />
              <Bar dataKey="actual" fill="#14b8a6" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Detailed Metrics */}
      <div className="bg-white rounded-2xl shadow-card p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Detailed Metrics for {report.date}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="border border-gray-200 rounded-lg p-4">
            <p className="text-xs text-gray-600 uppercase tracking-wide mb-1">Avg Waiting Time</p>
            <p className="text-2xl font-bold text-gray-900">{report.avgWaitTime} min</p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <p className="text-xs text-gray-600 uppercase tracking-wide mb-1">Max Queue</p>
            <p className="text-2xl font-bold text-gray-900">{report.maxQueue}</p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <p className="text-xs text-gray-600 uppercase tracking-wide mb-1">Students Served</p>
            <p className="text-2xl font-bold text-gray-900">{report.studentsServed}</p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <p className="text-xs text-gray-600 uppercase tracking-wide mb-1">Peak Time</p>
            <p className="text-2xl font-bold text-gray-900">{report.peakTime}</p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <p className="text-xs text-gray-600 uppercase tracking-wide mb-1">Counter Utilization</p>
            <p className="text-2xl font-bold text-gray-900">{report.counterUtilization}%</p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <p className="text-xs text-gray-600 uppercase tracking-wide mb-1">Time Saved</p>
            <p className="text-2xl font-bold text-gray-900">{report.timeSaved} min</p>
          </div>
        </div>
      </div>

      {/* Export */}
      <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-2xl p-6 flex items-center justify-between">
        <div>
          <h3 className="text-lg font-bold text-gray-900">Export Report Data</h3>
          <p className="text-sm text-gray-600 mt-1">Download all reports as CSV for further analysis</p>
        </div>
        <Button onClick={handleExportCSV} variant="primary" size="lg" className="flex items-center gap-2">
          <Download size={18} />
          Export CSV
        </Button>
      </div>
    </div>
  );
};

export default ReportsPage;
