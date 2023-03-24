import React, { useState, useEffect } from "react";

const EmployeeAssets = () => {
  const [employees, setEmployees] = useState([]);
  const [assets, setAssets] = useState([]);
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
  };

  function handleAssetChange(event) {
    setSelectedAsset(event.target.value);
  }

  const getLinks = () => {
    const links = JSON.parse(localStorage.getItem("assetLinks"));
    const linkDetails = [];
    Object.keys(links).forEach((employeeId) => {
      const linkIds = links[employeeId];
      const employeeDetails = employees.find((x) => x.id === employeeId);

      // const assignedEmployee = Object.keys(links).find((employee) =>
      //   links[employee].includes(selectedAsset)
      // );
      // if (assignedEmployee) {
      //   alert(
      //     `Asset ${selectedAsset} is already assigned to Employee ${assignedEmployee}`
      //   );
      //   return;
      // }

      if (!employeeDetails) return;
      linkIds.forEach((linkId) => {
        const assetDetails = assets.find((y) => y.id === linkId);
        if (!assetDetails) return;
        linkDetails.push({
          employeeId: employeeDetails.id,
          employeeName: employeeDetails.name,
          asset: assetDetails.laptop,
          assetId: assetDetails.id,
        });
      });
    });
    return linkDetails;
  };

  const getLinksv2 = () => {
    const links = JSON.parse(localStorage.getItem("assetLinks"));
    const linkDetails = [];
    Object.keys(links).forEach((employeeId) => {
      const linkIds = links[employeeId];
      const employeeDetails = employees.find((x) => x.id === employeeId);

      const assignedEmployee = Object.keys(links).find((employee) =>
        links[employee].includes(selectedAsset)
      );
      if (assignedEmployee) {
        console.log("Asset already assigned to employee");
        alert(
          `Asset ${selectedAsset} is already assigned to Employee ${assignedEmployee}`
        );
        return;
      }
      if (!employeeDetails) return;
      const objToPush = {
        employeeId: employeeDetails.id,
        employeeName: employeeDetails.name,
        assets: [],
      };
      linkIds.forEach((linkId) => {
        objToPush.assets.push({
          asset: assets.find((y) => y.id === linkId)?.laptop,
          assetId: assets.find((y) => y.id === linkId)?.id,
        });
      });
      linkDetails.push(objToPush);
    });
    return linkDetails;
  };

  const [rows, setRows] = useState(getLinksv2());

  useEffect(() => {
    if (employees.length > 0 && assets.length > 0) {
      const links = getLinksv2();
      setRows(links);
    }
  }, [employees, assets]);

  const addLink = (empId, assetId) => {
    let items = JSON.parse(localStorage.getItem("assetLinks"));

    if (items.hasOwnProperty(empId)) {
      items[empId].push(assetId);
    } else {
      items[empId] = [assetId];
    }
    // const assignedEmployee = Object.keys(items).find((employee) =>
    //   items[employee].includes(selectedAsset)
    // );
    // if (assignedEmployee) {
    //   alert(
    //     `Asset ${selectedAsset} is already assigned to Employee ${assignedEmployee}`
    //   );
    //   return;
    // }
    localStorage.setItem("assetLinks", JSON.stringify(items));
    setRows(getLinks());
  };

  const handleAdd = () => {
    addLink(selectedEmployee, selectedAsset);
  };

  const handleDelete = (empId, assetId) => {
    let items = JSON.parse(localStorage.getItem("assetLinks"));
    items[empId] = items[empId].filter((item) => item !== assetId);
    localStorage.setItem("assetLinks", JSON.stringify(items));
    setRows(getLinks());
  };

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
          <option value="">-- Select an Asset --</option>
          {assets.map((laptop, id) => (
            <option key={laptop.id} value={laptop.id}>
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
          <option value="">-- Select an Employee --</option>
          {employees.map((employee) => (
            <option key={employee.id} value={employee.id}>
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
              <th className="text-center" scope="col"></th>
            </tr>
          </thead>

          <tbody>
            {rows.map((row, index) => (
              <tr key={index}>
                <td className="text-center">{index + 1}</td>
                <td className="text-center">{row.employeeName}</td>
                <td className="text-center">
                  {row.assets?.map((x) => x.asset).join(",")}
                </td>
                <td className="text-center">
                  <button
                    onClick={() => handleDelete(row.employeeId, row.assetId)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmployeeAssets;
