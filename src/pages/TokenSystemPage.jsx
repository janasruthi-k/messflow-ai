import React, { useState } from 'react';
import { Trash2, CheckCircle } from 'lucide-react';
import TokenCard from '../components/TokenCard';
import Button from '../components/Button';
import { generateToken } from '../utils/helpers';

const TokenSystemPage = () => {
  const [userToken, setUserToken] = useState(null);
  const [tokens, setTokens] = useState([
    { token: 'A-112', status: 'SERVING' },
    { token: 'A-113', status: 'WAITING' },
    { token: 'A-114', status: 'WAITING' },
    { token: 'A-115', status: 'WAITING' },
  ]);

  const handleGetToken = () => {
    const newToken = generateToken();
    setUserToken(newToken);
    setTokens([...tokens, { token: newToken, status: 'WAITING' }]);
  };

  const handleCancelToken = () => {
    setTokens(tokens.filter((t) => t.token !== userToken));
    setUserToken(null);
  };

  const currentServingToken = tokens.find((t) => t.status === 'SERVING')?.token || 'None';
  const peopleAhead = userToken
    ? tokens.findIndex((t) => t.token === userToken)
    : 0;
  const estimatedWait = peopleAhead * 2;

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold text-gray-900">Token System</h1>
        <p className="text-gray-600 mt-2">Generate and track your position in the queue</p>
      </div>

      {/* Get Token Section */}
      <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl p-8 border-2 border-blue-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Get Your Token</h2>
        <p className="text-gray-700 mb-6">
          Generate a token to join the queue and track your position in real-time.
        </p>
        {!userToken ? (
          <Button onClick={handleGetToken} variant="primary" size="lg">
            📝 Get Token for Lunch
          </Button>
        ) : (
          <div className="bg-white rounded-lg p-4 text-center">
            <p className="text-sm text-gray-600 mb-2">Your current token:</p>
            <p className="text-4xl font-bold text-blue-600">{userToken}</p>
            <p className="text-sm text-gray-600 mt-4">⏱️ Click "Generate New Token" to replace</p>
          </div>
        )}
      </div>

      {/* Token Status Card */}
      {userToken && (
        <div>
          <TokenCard
            token={userToken}
            currentToken={currentServingToken}
            peopleAhead={peopleAhead}
            estimatedWait={estimatedWait}
            onCancel={handleCancelToken}
          />
        </div>
      )}

      {/* Queue Status */}
      <div className="bg-white rounded-2xl shadow-card p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Current Queue Status</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-green-50 rounded-lg p-6 text-center">
            <p className="text-sm text-gray-600 mb-2">Currently Serving</p>
            <div className="flex items-center justify-center gap-2">
              <CheckCircle className="text-green-600" size={24} />
              <p className="text-3xl font-bold text-green-600">{currentServingToken}</p>
            </div>
          </div>
          <div className="bg-blue-50 rounded-lg p-6 text-center">
            <p className="text-sm text-gray-600 mb-2">People in Queue</p>
            <p className="text-3xl font-bold text-blue-600">{tokens.length}</p>
          </div>
          <div className="bg-orange-50 rounded-lg p-6 text-center">
            <p className="text-sm text-gray-600 mb-2">Avg Wait Time</p>
            <p className="text-3xl font-bold text-orange-600">~3 min</p>
          </div>
        </div>

        {/* Queue List */}
        <div>
          <h3 className="text-lg font-bold text-gray-900 mb-4">Queue List</h3>
          <div className="space-y-2 max-h-96 overflow-y-auto">
            {tokens.map((item, idx) => (
              <div
                key={item.token}
                className={`flex items-center gap-4 p-4 rounded-lg transition-smooth ${
                  item.status === 'SERVING'
                    ? 'bg-green-50 border-2 border-green-500'
                    : item.token === userToken
                    ? 'bg-blue-50 border-2 border-blue-500'
                    : 'bg-gray-50 border border-gray-200'
                }`}
              >
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                    {idx + 1}
                  </div>
                </div>
                <div className="flex-1">
                  <p className="font-bold text-gray-900">{item.token}</p>
                  <p className="text-xs text-gray-500">
                    {item.status === 'SERVING' ? '🔴 Serving now' : '⏳ Waiting'}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-semibold text-gray-700">~{Math.max(0, (idx - 1) * 2)} min wait</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="bg-white rounded-2xl shadow-card p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">How Token System Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {[
            { step: 1, icon: '📝', title: 'Get Token', desc: 'Click button to generate unique token' },
            { step: 2, icon: '📊', title: 'Track Position', desc: 'See your position in real-time queue' },
            { step: 3, icon: '⏱️', title: 'Wait Time', desc: 'Get estimated wait time based on position' },
            { step: 4, icon: '✅', title: 'Get Served', desc: 'When token is called, go to counter' },
          ].map((item) => (
            <div key={item.step} className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-lg p-4 text-center">
              <p className="text-3xl mb-2">{item.icon}</p>
              <p className="font-bold text-gray-900 mb-1">Step {item.step}</p>
              <p className="text-sm font-semibold text-gray-700 mb-2">{item.title}</p>
              <p className="text-xs text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Benefits */}
      <div className="bg-white rounded-2xl shadow-card p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Benefits of Token System</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { icon: '⏰', benefit: 'No More Standing in Line', desc: 'Wait anywhere while keeping track of your position' },
            { icon: '📱', benefit: 'Real-Time Updates', desc: 'Instant notifications when your token is called' },
            { icon: '📊', benefit: 'Queue Analytics', desc: 'Historical data shows average wait times' },
            { icon: '🎯', benefit: 'Better Planning', desc: 'Plan your meals around peak times' },
            { icon: '✨', benefit: 'Fair Queue System', desc: 'FIFO (First In, First Out) ensures fairness' },
            { icon: '📈', benefit: 'Efficiency', desc: 'Helps staff manage counter operations better' },
          ].map((item, idx) => (
            <div key={idx} className="border border-gray-200 rounded-lg p-4">
              <p className="text-2xl mb-2">{item.icon}</p>
              <p className="font-bold text-gray-900 mb-1">{item.benefit}</p>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TokenSystemPage;
