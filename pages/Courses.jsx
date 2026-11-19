import { useState } from 'react';
import { Plus } from 'lucide-react';
import DataTable from '../components/DataTable';

export default function Courses() {
  const [courses, setCourses] = useState([
    { id: 'CR001', name: 'Computer Science', teacher: 'Mr. James', students: 120 },
    { id: 'CR002', name: 'Business Studies', teacher: 'Mrs. Jane', students: 90 },
    { id: 'CR003', name: 'Mathematics', teacher: 'Mr. David', students: 110 }
  ]);

  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ name: '', teacher: '' });

  const addCourse = (e) => {
    e.preventDefault();

    setCourses([...courses, {
      id: `CR${String(Date.now()).slice(-5)}`,
      ...form,
      students: 0
    }]);

    setForm({ name: '', teacher: '' });
    setShowForm(false);
  };

  const columns = [
    { key: 'id', label: 'Course ID' },
    { key: 'name', label: 'Course Name' },
    { key: 'teacher', label: 'Teacher' },
    { key: 'students', label: 'Students Enrolled' }
  ];

  return (
    <>
      <div className="page-toolbar">
        <div>
          <h1>Courses Management</h1>
          <p>Manage academic courses and teachers.</p>
        </div>

        <button className="primary-btn" onClick={() => setShowForm(!showForm)}>
          <Plus size={18} /> Add Course
        </button>
      </div>

      {showForm && (
        <form className="panel student-form" onSubmit={addCourse}>
          <h3>New Course</h3>

          <input
            placeholder="Course Name"
            required
            value={form.name}
            onChange={e => setForm({...form, name: e.target.value})}
          />

          <input
            placeholder="Teacher Name"
            required
            value={form.teacher}
            onChange={e => setForm({...form, teacher: e.target.value})}
          />

          <button className="primary-btn">Save Course</button>
        </form>
      )}

      <div className="panel">
        <DataTable columns={columns} data={courses} />
      </div>
    </>
  );
}