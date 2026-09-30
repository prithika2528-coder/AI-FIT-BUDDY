import './ProgressRing.css';

const ProgressRing = ({ percentage = 0, size = 120, strokeWidth = 10, children }) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className="progress-ring-container" style={{ width: size, height: size }}>
      <svg
        className="progress-ring"
        width={size}
        height={size}
      >
        <circle
          className="progress-ring-track"
          strokeWidth={strokeWidth}
          r={radius}
          cx={size / 2}
          cy={size / 2}
        />
        <circle
          className="progress-ring-fill animate-ring"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={circumference}
          strokeLinecap="round"
          r={radius}
          cx={size / 2}
          cy={size / 2}
          style={{ '--target-offset': offset }}
        />
      </svg>
      <div className="progress-ring-content">
        {children}
      </div>
    </div>
  );
};

export default ProgressRing;
