import React, { useState } from 'react';
import { ChefHat, Leaf, Flame } from 'lucide-react';
import { mockMealSchedule } from '../data/mockData';

const MealSchedulePage = () => {
  const [selectedDay, setSelectedDay] = useState(0);
  const currentMeal = mockMealSchedule[selectedDay];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold text-gray-900">Meal Schedule</h1>
        <p className="text-gray-600 mt-2">Weekly hostel mess meal planning</p>
      </div>

      {/* Day Selector */}
      <div className="flex gap-2 overflow-x-auto pb-4">
        {mockMealSchedule.map((meal, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedDay(idx)}
            className={`px-6 py-3 rounded-lg font-semibold transition-smooth whitespace-nowrap ${
              selectedDay === idx
                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {meal.day}
          </button>
        ))}
      </div>

      {/* Meal Details */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Breakfast */}
        <div className="bg-white rounded-2xl shadow-card p-6 hover-lift">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-orange-50 p-3 rounded-lg">
              <ChefHat className="text-orange-600" size={24} />
            </div>
            <h3 className="text-xl font-bold text-gray-900">Breakfast</h3>
          </div>
          <p className="text-2xl font-bold text-gray-900 mb-4">{currentMeal.breakfast}</p>
          <p className="text-sm text-gray-600">⏰ 7:00 AM - 9:00 AM</p>
          <p className="text-sm text-gray-600">👥 ~300 students expected</p>
        </div>

        {/* Lunch */}
        <div className="bg-white rounded-2xl shadow-card p-6 hover-lift">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-teal-50 p-3 rounded-lg">
              <Flame className="text-teal-600" size={24} />
            </div>
            <h3 className="text-xl font-bold text-gray-900">Lunch</h3>
          </div>
          <p className="text-2xl font-bold text-gray-900 mb-4">{currentMeal.lunch}</p>
          <p className="text-sm text-gray-600">⏰ 12:30 PM - 2:00 PM</p>
          <p className="text-sm text-gray-600">👥 ~520 students expected</p>
        </div>

        {/* Dinner */}
        <div className="bg-white rounded-2xl shadow-card p-6 hover-lift">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-blue-50 p-3 rounded-lg">
              <ChefHat className="text-blue-600" size={24} />
            </div>
            <h3 className="text-xl font-bold text-gray-900">Dinner</h3>
          </div>
          <p className="text-2xl font-bold text-gray-900 mb-4">{currentMeal.dinner}</p>
          <p className="text-sm text-gray-600">⏰ 7:30 PM - 9:00 PM</p>
          <p className="text-sm text-gray-600">👥 ~410 students expected</p>
        </div>
      </div>

      {/* Dietary Info */}
      <div className="bg-white rounded-2xl shadow-card p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Dietary Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className={`rounded-lg p-6 flex items-center gap-4 ${
            currentMeal.veg ? 'bg-green-50' : 'bg-red-50'
          }`}>
            <div className="text-4xl">{currentMeal.veg ? '🥗' : '🍗'}</div>
            <div>
              <p className="text-sm text-gray-600">Type</p>
              <p className="text-2xl font-bold text-gray-900">
                {currentMeal.veg ? 'Vegetarian' : 'Non-Vegetarian'}
              </p>
            </div>
          </div>
          <div className="bg-blue-50 rounded-lg p-6">
            <p className="text-sm text-gray-600 mb-2">🔔 Meal Notification</p>
            <p className="text-lg font-semibold text-gray-900">Special menu this week</p>
            <p className="text-sm text-gray-600 mt-1">Check the schedule regularly for updates</p>
          </div>
        </div>
      </div>

      {/* Weekly Table */}
      <div className="bg-white rounded-2xl shadow-card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-bold text-gray-900">Day</th>
                <th className="px-6 py-4 text-left text-sm font-bold text-gray-900">Breakfast</th>
                <th className="px-6 py-4 text-left text-sm font-bold text-gray-900">Lunch</th>
                <th className="px-6 py-4 text-left text-sm font-bold text-gray-900">Dinner</th>
                <th className="px-6 py-4 text-left text-sm font-bold text-gray-900">Type</th>
              </tr>
            </thead>
            <tbody>
              {mockMealSchedule.map((meal, idx) => (
                <tr
                  key={idx}
                  className="border-b border-gray-200 hover:bg-gray-50 transition-smooth"
                >
                  <td className="px-6 py-4 font-semibold text-gray-900">{meal.day}</td>
                  <td className="px-6 py-4 text-gray-700">{meal.breakfast}</td>
                  <td className="px-6 py-4 text-gray-700">{meal.lunch}</td>
                  <td className="px-6 py-4 text-gray-700">{meal.dinner}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        meal.veg
                          ? 'bg-green-100 text-green-800'
                          : 'bg-red-100 text-red-800'
                      }`}
                    >
                      {meal.veg ? '🥗 Veg' : '🍗 Non-Veg'}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MealSchedulePage;
