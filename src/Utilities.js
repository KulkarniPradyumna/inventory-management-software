const initialDb = [];

const settingInitialDb = () => {
  // let initalDbString = JSON.stringify(initialDb);
  // localStorage.setItem("dbKey", initalDbString);
};

const addItem = (item) => {
  let items = JSON.parse(localStorage.getItem("dbKey"));
  items.push(item);
  localStorage.setItem("dbKey", JSON.stringify(items));
};

const readItems = () => {
  const items = JSON.parse(localStorage.getItem("dbKey"));
  return items;
};

const updateItem = (index, item) => {
  let items = JSON.parse(localStorage.getItem("dbKey"));
  items[index] = item;
  localStorage.setItem("dbKey", JSON.stringify(items));
};

const deleteItem = (index) => {
  let items = JSON.parse(localStorage.getItem("dbKey"));
  items.splice(index, 1);
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
