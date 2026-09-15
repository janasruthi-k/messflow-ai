import React from 'react';
import { Search, Bell, Menu, User } from 'lucide-react';
import { formatDate } from '../utils/helpers';

const Navbar = ({ onMenuClick, currentUser }) => {
  const [notifications, setNotifications] = React.useState(3);

  return (
    <nav className="bg-white border-b border-gray-200 px-6 py-4 shadow-soft">
      <div className="flex items-center justify-between">
        {/* Left */}
        <div className="flex items-center gap-4 flex-1">
          <button
            onClick={onMenuClick}
            className="lg:hidden text-gray-600 hover:text-gray-900"
          >
            <Menu size={24} />
          </button>
          <div className="hidden sm:flex items-center gap-2 bg-gray-100 rounded-lg px-4 py-2 flex-1 max-w-sm">
            <Search size={18} className="text-gray-400" />
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent outline-none text-sm w-full"
            />
          </div>
        </div>

        {/* Right */}
        <div className="flex items-center gap-4">
          {/* Date/Time */}
          <div className="hidden sm:block text-sm text-gray-600">
            {formatDate(new Date())}
          </div>

          {/* Notification Bell */}
          <div className="relative cursor-pointer">
            <Bell size={20} className="text-gray-600 hover:text-gray-900" />
            {notifications > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                {notifications}
              </span>
            )}
          </div>

          {/* User Profile */}
          <div className="flex items-center gap-3 pl-4 border-l border-gray-200">
            <div className="hidden sm:block text-right">
              <p className="text-sm font-semibold text-gray-900">{currentUser?.name}</p>
              <p className="text-xs text-gray-500 capitalize">{currentUser?.role?.toLowerCase()}</p>
            </div>
            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold cursor-pointer hover:bg-blue-700">
              {currentUser?.name?.charAt(0) || 'U'}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
