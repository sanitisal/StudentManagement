export default function StudentTable({ students, onEdit, onDelete }: any) {
  if (!students || students.length === 0) {
    return (
      <div className="glass-panel" style={{ textAlign: "center", padding: "3rem", marginTop: "2rem" }}>
        <h3 style={{ color: "var(--text-secondary)" }}>No students found. Add one to get started!</h3>
      </div>
    );
  }

  return (
    <div className="table-container glass-panel" style={{ padding: "1rem" }}>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
            <th>Course</th>
            <th style={{ textAlign: "right" }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((s: any) => (
            <tr key={s.id}>
              <td style={{ fontWeight: 500 }}>{s.name}</td>
              <td style={{ color: "var(--text-secondary)" }}>{s.email}</td>
              <td>{s.age}</td>
              <td>
                <span style={{ 
                  background: "var(--bg-tertiary)", 
                  padding: "0.25rem 0.75rem", 
                  borderRadius: "9999px",
                  fontSize: "0.875rem",
                  color: "var(--accent-secondary)"
                }}>
                  {s.course}
                </span>
              </td>
              <td>
                <div className="action-buttons" style={{ justifyContent: "flex-end" }}>
                  <button className="btn btn-secondary" style={{ padding: "0.5rem 1rem" }} onClick={() => onEdit(s)}>
                    Edit
                  </button>
                  <button className="btn btn-danger" style={{ padding: "0.5rem 1rem" }} onClick={() => onDelete(s.id)}>
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}