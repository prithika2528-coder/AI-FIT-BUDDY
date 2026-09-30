import { User } from 'lucide-react';
import './TopNav.css';

const TopNav = () => {
  return (
    <header className="header">
      <div className="logo">
        <span className="logo-accent">AI</span> Fit Buddy
      </div>
      <button className="profile-btn" aria-label="Profile">
        <User size={20} />
      </button>
    </header>
  );
};

export default TopNav;
