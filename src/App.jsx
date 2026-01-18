import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes";
import { AuthProvider } from "./context/AuthContext";
import { EmployeeProvider } from "./context/EmployeeContext";

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <EmployeeProvider>
          <AppRoutes />
        </EmployeeProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}
