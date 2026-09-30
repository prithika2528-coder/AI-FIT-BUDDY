import { Clock, Zap } from 'lucide-react';
import './WorkoutCard.css';

const WorkoutCard = ({ name, category, duration, level }) => {
  return (
    <div className="workout-card card">
      <div className="workout-header">
        <h3 className="workout-name">{name}</h3>
        <span className={`workout-category tag tag-${category.toLowerCase()}`}>
          {category}
        </span>
      </div>
      <div className="workout-meta">
        <div className="meta-item">
          <Clock size={16} />
          <span>{duration} min</span>
        </div>
        <div className="meta-item">
          <Zap size={16} />
          <span>{level}</span>
        </div>
      </div>
    </div>
  );
};

export default WorkoutCard;
