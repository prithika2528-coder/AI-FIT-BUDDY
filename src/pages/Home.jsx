import { useNavigate } from 'react-router-dom';
import ProgressRing from '../components/ProgressRing';
import WorkoutCard from '../components/WorkoutCard';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="page-home">
      <section className="hero">
        <h1 className="hero-title">Your workout plan, adjusted every day.</h1>
      </section>

      <section className="daily-stats">
        <div className="stats-main">
          <ProgressRing percentage={70} size={140} strokeWidth={12}>
            <span className="ring-value">70%</span>
            <span className="ring-label">Goal</span>
          </ProgressRing>
          <div className="stats-details">
            <div className="stat-item">
              <span className="stat-val">340</span>
              <span className="stat-name">Calories</span>
            </div>
            <div className="stat-item">
              <span className="stat-val">6,240</span>
              <span className="stat-name">Steps</span>
            </div>
            <div className="stat-item">
              <span className="stat-val">45</span>
              <span className="stat-name">Active Min</span>
            </div>
          </div>
        </div>
      </section>

      <section className="todays-plan">
        <div className="section-header">
          <h2>Today's Plan</h2>
        </div>
        <div className="plan-cards">
          <WorkoutCard name="Dynamic Warm-up" category="Warmup" duration={5} level="All levels" />
          <WorkoutCard name="Upper Body Strength" category="Strength" duration={30} level="Intermediate" />
          <WorkoutCard name="Stretching & Recovery" category="Cooldown" duration={10} level="All levels" />
        </div>
      </section>

      <section className="home-actions">
        <button className="btn btn-primary" onClick={() => navigate('/coach')}>
          Ask your buddy
        </button>
        <button className="btn btn-secondary" onClick={() => navigate('/workouts')}>
          Browse workouts
        </button>
      </section>
    </div>
  );
};

export default Home;
