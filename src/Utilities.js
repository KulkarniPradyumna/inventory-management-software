const initialDb = [
  {
    id: "1",
    laptop: "Apple",
    currentUser: "Pradyumna ",
    previousUsers: "abc",
    handle: "xyz@gmail.com",
  },
  {
    id: "2",
    laptop: "Lenovo",
    currentUser: "Pradyumna ",
    previousUsers: "abc, xyz",
    handle: "xyz@gmail.com",
  },
  {
    id: "3",
    laptop: "Dell",
    currentUser: "Pradyumna ",
    previousUsers: "abc, xyz",
    handle: "xyz@gmail.com",
  },
  {
    id: "4",
    laptop: "HP",
    currentUser: "Pradyumna",
    previousUsers: "abc, xyz",
    handle: "xyz@gmail.com",
  },
  {
    id: "5",
    laptop: "HP",
    currentUser: "Pradyumna",
    previousUsers: "abc, xyz",
    handle: "xyz@gmail.com",
  },
];

const settingInitialDb = () => {
  let initalDbString = JSON.stringify(initialDb);
  localStorage.setItem("dbKey", initalDbString);
};

const addItem = (item) => {
  let items = JSON.parse(localStorage.getItem("dbKey"));
  items.push(item);
  console.log(items);
  localStorage.setItem("dbKey", JSON.stringify(items));
};

const readItems = () => {
  const items = JSON.parse(localStorage.getItem("dbKey"));
  return items;
};

const updateItem = (index, item) => {
  let items = JSON.parse(localStorage.getItem("dbKey")) || [];
  items[index] = item;
  localStorage.setItem("initalDbString", JSON.stringify(items));
};

const deleteItem = (index) => {
  let items = JSON.parse(localStorage.getItem("dbKey"));
  items.splice(index, 1);
  localStorage.setItem("dbKey", JSON.stringify(items));
};

export { addItem, readItems, updateItem, deleteItem, settingInitialDb };
