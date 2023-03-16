import React, { useState, useEffect } from "react";

const EmployeeAssets = () => {
  const [employees, setEmployees] = useState([]);
  const [assets, setAssets] = useState([]);
  const [matchedData, setMatchedData] = useState([]);

  useEffect(() => {
    const employeesFromStorage = JSON.parse(
      localStorage.getItem("empkey") || "[]"
    );
    setEmployees(employeesFromStorage);

    const assetsFromStorage = JSON.parse(localStorage.getItem("dbKey") || "[]");
    setAssets(assetsFromStorage);
  }, []);

  useEffect(() => {
    const matched = employees
      .map((emp) => {
        const asset = assets.find((a) => a.currentUser === emp.name);
        if (asset) {
          return {
            employee_name: emp.name,
            asset_name: asset.laptop,
          };
        } else {
          return null;
        }
      })
      .filter((x) => x !== null);

    setMatchedData(matched);
  }, [employees, assets]);

  return (
    <div className="container">
      <h1>Employee-Asset Matching</h1>
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
            {matchedData.map((data, index) => (
              <tr key={index}>
                <td className="text-center">{index + 1}</td>
                <td className="text-center">{data.employee_name}</td>
                <td className="text-center"> {data.asset_name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div>
        <h3>Add a Row</h3>
        <div class="dropdown">
          <button
            class="btn btn-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Dropdown button
          </button>
          <ul class="dropdown-menu">
            <li>
              <a class="dropdown-item" href="#">
                Action
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Another action
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Something else here
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EmployeeAssets;
