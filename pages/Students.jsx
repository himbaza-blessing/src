
import { useState } from 'react';
import { Plus, Search, Trash2 } from 'lucide-react';
import DataTable from '../components/DataTable';

export default function Students() {
  const [students, setStudents] = useState([
    { id: 'ST001', name: 'John Smith', gender: 'Male', course: 'Computer Science', status: 'Active' },
    { id: 'ST002', name: 'Mary Johnson', gender: 'Female', course: 'Business Studies', status: 'Active' },
    { id: 'ST003', name: 'David Brown', gender: 'Male', course: 'Mathematics', status: 'Active' }
  ]);

  const [search, setSearch] = useState('');
  const [showForm, setShowForm] = useState(false);

  const [form, setForm] = useState({
    name: '',
    gender: 'Male',
    course: ''
  });

  const addStudent = (e) => {
    e.preventDefault();

    const newStudent = {
      id: `ST${String(Date.now()).slice(-5)}`,
      ...form,
      status: 'Active'
    };

    setStudents([...students, newStudent]);
    setForm({ name: '', gender: 'Male', course: '' });
    setShowForm(false);
  };

  const deleteStudent = (id) => {
    setStudents(students.filter(student => student.id !== id));
  };

  const filteredStudents = students.filter(student =>
    `${student.name} ${student.id} ${student.course}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  const columns = [
    { key: 'id', label: 'Student ID' },
    { key: 'name', label: 'Full Name' },
    { key: 'gender', label: 'Gender' },
    { key: 'course', label: 'Course' },
    {
      key: 'status',
      label: 'Status',
      render: value => <span className="status active">{value}</span>
    },
    {
      key: 'actions',
      label: 'Actions',
      render: (_, row) => (
        <button
          className="delete-btn"
          onClick={() => deleteStudent(row.id)}
        >
          <Trash2 size={16} />
        </button>
      )
    }
  ];

  return (
    <>
      <div className="page-toolbar">
        <div>
          <h1>Students Management</h1>
          <p>Manage student information and registrations.</p>
        </div>

        <button
          className="primary-btn"
          onClick={() => setShowForm(!showForm)}
        >
          <Plus size={18} /> Add Student
        </button>
      </div>

      {showForm && (
        <form className="panel student-form" onSubmit={addStudent}>
          <h3>Register New Student</h3>

          <input
            placeholder="Full Name"
            required
            value={form.name}
            onChange={e => setForm({...form, name: e.target.value})}
          />

          <select
            value={form.gender}
            onChange={e => setForm({...form, gender: e.target.value})}
          >
            <option>Male</option>
            <option>Female</option>
          </select>

          <input
            placeholder="Course"
            required
            value={form.course}
            onChange={e => setForm({...form, course: e.target.value})}
          />

          <button className="primary-btn" type="submit">
            Save Student
          </button>
        </form>
      )}

      <div className="panel">
        <div className="search-box">
          <Search size={18} />

          <input
            placeholder="Search students..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </div>

        <DataTable columns={columns} data={filteredStudents} />
      </div>
    </>
  );
}
