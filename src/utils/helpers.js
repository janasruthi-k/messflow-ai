// Helper functions

export function formatDate(date) {
  return new Intl.DateTimeFormat('en-IN', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).format(date);
}

export function formatTime(date) {
  return new Intl.DateTimeFormat('en-IN', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  }).format(date);
}

export function generateToken() {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const letter = letters.charAt(Math.floor(Math.random() * letters.length));
  const number = Math.floor(Math.random() * 900) + 100;
  return `${letter}-${number}`;
}

export function exportToCSV(data, filename) {
  const csv = [
    Object.keys(data[0]).join(','),
    ...data.map((row) => Object.values(row).join(',')),
  ].join('\n');

  const blob = new Blob([csv], { type: 'text/csv' });
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  a.click();
  window.URL.revokeObjectURL(url);
}

export function getQueueStatus(count) {
  if (count <= 20) return 'LOW';
  if (count <= 50) return 'MEDIUM';
  return 'HIGH';
}

export function calculateEstimatedWait(queueSize, counters, serviceTimePerPerson = 1.5) {
  return Math.ceil((queueSize / (counters || 1)) * serviceTimePerPerson);
}
