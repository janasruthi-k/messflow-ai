// Mock data for the application

export const mockUsers = {
  student: {
    id: 1,
    name: 'Arjun Kumar',
    email: 'student@college.com',
    role: 'STUDENT',
    hostel: 'Hostel A',
    room: '204',
  },
  staff: {
    id: 2,
    name: 'Rajesh Singh',
    email: 'staff@college.com',
    role: 'STAFF',
    hostel: 'All',
    room: 'N/A',
  },
  admin: {
    id: 3,
    name: 'Admin User',
    email: 'admin@college.com',
    role: 'ADMIN',
    hostel: 'All',
    room: 'N/A',
  },
};

export const mockQueueData = {
  breakfast: {
    meal: 'Breakfast',
    time: '8:00 AM - 9:00 AM',
    students: 42,
    counters: 2,
    status: 'MEDIUM',
  },
  lunch: {
    meal: 'Lunch',
    time: '12:30 PM - 2:00 PM',
    students: 68,
    counters: 4,
    status: 'HIGH',
  },
  dinner: {
    meal: 'Dinner',
    time: '7:30 PM - 9:00 PM',
    students: 55,
    counters: 3,
    status: 'MEDIUM',
  },
};

export const mockMealSchedule = [
  {
    day: 'Monday',
    breakfast: 'Idli & Sambar',
    lunch: 'Rice & Chicken Curry',
    dinner: 'Chapati & Paneer',
    veg: true,
  },
  {
    day: 'Tuesday',
    breakfast: 'Pongal',
    lunch: 'Rice & Biryani',
    dinner: 'Dosa & Chutney',
    veg: true,
  },
  {
    day: 'Wednesday',
    breakfast: 'Poori & Potato Curry',
    lunch: 'Rice & Mutton Curry',
    dinner: 'Parotta & Curry',
    veg: false,
  },
  {
    day: 'Thursday',
    breakfast: 'Upma',
    lunch: 'Rice & Fish Curry',
    dinner: 'Roti & Vegetables',
    veg: false,
  },
  {
    day: 'Friday',
    breakfast: 'Puttu & Kadhi',
    lunch: 'Rice & Rajma',
    dinner: 'Naan & Paneer Tikka',
    veg: true,
  },
  {
    day: 'Saturday',
    breakfast: 'Aloo Paratha',
    lunch: 'Rice & Chole Bhature',
    dinner: 'Pizza & Salad',
    veg: true,
  },
  {
    day: 'Sunday',
    breakfast: 'Pancakes & Syrup',
    lunch: 'Rice & Tandoori Chicken',
    dinner: 'Butter Chicken & Naan',
    veg: false,
  },
];

export const mockPredictionData = [
  {
    meal: 'Breakfast',
    expectedStudents: 280,
    predictedPeak: '8:30 AM',
    expectedQueue: 45,
    predictedWait: 12,
    risk: 'LOW',
    factors: [
      'Historical crowd pattern',
      'Current queue size',
      'Day of week',
      'Previous attendance',
    ],
    explanation:
      'Historical data shows morning breakfast has consistent attendance. Weather conditions are normal, and no special events are scheduled.',
  },
  {
    meal: 'Lunch',
    expectedStudents: 520,
    predictedPeak: '1:05 PM',
    expectedQueue: 95,
    predictedWait: 16,
    risk: 'HIGH',
    factors: [
      'Noon peak time',
      'Large student attendance',
      'Limited counter capacity',
      'Weekend effect',
    ],
    explanation:
      'Historical meal-time patterns indicate high student arrival around 1:00 PM. Current queue growth is above baseline. Recommend opening additional counter.',
  },
  {
    meal: 'Dinner',
    expectedStudents: 410,
    predictedPeak: '7:45 PM',
    expectedQueue: 68,
    predictedWait: 14,
    risk: 'MEDIUM',
    factors: [
      'Evening peak time',
      'Regular attendance',
      'Staff availability',
    ],
    explanation:
      'Dinner shows moderate crowd patterns. Expected queue within normal range. Standard operations sufficient.',
  },
];

export const mockQueueHistory = [
  { time: '12:30', students: 35 },
  { time: '12:40', students: 52 },
  { time: '12:50', students: 70 },
  { time: '1:00', students: 91 },
  { time: '1:10', students: 95 },
  { time: '1:20', students: 78 },
  { time: '1:30', students: 55 },
  { time: '1:40', students: 32 },
];

export const mockFoodDemandData = [
  { mealTime: '8:00 AM', predicted: 280, actual: 265 },
  { mealTime: '12:30 PM', predicted: 520, actual: 498 },
  { mealTime: '7:30 PM', predicted: 410, actual: 425 },
];

export const mockReports = [
  {
    id: 1,
    date: '2024-01-15',
    avgWaitTime: 11,
    maxQueue: 95,
    studentsServed: 1200,
    peakTime: '1:05 PM',
    counterUtilization: 82,
    timeSaved: 450,
  },
  {
    id: 2,
    date: '2024-01-14',
    avgWaitTime: 9,
    maxQueue: 78,
    studentsServed: 1050,
    peakTime: '1:10 PM',
    counterUtilization: 76,
    timeSaved: 380,
  },
  {
    id: 3,
    date: '2024-01-13',
    avgWaitTime: 13,
    maxQueue: 105,
    studentsServed: 1350,
    peakTime: '12:55 PM',
    counterUtilization: 88,
    timeSaved: 520,
  },
];

export const mockComplaints = [
  {
    id: 1,
    student: 'Priya Sharma',
    category: 'Food Quality',
    rating: 2,
    comment: 'Rice was overcooked today.',
    date: '2024-01-15',
    status: 'Open',
  },
  {
    id: 2,
    student: 'Aman Verma',
    category: 'Queue Problem',
    rating: 3,
    comment: 'Long queue during lunch. Need more counters.',
    date: '2024-01-15',
    status: 'In Progress',
  },
  {
    id: 3,
    student: 'Neha Singh',
    category: 'Cleanliness',
    rating: 4,
    comment: 'Mess hall was very clean today.',
    date: '2024-01-14',
    status: 'Resolved',
  },
];

export const mockHostels = [
  { name: 'Hostel A', students: 220, expectedLunch: 185, actualLunch: 172 },
  { name: 'Hostel B', students: 250, expectedLunch: 210, actualLunch: 198 },
  { name: 'Hostel C', students: 180, expectedLunch: 150, actualLunch: 158 },
  { name: 'Hostel D', students: 200, expectedLunch: 165, actualLunch: 170 },
];

export const mockNotifications = [
  {
    id: 1,
    type: 'warning',
    message: 'Lunch queue crossed 80 students.',
    timestamp: '2 minutes ago',
  },
  {
    id: 2,
    type: 'info',
    message: 'Counter 5 recommended by AI.',
    timestamp: '5 minutes ago',
  },
  {
    id: 3,
    type: 'success',
    message: 'Breakfast queue returned to normal.',
    timestamp: '15 minutes ago',
  },
  {
    id: 4,
    type: 'info',
    message: 'Food demand predicted to increase tomorrow.',
    timestamp: '1 hour ago',
  },
];

export const mockWeeklyHeatmap = [
  { day: 'Mon', breakfast: 35, lunch: 85, dinner: 62 },
  { day: 'Tue', breakfast: 42, lunch: 92, dinner: 68 },
  { day: 'Wed', breakfast: 38, lunch: 78, dinner: 55 },
  { day: 'Thu', breakfast: 45, lunch: 95, dinner: 72 },
  { day: 'Fri', breakfast: 40, lunch: 88, dinner: 65 },
  { day: 'Sat', breakfast: 50, lunch: 102, dinner: 78 },
  { day: 'Sun', breakfast: 55, lunch: 110, dinner: 85 },
];

export const mockDashboardStats = {
  studentsServed: 842,
  currentQueue: 68,
  avgWaitTime: 11,
  peakCrowd: '1:00 PM',
  mealsRemaining: 326,
  activeCounters: '4/5',
};
