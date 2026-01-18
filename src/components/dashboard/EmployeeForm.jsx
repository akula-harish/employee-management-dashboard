import { useState } from "react";
import { useEmployees } from "../../context/EmployeeContext";

const STATES = ["Tamil Nadu", "Karnataka", "Kerala", "Telangana"];

export default function EmployeeForm({ initialData, onClose }) {
  const { addEmployee, updateEmployee } = useEmployees();

  const [form, setForm] = useState({
    id: initialData.id,
    name: initialData.name || "",
    gender: initialData.gender || "",
    dob: initialData.dob || "",
    state: initialData.state || "",
    active: initialData.active ?? true,
    image: initialData.image || ""
  });

  const handleImage = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setForm({ ...form, image: reader.result });
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.gender || !form.dob || !form.state) {
      alert("All fields are required");
      return;
    }

    if (form.id) {
      updateEmployee(form);
    } else {
      addEmployee({ ...form, id: Date.now() });
    }

    onClose();
  };

  return (
    <form onSubmit={handleSubmit} style={{ background: "#eee", padding: "20px" }}>
      <h3>{form.id ? "Edit" : "Add"} Employee</h3>

      <input placeholder="Full Name" value={form.name}
        onChange={e => setForm({ ...form, name: e.target.value })} />

      <select value={form.gender}
        onChange={e => setForm({ ...form, gender: e.target.value })}>
        <option value="">Select Gender</option>
        <option>Male</option>
        <option>Female</option>
      </select>

      <input type="date" value={form.dob}
        onChange={e => setForm({ ...form, dob: e.target.value })} />

      <select value={form.state}
        onChange={e => setForm({ ...form, state: e.target.value })}>
        <option value="">Select State</option>
        {STATES.map(s => <option key={s}>{s}</option>)}
      </select>

      <input type="file" accept="image/*" onChange={handleImage} />

      {form.image && <img src={form.image} alt="" width="80" />}

      <label>
        Active
        <input type="checkbox"
          checked={form.active}
          onChange={() => setForm({ ...form, active: !form.active })} />
      </label>

      <br /><br />
      <button type="submit">Save</button>
      <button type="button" onClick={onClose}>Cancel</button>
    </form>
  );
}
