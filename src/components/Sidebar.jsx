import React from 'react';
import { Menu, X, Bell, LogOut, Settings, User } from 'lucide-react';

const Sidebar = ({ isOpen, onClose, currentUser, onLogout, activeMenu, setActiveMenu }) => {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: '📊' },
    { id: 'queue', label: 'Live Queue', icon: '📋' },
    { id: 'schedule', label: 'Meal Schedule', icon: '🍽️' },
    { id: 'prediction', label: 'AI Prediction', icon: '🤖' },
    { id: 'tokens', label: 'Token System', icon: '🎫' },
    { id: 'reports', label: 'Reports', icon: '📈' },
    { id: 'complaints', label: 'Complaints', icon: '💬' },
  ];

  if (currentUser?.role === 'STAFF') {
    menuItems.splice(5, 0, { id: 'staff', label: 'Staff Dashboard', icon: '👨‍💼' });
  }

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed left-0 top-0 h-screen w-64 bg-gray-900 text-white p-6 transition-transform duration-300 z-50 lg:relative lg:translate-x-0 lg:z-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-2">
            <div className="text-2xl font-bold text-orange-500">✨</div>
            <div>
              <h1 className="text-xl font-bold">MessFlow</h1>
              <p className="text-xs text-gray-400">AI Queue Manager</p>
            </div>
          </div>
          <button onClick={onClose} className="lg:hidden">
            <X size={24} />
          </button>
        </div>

        {/* User Info */}
        <div className="bg-gray-800 rounded-lg p-4 mb-6">
          <p className="text-xs text-gray-400">Logged in as</p>
          <p className="font-semibold">{currentUser?.name || 'User'}</p>
          <p className="text-xs text-gray-400 capitalize">{currentUser?.role?.toLowerCase()}</p>
        </div>

        {/* Menu Items */}
        <nav className="space-y-1 mb-6">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveMenu(item.id);
                onClose();
              }}
              className={`w-full text-left px-4 py-3 rounded-lg transition-smooth ${
                activeMenu === item.id
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-300 hover:bg-gray-800'
              }`}
            >
              <span className="mr-3">{item.icon}</span>
              {item.label}
            </button>
          ))}
        </nav>

        {/* Divider */}
        <div className="border-t border-gray-700 my-6" />

        {/* Footer */}
        <div className="space-y-2">
          <button className="w-full text-left px-4 py-3 rounded-lg text-gray-300 hover:bg-gray-800 transition-smooth flex items-center gap-3">
            <Settings size={18} />
            Settings
          </button>
          <button
            onClick={onLogout}
            className="w-full text-left px-4 py-3 rounded-lg text-red-400 hover:bg-red-900/20 transition-smooth flex items-center gap-3"
          >
            <LogOut size={18} />
            Logout
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
