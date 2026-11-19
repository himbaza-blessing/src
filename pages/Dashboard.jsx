import {
  Users,
  GraduationCap,
  Wallet,
  CalendarCheck
} from 'lucide-react';

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from 'recharts';


import DataTable from '../components/DataTable';
import StatCard from '../components/StatCard';

const enrollmentData = [
  { month: 'Jan', students: 120 },
  { month: 'Feb', students: 150 },
  { month: 'Mar', students: 180 },
  { month: 'Apr', students: 140 },
  { month: 'May', students: 210 },
  { month: 'Jun', students: 190 }
];

const attendanceData = [
  { name: 'Present', value: 75 },
  { name: 'Absent', value: 15 },
  { name: 'Late', value: 10 }
];

const recentStudents = [
  {
    id: 'ST001',
    name: 'John Smith',
    course: 'Computer Science',
    status: 'Active'
  },
  {
    id: 'ST002',
    name: 'Mary Johnson',
    course: 'Business Studies',
    status: 'Active'
  },
  {
    id: 'ST003',
    name: 'David Brown',
    course: 'Mathematics',
    status: 'Active'
  },
  {
    id: 'ST004',
    name: 'Sarah Wilson',
    course: 'Biology',
    status: 'Active'
  }
];

const colors = ['#2563eb', '#ef4444', '#f59e0b'];

export default function Dashboard() {
  const columns = [
    { key: 'id', label: 'Student ID' },
    { key: 'name', label: 'Student Name' },
    { key: 'course', label: 'Course' },
    {
      key: 'status',
      label: 'Status',
      render: value => (
        <span className="status active">{value}</span>
      )
    }
  ];

  return (
    <>
      <div className="welcome-section">
        <div>
          <h1>School Overview</h1>
          <p>
            Here is what's happening at your school today.
          </p>
        </div>
      </div>

      <div className="stats-grid">
        <StatCard
          title="Total Students"
          value="850"
          change="+12% from last month"
          icon={Users}
          color="blue"
        />

        <StatCard
          title="Total Teachers"
          value="45"
          change="Active teaching staff"
          icon={GraduationCap}
          color="purple"
        />

        <StatCard
          title="Fees Collected"
          value="$42,500"
          change="This academic year"
          icon={Wallet}
          color="green"
        />

        <StatCard
          title="Attendance Rate"
          value="92%"
          change="+5% this week"
          icon={CalendarCheck}
          color="orange"
        />
      </div>

      <div className="charts-grid">

        {/* Enrollment Chart */}
        <div className="panel">
          <div className="panel-heading">
            <div>
              <h3>Student Enrollment</h3>
              <p>Monthly enrollment overview</p>
            </div>

            <span className="chart-label">2026</span>
          </div>

          <div className="chart">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={enrollmentData}>
                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                />

                <XAxis
                  dataKey="month"
                  axisLine={false}
                  tickLine={false}
                />

                <YAxis
                  axisLine={false}
                  tickLine={false}
                />

                <Tooltip />

                <Bar
                  dataKey="students"
                  fill="#2563eb"
                  radius={[6, 6, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Attendance Chart */}
        <div className="panel">
          <div className="panel-heading">
            <div>
              <h3>Attendance Overview</h3>
              <p>Student attendance statistics</p>
            </div>
          </div>

          <div className="chart">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={attendanceData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={90}
                  innerRadius={55}
                  paddingAngle={4}
                  label
                >
                  {attendanceData.map((entry, index) => (
                    <Cell
                      key={entry.name}
                      fill={colors[index]}
                    />
                  ))}
                </Pie>

                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="attendance-legend">
            {attendanceData.map((item, index) => (
              <div key={item.name}>
                <span
                  className="legend-dot"
                  style={{ background: colors[index] }}
                />
                {item.name}: {item.value}%
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Students */}
      <div className="panel recent-panel">
        <div className="panel-heading">
          <div>
            <h3>Recent Students</h3>
            <p>Recently registered students</p>
          </div>

          <span className="chart-label">
            Latest registrations
          </span>
        </div>

        <DataTable
          columns={columns}
          data={recentStudents}
        />
      </div>
    </>
  );
}