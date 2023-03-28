const deleteItem = (empId, assetId) => {
  let items = JSON.parse(localStorage.getItem("assetLinks"));
  items[empId] = items[empId].filter((item) => item !== assetId);
  localStorage.setItem("assetLinks", JSON.stringify(items));
};

const readItems = () => {
  const items = JSON.parse(localStorage.getItem("assetLinks"));
  return items || [];
};

const setItems = (items) => {
  localStorage.setItem("assetLinks", JSON.stringify(items));
};

const employeesFromStorage = () =>
  JSON.parse(localStorage.getItem("empkey") || "[]");
const assetsFromStorage = () =>
  JSON.parse(localStorage.getItem("dbKey") || "[]");

export {
  deleteItem,
  readItems,
  setItems,
  employeesFromStorage,
  assetsFromStorage,
};
