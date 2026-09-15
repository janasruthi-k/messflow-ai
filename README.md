# MessFlow AI - Hostel Mess Queue Management System

An AI-powered web application designed to reduce waiting times and improve efficiency in hostel mess halls through real-time queue monitoring, intelligent predictions, and smart counter recommendations.

## Features

- 🎯 **Real-time Queue Monitoring**: Live queue status with automatic status updates
- 🤖 **AI Queue Prediction**: Predict peak times and expected crowd sizes
- 🎟️ **Token System**: Generate tokens and track queue position
- 📊 **Analytics Dashboard**: Comprehensive statistics and trends
- 🍽️ **Meal Schedule**: Weekly meal planning with menu items
- 💡 **Smart Recommendations**: AI-powered counter opening suggestions
- 📈 **Food Demand Prediction**: Predict meal requirements and reduce waste
- 📋 **Reports & Analytics**: Detailed reports with CSV export
- 💬 **Complaint System**: Student feedback and issue tracking
- 📱 **Mobile Responsive**: Works seamlessly on all devices

## Tech Stack

- React 18
- Vite
- Tailwind CSS
- Recharts
- Lucide React Icons

## Installation

```bash
# Clone the repository
git clone https://github.com/janasruthi-k/messflow-ai.git
cd messflow-ai

# Install dependencies
npm install
```

## Running the Application

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The application will open at `http://localhost:5173`

## Project Structure

```
src/
├── components/          # Reusable UI components
├── pages/              # Page components
├── data/               # Mock data and utilities
├── hooks/              # Custom React hooks
├── utils/              # Helper functions
├── assets/             # Images and icons
├── App.jsx             # Main app component
├── main.jsx            # Entry point
└── index.css           # Global styles
```

## Demo Credentials

**Role: Student**
- Email: student@college.com
- Password: password123

**Role: Mess Staff**
- Email: staff@college.com
- Password: password123

**Role: Admin**
- Email: admin@college.com
- Password: password123

## AI Concepts Implemented

1. **Time-Series Forecasting**: Historical data analysis for queue predictions
2. **Anomaly Detection**: Identifies unusual queue patterns
3. **Trend Analysis**: Observes meal-time patterns across days
4. **Capacity Planning**: Recommends optimal counter operations
5. **Demand Forecasting**: Predicts meal requirements

## Features Implemented

✅ Login with role-based access
✅ Interactive dashboard with real-time statistics
✅ Live queue monitoring for all meal times
✅ Token generation and tracking
✅ AI-powered queue predictions
✅ Smart counter recommendations
✅ Meal schedule with menu planning
✅ Queue heatmap visualization
✅ Hostel-wise analytics
✅ Staff dashboard for counter management
✅ Food demand forecasting
✅ Comprehensive reports with charts
✅ Complaint/feedback system
✅ Notification system
✅ Mobile responsive design
✅ Mock data simulation
✅ CSV export functionality

## Performance

- Lightweight (~45KB gzipped)
- Client-side rendering for instant interactions
- Optimized re-renders with React hooks
- Responsive charts with Recharts

## Problem Statement

Hostel students currently experience long queues during peak meal times, causing unnecessary waiting and crowding because student arrival patterns change rapidly while mess counter capacity remains fixed.

## Objectives

1. Reduce average student waiting time
2. Predict peak mess crowd periods
3. Monitor queue size in real time
4. Recommend suitable counter capacity
5. Improve meal preparation planning
6. Reduce food wastage
7. Improve overall mess efficiency

## License

MIT License - feel free to use this project for educational purposes.
