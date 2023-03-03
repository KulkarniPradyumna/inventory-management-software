const initialDb = [
  {
    value: "Apple",
    id: "1",
    data: "This is apple laptop ",
    textAreaValue: "Apple Laptop",
  },
  {
    value: "Lenovo",
    id: "2",
    data: "This is lenovo laptop ",
    textAreaValue: "Lenovo Laptop",
  },
  {
    value: "Dell",
    id: "3",
    data: "This is dell laptop ",
    textAreaValue: "Dell Laptop",
  },
  {
    value: "HP",
    id: "4",
    data: "This is HP laptop ",
    textAreaValue: "HP Laptop",
  },
  {
    value: "Toshiba",
    id: "5",
    data: "This is toshiba laptop ",
    textAreaValue: "Toshiba Laptop",
  },
  {
    value: "Compac",
    id: "6",
    data: "This is compac laptop ",
    textAreaValue: "Compac Laptop This was used by me",
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
  const items = JSON.parse(localStorage.getItem("initalDbString")) || [];
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
