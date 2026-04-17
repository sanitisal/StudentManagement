import { useState, useEffect } from "react";

export default function StudentForm({ onSave, initialData, onCancel }: any) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    age: "",
    course: "",
  });
  const [error, setError] = useState("");

  useEffect(() => {
    if (initialData) {
      setForm(initialData);
    }
  }, [initialData]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (form.name.trim().length < 2) {
      setError("Name must be at least 2 characters long.");
      return;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      setError("Please enter a valid email address.");
      return;
    }

    const ageNum = Number(form.age);
    if (isNaN(ageNum) || ageNum < 5 || ageNum > 100) {
      setError("Age must be a valid number between 5 and 100.");
      return;
    }

    if (form.course.trim().length < 2) {
      setError("Course name must be at least 2 characters long.");
      return;
    }

    onSave({ ...form, age: ageNum });
  };

  return (
    <div className="modal-overlay">
      <div className="glass-panel modal-content">
        <h2>{initialData ? "Edit Student" : "Add Student"}</h2>
        {error && <p style={{ color: "var(--error-color)", marginBottom: "1rem", textAlign: "center" }}>{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Name</label>
            <input
              className="input-field"
              placeholder="Full Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
            />
          </div>

          <div className="input-group">
            <label>Email</label>
            <input
              className="input-field"
              type="email"
              placeholder="Email Address"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
            />
          </div>

          <div className="input-group">
            <label>Age</label>
            <input
              className="input-field"
              type="number"
              placeholder="Age"
              value={form.age}
              onChange={(e) => setForm({ ...form, age: e.target.value })}
              required
              min="1"
            />
          </div>

          <div className="input-group">
            <label>Course</label>
            <input
              className="input-field"
              placeholder="Course Enrolled"
              value={form.course}
              onChange={(e) => setForm({ ...form, course: e.target.value })}
              required
            />
          </div>

          <div className="action-buttons" style={{ marginTop: "1.5rem", justifyContent: "flex-end" }}>
            <button type="button" className="btn btn-secondary" onClick={onCancel}>
              Cancel
            </button>
            <button type="submit" className="btn btn-primary">
              {initialData ? "Update Student" : "Add Student"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}