import { useState } from 'react';
import DataTable from '../components/DataTable';

export default function Attendance() {
  const [records, setRecords] = useState([
    { id: 'ST001', name: 'John Smith', date: '2026-11-19', status: 'Present' },
    { id: 'ST002', name: 'Mary Johnson', date: '2026-11-19', status: 'Absent' },
    { id: 'ST003', name: 'David Brown', date: '2026-11-19', status: 'Late' }
  ]);

  const updateStatus = (id, status) => {
    setRecords(records.map(record =>
      record.id === id ? { ...record, status } : record
    ));
  };

  const columns = [
    { key: 'id', label: 'Student ID' },
    { key: 'name', label: 'Student Name' },
    { key: 'date', label: 'Date' },
    {
      key: 'status',
      label: 'Attendance',
      render: (value, row) => (
        <select
          value={value}
          onChange={e => updateStatus(row.id, e.target.value)}
        >
          <option>Present</option>
          <option>Absent</option>
          <option>Late</option>
        </select>
      )
    }
  ];

  const present = records.filter(r => r.status === 'Present').length;
  const absent = records.filter(r => r.status === 'Absent').length;
  const late = records.filter(r => r.status === 'Late').length;

  return (
    <>
      <div className="page-toolbar">
        <div>
          <h1>Attendance Management</h1>
          <p>Track daily student attendance.</p>
        </div>
      </div>

      <div className="stats-grid">
        <div className="panel"><h3>Present</h3><h2>{present}</h2></div>
        <div className="panel"><h3>Absent</h3><h2>{absent}</h2></div>
        <div className="panel"><h3>Late</h3><h2>{late}</h2></div>
      </div>

      <div className="panel">
        <h3>Daily Attendance Records</h3>
        <DataTable columns={columns} data={records} />
      </div>
    </>
  );
}
