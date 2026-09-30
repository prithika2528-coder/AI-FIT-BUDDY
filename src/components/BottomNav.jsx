import { NavLink } from 'react-router-dom';
import { Home, Dumbbell, MessageSquare, LineChart } from 'lucide-react';
import './BottomNav.css';

const BottomNav = () => {
  return (
    <nav className="bottom-nav">
      <div className="bottom-nav-content">
        <NavLink to="/" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
          <Home size={24} />
          <span>Home</span>
        </NavLink>
        <NavLink to="/workouts" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
          <Dumbbell size={24} />
          <span>Workouts</span>
        </NavLink>
        <NavLink to="/coach" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
          <MessageSquare size={24} />
          <span>Coach</span>
        </NavLink>
        <NavLink to="/progress" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
          <LineChart size={24} />
          <span>Progress</span>
        </NavLink>
      </div>
    </nav>
  );
};

export default BottomNav;
