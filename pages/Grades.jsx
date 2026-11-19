import { useState } from 'react';
import { Plus } from 'lucide-react';
import DataTable from '../components/DataTable';

export default function Grades() {
  const [grades, setGrades] = useState([
    { id: 'ST001', name: 'John Smith', course: 'Mathematics', score: 85 },
    { id: 'ST002', name: 'Mary Johnson', course: 'Biology', score: 92 },
    { id: 'ST003', name: 'David Brown', course: 'Computer Science', score: 67 }
  ]);

  const [showForm, setShowForm] = useState(false);

  const [form, setForm] = useState({
    name: '',
    course: '',
    score: ''
  });

  const getGrade = (score) => {
    if (score >= 90) return 'A';
    if (score >= 80) return 'B';
    if (score >= 70) return 'C';
    if (score >= 60) return 'D';
    return 'F';
  };

  const addGrade = (e) => {
    e.preventDefault();

    const newGrade = {
      id: `ST${String(Date.now()).slice(-5)}`,
      ...form,
      score: Number(form.score)
    };

    setGrades([...grades, newGrade]);

    setForm({
      name: '',
      course: '',
      score: ''
    });

    setShowForm(false);
  };

  const columns = [
    { key: 'id', label: 'Student ID' },
    { key: 'name', label: 'Student Name' },
    { key: 'course', label: 'Course' },
    { key: 'score', label: 'Score (%)' },
    {
      key: 'grade',
      label: 'Grade',
      render: (_, row) => (
        <span className={`status ${getGrade(row.score) === 'F' ? 'inactive' : 'active'}`}>
          {getGrade(row.score)}
        </span>
      )
    }
  ];

  const average = grades.length
    ? grades.reduce((sum, item) => sum + item.score, 0) / grades.length
    : 0;

  return (
    <>
      <div className="page-toolbar">
        <div>
          <h1>Grades Management</h1>
          <p>Manage student academic performance and examination results.</p>
        </div>

        <button
          className="primary-btn"
          onClick={() => setShowForm(!showForm)}
        >
          <Plus size={18} /> Add Grade
        </button>
      </div>

      <div className="stats-grid">
        <div className="panel">
          <h3>Total Results</h3>
          <h2>{grades.length}</h2>
        </div>

        <div className="panel">
          <h3>Average Score</h3>
          <h2>{average.toFixed(1)}%</h2>
        </div>

        <div className="panel">
          <h3>Passed Students</h3>
          <h2>{grades.filter(g => g.score >= 50).length}</h2>
        </div>
      </div>

      {showForm && (
        <form className="panel student-form" onSubmit={addGrade}>
          <h3>Add Student Grade</h3>

          <input
            placeholder="Student Name"
            required
            value={form.name}
            onChange={e => setForm({ ...form, name: e.target.value })}
          />

          <input
            placeholder="Course"
            required
            value={form.course}
            onChange={e => setForm({ ...form, course: e.target.value })}
          />

          <input
            type="number"
            placeholder="Score (0-100)"
            min="0"
            max="100"
            required
            value={form.score}
            onChange={e => setForm({ ...form, score: e.target.value })}
          />

          <button className="primary-btn" type="submit">
            Save Grade
          </button>
        </form>
      )}

      <div className="panel">
        <div className="panel-heading">
          <div>
            <h3>Student Examination Results</h3>
            <p>Academic performance records</p>
          </div>
        </div>

        <DataTable columns={columns} data={grades} />
      </div>
    </>
  );
}