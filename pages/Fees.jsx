
import { useState } from 'react';
import DataTable from '../components/DataTable';

export default function Fees() {
  const [payments, setPayments] = useState([
    { id: 'PAY001', student: 'John Smith', amount: 500, status: 'Paid' },
    { id: 'PAY002', student: 'Mary Johnson', amount: 300, status: 'Pending' },
    { id: 'PAY003', student: 'David Brown', amount: 500, status: 'Paid' }
  ]);

  const columns = [
    { key: 'id', label: 'Payment ID' },
    { key: 'student', label: 'Student Name' },
    {
      key: 'amount',
      label: 'Amount',
      render: value => `${value.toLocaleString()} RWF`
    },
    {
      key: 'status',
      label: 'Payment Status',
      render: (value, row) => (
        <select
          value={value}
          onChange={e => setPayments(payments.map(p =>
            p.id === row.id ? {...p, status: e.target.value} : p
          ))}
        >
          <option>Paid</option>
          <option>Pending</option>
        </select>
      )
    }
  ];

  const total = payments
    .filter(p => p.status === 'Paid')
    .reduce((sum, p) => sum + p.amount, 0);

  return (
    <>
      <div className="page-toolbar">
        <div>
          <h1>Fees Management</h1>
          <p>Track student payments and outstanding fees.</p>
        </div>
      </div>

      <div className="panel">
        <h3>Total Fees Collected</h3>
        <h1>{total.toLocaleString()} RWF</h1>
      </div>

      <div className="panel">
        <h3>Payment Records</h3>
        <DataTable columns={columns} data={payments} />
      </div>
    </>
  );
}