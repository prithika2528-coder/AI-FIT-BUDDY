import { Flame, Trophy, CalendarCheck } from 'lucide-react';
import './Progress.css';

const MOCK_CHART_DATA = [
  { day: 'Mon', minutes: 45 },
  { day: 'Tue', minutes: 30 },
  { day: 'Wed', minutes: 60 },
  { day: 'Thu', minutes: 0 },
  { day: 'Fri', minutes: 45 },
  { day: 'Sat', minutes: 20 },
  { day: 'Sun', minutes: 0, today: true },
];

const Progress = () => {
  const maxMinutes = Math.max(...MOCK_CHART_DATA.map(d => d.minutes));

  return (
    <div className="page-progress">
      <h1 className="page-title">Your Progress</h1>

      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon"><CalendarCheck size={24} /></div>
          <div className="stat-info">
            <span className="stat-value">4</span>
            <span className="stat-label">Workouts</span>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon flame"><Flame size={24} /></div>
          <div className="stat-info">
            <span className="stat-value">1,250</span>
            <span className="stat-label">Calories</span>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon trophy"><Trophy size={24} /></div>
          <div className="stat-info">
            <span className="stat-value">3</span>
            <span className="stat-label">Day Streak</span>
          </div>
        </div>
      </div>

      <div className="chart-container card">
        <h2 className="chart-title">Active Minutes</h2>
        <div className="bar-chart">
          {MOCK_CHART_DATA.map((data, index) => {
            const height = maxMinutes > 0 ? (data.minutes / maxMinutes) * 100 : 0;
            return (
              <div key={index} className="bar-group">
                <div className="bar-track">
                  <div 
                    className={`bar-fill ${data.today ? 'today' : ''}`} 
                    style={{ height: `${height}%` }}
                  >
                    <span className="bar-tooltip">{data.minutes}m</span>
                  </div>
                </div>
                <span className={`bar-label ${data.today ? 'today' : ''}`}>{data.day}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Progress;
