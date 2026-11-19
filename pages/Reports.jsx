import {
  Download,
  Users,
  Wallet,
  CalendarCheck,
  GraduationCap
} from 'lucide-react';

const reportData = [
  { title: 'Total Students', value: 850, icon: Users },
  { title: 'Total Teachers', value: 45, icon: GraduationCap },
  { title: 'Fees Collected', value: '42,500 RWF', icon: Wallet },
  { title: 'Attendance Rate', value: '92%', icon: CalendarCheck }
];

export default function Reports() {
  const printReport = () => {
    window.print();
  };

  return (
    <>
      <div className="page-toolbar">
        <div>
          <h1>School Reports</h1>
          <p>View and generate school performance reports.</p>
        </div>

        <button className="primary-btn" onClick={printReport}>
          <Download size={18} />
          Print Report
        </button>
      </div>

      <div className="stats-grid">
        {reportData.map((item, index) => {
          const Icon = item.icon;

          return (
            <div className="stat-card" key={index}>
              <div className="stat-icon blue">
                <Icon size={23} />
              </div>

              <div>
                <p>{item.title}</p>
                <h2>{item.value}</h2>
              </div>
            </div>
          );
        })}
      </div>

      <div className="panel report-panel">
        <h3>Academic Performance Report</h3>
        <p>School academic year 2026</p>

        <div className="report-row">
          <span>Total enrolled students</span>
          <strong>850</strong>
        </div>

        <div className="report-row">
          <span>Active teachers</span>
          <strong>45</strong>
        </div>

        <div className="report-row">
          <span>Attendance rate</span>
          <strong>92%</strong>
        </div>

        <div className="report-row">
          <span>Total fees collected</span>
          <strong>42,500 RWF</strong>
        </div>

        <div className="report-row">
          <span>Academic courses</span>
          <strong>3</strong>
        </div>
      </div>
    </>
  );
}