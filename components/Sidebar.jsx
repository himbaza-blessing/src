
import { NavLink } from 'react-router-dom';
import {
  LayoutDashboard,
  Users,
  CalendarCheck,
  BookOpen,
  Wallet,
  GraduationCap,
  FileBarChart,
  School,
  Menu,
  X
} from 'lucide-react';
import { useState } from 'react';

const menuItems = [
  { name: 'Dashboard', path: '/', icon: LayoutDashboard },
  { name: 'Students', path: '/students', icon: Users },
  { name: 'Attendance', path: '/attendance', icon: CalendarCheck },
  { name: 'Courses', path: '/courses', icon: BookOpen },
  { name: 'Fees', path: '/fees', icon: Wallet },
  { name: 'Grades', path: '/grades', icon: GraduationCap },
  { name: 'Reports', path: '/reports', icon: FileBarChart },
];

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button className="mobile-menu" onClick={() => setOpen(!open)}>
        {open ? <X /> : <Menu />}
      </button>

      {open && <div className="sidebar-overlay" onClick={() => setOpen(false)} />}

      <aside className={`sidebar ${open ? 'sidebar-open' : ''}`}>
        <div className="logo">
          <School size={30} />
          <span>EduManage</span>
        </div>

        <p className="menu-label">MAIN MENU</p>

        <nav>
          {menuItems.map(({ name, path, icon: Icon }) => (
            <NavLink
              key={path}
              to={path}
              end={path === '/'}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `nav-link ${isActive ? 'active' : ''}`
              }
            >
              <Icon size={19} />
              <span>{name}</span>
            </NavLink>
          ))}
        </nav>

        <div className="sidebar-bottom">
          <div className="admin-avatar">AD</div>
          <div>
            <strong>Administrator</strong>
            <small>School Admin</small>
          </div>
        </div>
      </aside>
    </>
  );
}