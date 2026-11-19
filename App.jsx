import { Routes, Route, Navigate } from 'react-router-dom';

import Sidebar from './components/Sidebar';
import Header from './components/Header';

import Dashboard from './pages/Dashboard';
import Students from './pages/Students';
import Attendance from './pages/Attendance';
import Courses from './pages/Courses';
import Fees from './pages/Fees';
import Grades from './pages/Grades';
import Reports from './pages/Reports';

export default function App() {
  return (
    <div className="app">
      <Sidebar />

      <main className="main-content">
        <Header />

        <div className="page-content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/students" element={<Students />} />
            <Route path="/attendance" element={<Attendance />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/fees" element={<Fees />} />
            <Route path="/grades" element={<Grades />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </main>
    </div>
  );
}