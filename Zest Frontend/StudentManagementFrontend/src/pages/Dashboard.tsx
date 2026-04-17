import { useEffect, useState } from "react";
import { getStudents, addStudent, updateStudent, deleteStudent } from "../api/studentApi";
import StudentForm from "../components/StudentForm";
import StudentTable from "../components/StudentTable";
import { logout } from "../utils/auth";

export default function Dashboard() {
  const [students, setStudents] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingStudent, setEditingStudent] = useState<any>(null);

  const fetchStudents = async () => {
    try {
      const res = await getStudents();
      setStudents(res.data);
    } catch (err) {
      console.error("Failed to fetch students", err);
    }
  };

  const handleSave = async (data: any) => {
    try {
      if (editingStudent) {
        await updateStudent(editingStudent.id, data);
      } else {
        await addStudent(data);
      }
      setIsModalOpen(false);
      setEditingStudent(null);
      fetchStudents();
    } catch (err) {
      alert("Error saving student");
    }
  };

  const handleEdit = (student: any) => {
    setEditingStudent(student);
    setIsModalOpen(true);
  };

  const handleDelete = async (id: number) => {
    if (window.confirm("Are you sure you want to delete this student?")) {
      try {
        await deleteStudent(id);
        fetchStudents();
      } catch (err) {
        alert("Error deleting student");
      }
    }
  };

  const handleAddNew = () => {
    setEditingStudent(null);
    setIsModalOpen(true);
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <div className="container">
      <div className="dashboard-header">
        <div>
          <h1 style={{ marginBottom: "0.25rem" }}>Student Dashboard</h1>
          <p style={{ color: "var(--text-secondary)" }}>Manage your student records efficiently.</p>
        </div>
        <div className="action-buttons">
          <button className="btn btn-primary" onClick={handleAddNew}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
            Add Student
          </button>
          <button className="btn btn-secondary" onClick={logout}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>
            Logout
          </button>
        </div>
      </div>

      <StudentTable students={students} onEdit={handleEdit} onDelete={handleDelete} />

      {isModalOpen && (
        <StudentForm 
          initialData={editingStudent} 
          onSave={handleSave} 
          onCancel={() => {
            setIsModalOpen(false);
            setEditingStudent(null);
          }} 
        />
      )}
    </div>
  );
}