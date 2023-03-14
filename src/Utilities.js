const initialDb = [];

const settingInitialDb = () => {
  // let initalDbString = JSON.stringify(initialDb);
  // localStorage.setItem("dbKey", initalDbString);
};

const addItem = (item) => {
  let items = JSON.parse(localStorage.getItem("dbKey")) || [];
  items.push(item);
  localStorage.setItem("dbKey", JSON.stringify(items));
};

const readItems = () => {
  const items = JSON.parse(localStorage.getItem("dbKey"));
  return items || [];
};

const updateItem = (id, item) => {
  let items = JSON.parse(localStorage.getItem("dbKey"));
  items[id] = item;
  localStorage.setItem("dbKey", JSON.stringify(items));
};

const deleteItem = (id) => {
  let items = JSON.parse(localStorage.getItem("dbKey"));
  items.splice(id, 1);
  localStorage.setItem("dbKey", JSON.stringify(items));
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
  settingInitialDb,
  generateId,
};
