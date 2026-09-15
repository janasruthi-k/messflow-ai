import React, { useState } from 'react';
import { Star, Send, AlertCircle } from 'lucide-react';
import { mockComplaints } from '../data/mockData';
import Button from '../components/Button';

const ComplaintsPage = () => {
  const [complaints, setComplaints] = useState(mockComplaints);
  const [newComplaint, setNewComplaint] = useState({
    category: 'Food Quality',
    rating: 5,
    comment: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const categories = ['Food Quality', 'Queue Problem', 'Cleanliness', 'Staff Behaviour', 'Other'];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newComplaint.comment.trim()) return;

    const complaint = {
      id: complaints.length + 1,
      student: 'Your Name',
      category: newComplaint.category,
      rating: newComplaint.rating,
      comment: newComplaint.comment,
      date: new Date().toISOString().split('T')[0],
      status: 'Open',
    };

    setComplaints([complaint, ...complaints]);
    setNewComplaint({ category: 'Food Quality', rating: 5, comment: '' });
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const getRatingColor = (rating) => {
    if (rating >= 4) return 'text-green-600';
    if (rating >= 3) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Open':
        return 'bg-red-100 text-red-800';
      case 'In Progress':
        return 'bg-yellow-100 text-yellow-800';
      case 'Resolved':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold text-gray-900">Complaints & Feedback</h1>
        <p className="text-gray-600 mt-2">Share your feedback to help us improve the mess management</p>
      </div>

      {/* Submit New Complaint */}
      <div className="bg-white rounded-2xl shadow-card p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Submit Feedback</h2>

        {submitted && (
          <div className="mb-6 bg-green-50 border border-green-200 rounded-lg p-4 flex items-start gap-3">
            <AlertCircle className="text-green-600 flex-shrink-0" size={20} />
            <div>
              <p className="font-semibold text-green-800">Thank you!</p>
              <p className="text-sm text-green-700">Your feedback has been submitted successfully.</p>
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Category */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-3">Complaint Category</label>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setNewComplaint({ ...newComplaint, category: cat })}
                  className={`px-4 py-2 rounded-lg font-semibold transition-smooth text-sm ${
                    newComplaint.category === cat
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Rating */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-3">Rating</label>
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setNewComplaint({ ...newComplaint, rating: star })}
                  className="transition-transform hover:scale-110"
                >
                  <Star
                    size={32}
                    className={`${
                      star <= newComplaint.rating
                        ? 'fill-yellow-400 text-yellow-400'
                        : 'text-gray-300'
                    }`}
                  />
                </button>
              ))}
            </div>
            <p className="text-sm text-gray-600 mt-2">{newComplaint.rating} out of 5 stars</p>
          </div>

          {/* Comment */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-3">Your Feedback</label>
            <textarea
              value={newComplaint.comment}
              onChange={(e) => setNewComplaint({ ...newComplaint, comment: e.target.value })}
              placeholder="Please describe your experience in detail..."
              rows="5"
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent resize-none"
            />
          </div>

          {/* Submit Button */}
          <Button type="submit" variant="primary" size="lg" className="flex items-center gap-2 w-full justify-center">
            <Send size={18} />
            Submit Feedback
          </Button>
        </form>
      </div>

      {/* Recent Complaints */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Recent Feedback</h2>
        <div className="space-y-4">
          {complaints.map((complaint) => (
            <div key={complaint.id} className="bg-white rounded-2xl shadow-card p-6 hover-lift">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-lg font-bold text-gray-900">{complaint.student}</h3>
                  <p className="text-sm text-gray-600">{complaint.category}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getStatusColor(complaint.status)}`}>
                  {complaint.status}
                </span>
              </div>

              {/* Rating Stars */}
              <div className="flex gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={18}
                    className={`${
                      star <= complaint.rating
                        ? 'fill-yellow-400 text-yellow-400'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>

              {/* Comment */}
              <p className="text-gray-700 mb-4">{complaint.comment}</p>

              {/* Date */}
              <p className="text-xs text-gray-500">Submitted on {complaint.date}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Feedback Stats */}
      <div className="bg-white rounded-2xl shadow-card p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Feedback Statistics</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <p className="text-4xl font-bold text-blue-600">{complaints.length}</p>
            <p className="text-gray-600 mt-2">Total Feedback</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-green-600">
              {complaints.filter((c) => c.status === 'Resolved').length}
            </p>
            <p className="text-gray-600 mt-2">Resolved Issues</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-yellow-600">
              {(complaints.reduce((sum, c) => sum + c.rating, 0) / complaints.length).toFixed(1)}
            </p>
            <p className="text-gray-600 mt-2">Average Rating</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComplaintsPage;
