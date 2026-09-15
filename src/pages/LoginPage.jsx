import React, { useState } from 'react';
import { Mail, Lock, Eye, EyeOff } from 'lucide-react';
import Button from '../components/Button';
import { mockUsers } from '../data/mockData';

const LoginPage = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [selectedRole, setSelectedRole] = useState('STUDENT');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    setError('');

    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }

    // Map role to user
    let user = null;
    if (selectedRole === 'STUDENT') user = mockUsers.student;
    if (selectedRole === 'STAFF') user = mockUsers.staff;
    if (selectedRole === 'ADMIN') user = mockUsers.admin;

    if (user) {
      onLogin(user);
    } else {
      setError('Invalid credentials');
    }
  };

  const handleDemoLogin = () => {
    onLogin(mockUsers[selectedRole.toLowerCase()]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-teal-500 to-blue-700 flex items-center justify-center p-4">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
      </div>

      {/* Login Card */}
      <div className="relative z-10 bg-white rounded-2xl shadow-2xl w-full max-w-md p-8">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="text-5xl">✨</div>
          </div>
          <h1 className="text-3xl font-bold text-gray-900">MessFlow AI</h1>
          <p className="text-gray-600 mt-2">Hostel Mess Queue Management</p>
        </div>

        {/* Role Selection */}
        <div className="mb-6">
          <label className="block text-sm font-semibold text-gray-700 mb-3">Select Role</label>
          <div className="grid grid-cols-3 gap-2">
            {['STUDENT', 'STAFF', 'ADMIN'].map((role) => (
              <button
                key={role}
                onClick={() => setSelectedRole(role)}
                className={`py-2 px-3 rounded-lg font-semibold transition-smooth ${
                  selectedRole === role
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {role}
              </button>
            ))}
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleLogin} className="space-y-4">
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
              {error}
            </div>
          )}

          {/* Email */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 text-gray-400" size={20} />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@college.com"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 text-gray-400" size={20} />
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          {/* Login Button */}
          <Button type="submit" variant="primary" className="w-full mt-6">
            Login
          </Button>
        </form>

        {/* Divider */}
        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-gray-600">or try demo</span>
          </div>
        </div>

        {/* Demo Login Button */}
        <Button
          type="button"
          onClick={handleDemoLogin}
          variant="secondary"
          className="w-full"
        >
          Demo Login as {selectedRole}
        </Button>

        {/* Footer Text */}
        <p className="text-center text-xs text-gray-500 mt-6">
          This is a prototype application for hostel mess management.
          <br />
          No real data is stored.
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
