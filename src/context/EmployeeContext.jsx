import { createContext, useContext, useEffect, useState } from 'react';
import { getEmployees, saveEmployees } from '../utils/storage';

const EmployeeContext = createContext();

export const EmployeeProvider = ({ children }) => {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        setEmployees(getEmployees());
    }, []);

    const addEmployee = (emp) => {
        const updated = [...employees, emp];
        setEmployees(updated);
        saveEmployees(updated);
    };

    const updateEmployee = (emp) => {
        const updated = employees.map(e => e.id === emp.id ? emp : e);
        setEmployees(updated);
        saveEmployees(updated);
    };

    const deleteEmployee = (id) => {
        const updated = employees.filter(e => e.id !== id);
        setEmployees(updated);
        saveEmployees(updated);
    };

    return (
        <EmployeeContext.Provider value={{ employees, addEmployee, updateEmployee, deleteEmployee }}>
            {children}
        </EmployeeContext.Provider>
    );
};

export const useEmployees = () => useContext(EmployeeContext);