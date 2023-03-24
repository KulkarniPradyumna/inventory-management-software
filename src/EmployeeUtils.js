const initialDbEmp = [];

const settingInitialDbEmp = () => {
  let initalDbString = JSON.stringify(initialDbEmp);
  localStorage.setItem("empkey", initalDbString);
};

const addItem = (item) => {
  let items = JSON.parse(localStorage.getItem("empkey")) || [];
  items.push(item);
  localStorage.setItem("empkey", JSON.stringify(items));
};

const readItems = () => {
  const items = JSON.parse(localStorage.getItem("empkey"));
  return items || [];
};

const updateItem = (id, item) => {
  let items = JSON.parse(localStorage.getItem("empkey"));
  items[id] = item;
  localStorage.setItem("empkey", JSON.stringify(items));
};

const deleteItem = (id) => {
  let items = JSON.parse(localStorage.getItem("empkey"));
  items.splice(id, 1);
  localStorage.setItem("empkey", JSON.stringify(items));
};
const generateId = (productNmae, slNo) => {
  const pcode = productNmae.slice(0, 3);
  const productId = slNo + pcode + new Date().getDate();
  return productId;
};

export {
  addItem,
  readItems,
  updateItem,
  deleteItem,
  settingInitialDbEmp,
  generateId,
};
