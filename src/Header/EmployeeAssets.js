import React, { useState, useEffect } from "react";

const EmployeeAssets = () => {
  const [employees, setEmployees] = useState([]);
  const [assets, setAssets] = useState([]);
  // const [pair, setPair] = useState({ name: "", asset: "" });
  const [selectedAsset, setSelectedAsset] = useState("");
  const [selectedEmployee, setSelectedEmployee] = useState("");

  useEffect(() => {
    const employeesFromStorage = JSON.parse(
      localStorage.getItem("empkey") || "[]"
    );
    setEmployees(employeesFromStorage);

    const assetsFromStorage = JSON.parse(localStorage.getItem("dbKey") || "[]");
    setAssets(assetsFromStorage);
  }, []);

  const handleEmployeeChange = (e) => {
    setSelectedEmployee(e.target.value);
    console.log(e.target.value);
  };

  function handleAssetChange(event) {
    setSelectedAsset(event.target.value);
  }

  const handleAdd = () => {};

  return (
    <div className="container">
      <div>
        <h3>Select an Asset</h3>
        <select
          className="form-select form-select-lg mb-3"
          aria-label=".form-select-lg example"
          value={selectedAsset}
          onChange={handleAssetChange}
        >
          <option value="">-- Select an option --</option>
          {assets.map((laptop, id) => (
            <option key={laptop.id} value={laptop.laptop}>
              {laptop.laptop}
            </option>
          ))}
        </select>
      </div>
      <div>
        <h3>Select an Employee</h3>
        <select
          className="form-select form-select-lg mb-3"
          aria-label=".form-select-lg example"
          value={selectedEmployee}
          onChange={handleEmployeeChange}
        >
          <option value="">-- Select an option --</option>
          {employees.map((employee) => (
            <option key={employee.id} value={employee.name}>
              {employee.name}
            </option>
          ))}
        </select>
        <button onClick={handleAdd}>Add</button>
      </div>
      <h3>Employee-Asset Matching</h3>
      <div className="table-responsive">
        <table className="table table-dark table-hover  ">
          <thead>
            <tr>
              <th className="text-center" scope="col">
                Sr No
              </th>
              <th className="text-center" scope="col">
                Employee Name
              </th>
              <th className="text-center" scope="col">
                Asset Name
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="text-center"></td>
              <td className="text-center"></td>
              <td className="text-center"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmployeeAssets;
