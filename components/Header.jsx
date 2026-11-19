
import { Search, Bell, CalendarDays } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const titles = {
  '/': 'Dashboard',
  '/students': 'Students',
  '/attendance': 'Attendance',
  '/courses': 'Courses',
  '/fees': 'Fees Management',
  '/grades': 'Grades',
  '/reports': 'Reports'
};

export default function Header() {
  const location = useLocation();

  return (
    <header className="header">
      <div>
        <h2>{titles[location.pathname] || 'Dashboard'}</h2>
        <p>Welcome back! Here's your school overview.</p>
      </div>

      <div className="header-actions">
        <div className="header-search">
          <Search size={17} />
          <input placeholder="Search..." />
        </div>

        <button className="icon-button" aria-label="Notifications">
          <Bell size={20} />
          <span className="notification-dot"></span>
        </button>

        <div className="header-date">
          <CalendarDays size={17} />
          {new Date().toLocaleDateString()}
        </div>
      </div>
    </header>
  );
}
