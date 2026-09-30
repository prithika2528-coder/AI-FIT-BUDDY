import { useState } from 'react';
import WorkoutCard from '../components/WorkoutCard';
import './Workouts.css';

const MOCK_WORKOUTS = [
  { id: 1, name: 'Full Body HIIT', category: 'Cardio', duration: 25, level: 'Advanced' },
  { id: 2, name: 'Core Crusher', category: 'Strength', duration: 15, level: 'Intermediate' },
  { id: 3, name: 'Morning Yoga Flow', category: 'Mobility', duration: 20, level: 'All levels' },
  { id: 4, name: 'Leg Day Power', category: 'Strength', duration: 45, level: 'Advanced' },
  { id: 5, name: 'Recovery Stretch', category: 'Mobility', duration: 15, level: 'All levels' },
  { id: 6, name: 'Endurance Run', category: 'Cardio', duration: 30, level: 'Intermediate' }
];

const CATEGORIES = ['All', 'Strength', 'Cardio', 'Mobility'];

const Workouts = () => {
  const [filter, setFilter] = useState('All');

  const filteredWorkouts = filter === 'All' 
    ? MOCK_WORKOUTS 
    : MOCK_WORKOUTS.filter(w => w.category === filter);

  return (
    <div className="page-workouts">
      <h1 className="page-title">Workouts</h1>
      
      <div className="filters">
        {CATEGORIES.map(cat => (
          <button 
            key={cat}
            className={`filter-chip ${filter === cat ? 'active' : ''}`}
            onClick={() => setFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="workout-grid">
        {filteredWorkouts.map(workout => (
          <WorkoutCard 
            key={workout.id}
            name={workout.name}
            category={workout.category}
            duration={workout.duration}
            level={workout.level}
          />
        ))}
      </div>
    </div>
  );
};

export default Workouts;
