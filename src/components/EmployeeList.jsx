import { useEffect, useState } from "react";
import { getEmployees, deleteEmployee } from "../services/api";
import "../styles/table.css";

function EmployeeList() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    loadEmployees();
  }, []);

  const loadEmployees = async () => {
    const data = await getEmployees();
    setEmployees(data);
  };

  const handleDelete = async (id) => {
    await deleteEmployee(id);
    loadEmployees();
  };
  // This is also valid outside the return statement's JSX
  return (
    <table>
  <thead>
    <tr>
      <th>ID</th>
      <th>Name</th>
      <th>Email</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
    {employees.map(emp => (
      <tr key={emp.id}>
        <td>{emp.id}</td>
        <td>{emp.name}</td>
        <td>{emp.email}</td>
        <td>
          <button
            className="delete-btn"
            onClick={() => handleDelete(emp.id)}
          >
            Delete
          </button>
        </td>
      </tr>
    ))}
  </tbody>
</table>
  );
}

export default EmployeeList;