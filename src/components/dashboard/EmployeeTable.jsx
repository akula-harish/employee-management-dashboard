import { useState } from "react";
import { useEmployees } from "../../context/EmployeeContext";
import EmployeeForm from "./EmployeeForm";
import Filters from "./Filters";

export default function EmployeeTable() {
  const { employees, deleteEmployee, updateEmployee } = useEmployees();
  const [editingEmployee, setEditingEmployee] = useState(null);
  const [filters, setFilters] = useState({ search: "", gender: "", status: "" });

  const filteredEmployees = employees.filter(emp => {
    return (
      emp.name.toLowerCase().includes(filters.search.toLowerCase()) &&
      (filters.gender ? emp.gender === filters.gender : true) &&
      (filters.status ? String(emp.active) === filters.status : true)
    );
  });

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this employee?")) {
      deleteEmployee(id);
    }
  };

  return (
    <div>
      <button onClick={() => setEditingEmployee({})}>+ Add Employee</button>

      <Filters onChange={setFilters} />

      {editingEmployee && (
        <EmployeeForm
          initialData={editingEmployee}
          onClose={() => setEditingEmployee(null)}
        />
      )}

      <table border="1" width="100%" cellPadding="8">
        <thead>
          <tr>
            <th>ID</th>
            <th>Image</th>
            <th>Name</th>
            <th>Gender</th>
            <th>DOB</th>
            <th>State</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {filteredEmployees.map(emp => (
            <tr key={emp.id}>
              <td>{emp.id}</td>
              <td>
                {emp.image && <img src={emp.image} alt="" width="40" />}
              </td>
              <td>{emp.name}</td>
              <td>{emp.gender}</td>
              <td>{emp.dob}</td>
              <td>{emp.state}</td>
              <td>
                <input
                  type="checkbox"
                  checked={emp.active}
                  onChange={() =>
                    updateEmployee({ ...emp, active: !emp.active })
                  }
                />
              </td>
              <td>
                <button onClick={() => setEditingEmployee(emp)}>Edit</button>
                <button onClick={() => handleDelete(emp.id)}>Delete</button>
                <button onClick={() => window.print()}>Print</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
