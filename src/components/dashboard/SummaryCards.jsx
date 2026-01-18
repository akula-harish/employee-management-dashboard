import { useEmployees } from "../../context/EmployeeContext";

export default function SummaryCards() {
  const { employees } = useEmployees();

  const total = employees.length;
  const active = employees.filter(e => e.active).length;
  const inactive = total - active;

  return (
    <div style={{ display: "flex", gap: "20px", marginBottom: "20px" }}>
      <Card title="Total Employees" value={total} />
      <Card title="Active" value={active} />
      <Card title="Inactive" value={inactive} />
    </div>
  );
}

function Card({ title, value }) {
  return (
    <div style={{
      padding: "20px",
      background: "#fff",
      borderRadius: "8px",
      width: "200px",
      boxShadow: "0 2px 6px rgba(0,0,0,0.1)"
    }}>
      <h4>{title}</h4>
      <h2>{value}</h2>
    </div>
  );
}
