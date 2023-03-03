const initialDb = [
  {
    value: "Apple",
    id: "1",
    currentUser: "Pradyumna ",
    previousUsers: "abc",
  },
  {
    value: "Lenovo",
    id: "2",
    currentUser: "Pradyumna ",
    previousUsers: "abc, xyz",
  },
  {
    value: "Dell",
    id: "3",
    currentUser: "Pradyumna ",
    previousUsers: "abc, xyz",
  },
  {
    value: "HP",
    id: "4",
    currentUser: "Pradyumna",
    previousUsers: "abc, xyz",
  },
];

const settingInitialDb = () => {
  let initalDbString = JSON.stringify(initialDb);
  localStorage.setItem("dbKey", initalDbString);
};

const addItem = (item) => {
  const items = JSON.parse(localStorage.getItem("initalDbString")) || [];
  items.push(item);
  localStorage.setItem("initalDbString", JSON.stringify(items));
};

const readItems = () => {
  const items = JSON.parse(localStorage.getItem("dbKey"));
  return items;
};

const updateItem = (index, item) => {
  const items = JSON.parse(localStorage.getItem("initalDbString")) || [];
  items[index] = item;
  localStorage.setItem("initalDbString", JSON.stringify(items));
};

const deleteItem = (index) => {
  const items = JSON.parse(localStorage.getItem("initalDbString")) || [];
  items.splice(index, 1);
  localStorage.setItem("initalDbString", JSON.stringify(items));
};

export { addItem, readItems, updateItem, deleteItem, settingInitialDb };
