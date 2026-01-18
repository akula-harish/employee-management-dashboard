export default function Filters({ onChange }) {
  return (
    <div style={{ margin: "15px 0" }}>
      <input
        placeholder="Search by name"
        onChange={(e) => onChange(prev => ({ ...prev, search: e.target.value }))}
      />

      <select onChange={(e) => onChange(prev => ({ ...prev, gender: e.target.value }))}>
        <option value="">All Genders</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>

      <select onChange={(e) => onChange(prev => ({ ...prev, status: e.target.value }))}>
        <option value="">All Status</option>
        <option value="true">Active</option>
        <option value="false">Inactive</option>
      </select>
    </div>
  );
}
