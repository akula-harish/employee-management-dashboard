import SummaryCards from "../components/dashboard/SummaryCards";
import EmployeeTable from "../components/dashboard/EmployeeTable";

export default function Dashboard() {
  return (
    <div style={{ padding: "20px" }}>
      <SummaryCards />
      <EmployeeTable />
    </div>
  );
}
