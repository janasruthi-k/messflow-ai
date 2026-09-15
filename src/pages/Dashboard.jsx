import React from 'react';
import { Users, Activity, Clock, TrendingUp, UtensilsCrossed, Zap } from 'lucide-react';
import StatCard from '../components/StatCard';
import QueueCard from '../components/QueueCard';
import { mockDashboardStats, mockQueueData, mockNotifications } from '../data/mockData';

const Dashboard = () => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600 mt-2">Welcome back! Here's your hostel mess overview.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <StatCard
          title="Students Served Today"
          value={mockDashboardStats.studentsServed}
          icon={Users}
          trend="+12% from yesterday"
          trendUp={true}
          color="blue"
        />
        <StatCard
          title="Current Queue"
          value={mockDashboardStats.currentQueue}
          icon={Activity}
          trend="↑ Increasing"
          trendUp={false}
          color="orange"
        />
        <StatCard
          title="Average Waiting Time"
          value={`${mockDashboardStats.avgWaitTime} min`}
          icon={Clock}
          trend="-2 min from avg"
          trendUp={true}
          color="teal"
        />
        <StatCard
          title="Peak Crowd Time"
          value={mockDashboardStats.peakCrowd}
          icon={TrendingUp}
          trend="Expected time"
          color="red"
        />
        <StatCard
          title="Meals Remaining"
          value={mockDashboardStats.mealsRemaining}
          icon={UtensilsCrossed}
          trend="+24 meals prepared"
          trendUp={true}
          color="green"
        />
        <StatCard
          title="Active Counters"
          value={mockDashboardStats.activeCounters}
          icon={Zap}
          trend="Operating smoothly"
          color="teal"
        />
      </div>

      {/* Queue Status */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Today's Queue Status</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {Object.values(mockQueueData).map((queue, idx) => (
            <QueueCard key={idx} {...queue} />
          ))}
        </div>
      </div>

      {/* Recent Notifications */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Recent Notifications</h2>
        <div className="bg-white rounded-2xl shadow-card p-6">
          <div className="space-y-3">
            {mockNotifications.slice(0, 4).map((notif) => (
              <div
                key={notif.id}
                className={`p-4 rounded-lg flex items-start gap-3 ${
                  notif.type === 'warning'
                    ? 'bg-red-50'
                    : notif.type === 'success'
                    ? 'bg-green-50'
                    : 'bg-blue-50'
                }`}
              >
                <div
                  className={`w-2 h-2 rounded-full mt-1.5 flex-shrink-0 ${
                    notif.type === 'warning'
                      ? 'bg-red-600'
                      : notif.type === 'success'
                      ? 'bg-green-600'
                      : 'bg-blue-600'
                  }`}
                ></div>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-gray-900">{notif.message}</p>
                  <p className="text-xs text-gray-500 mt-1">{notif.timestamp}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
