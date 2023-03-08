import React, { useState, useRef } from "react";
import {
  settingInitialDb,
  readItems,
  updateItem,
  deleteItem,
  addItem,
} from "../Utilities";

const Dropdown = () => {
  const [readItem, setreadItem] = useState(readItems());

  const inputRef = useRef({
    id: "",
    laptop: "",
    currentUser: "",
    previousUsers: "",
    handle: "",
  });

  const handleRef = () => {};

  const handleAddData = () => {
    const newData = { ...inputRef.current };
    const updatedData = [...readItem, newData];
    setreadItem(updatedData);
    addItem(newData);
    inputRef.current = {
      id: "",
      laptop: "",
      currentUser: "",
      previousUsers: "",
      handle: "",
    };
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    inputRef.current[name] = value;
  };

  const handleEditItem = (index) => {
    const updatedData = [...readItem];
    updatedData[index] = { ...inputRef.current };
    setreadItem(updatedData);
    //  localStorage.setItem("data", JSON.stringify(updatedData));
  };

  //   const handleEditItem = (index) => {
  //     const item = readItem[index];
  //     if (editingIndex !== null) {
  //       const updatedItem = {
  //         id: id,
  //         laptop: laptop,
  //         currentUser: currentUser,
  //         previousUsers: previousUsers,
  //         handle: handle,
  //       };
  //       updateItem(editingIndex, updatedItem);
  //     }
  //     console.log(editingIndex);
  //     setEditingIndex(index);
  //     setId(item.id);
  //     setLaptop(item.laptop);
  //     setCurrentUser(item.currentUser);
  //     setpreviousUsers(item.previousUsers);
  //     sethandle(item.handle);
  //   };
  return (
    <>
      <div className="container">
        <h1>The Assets of The JavaScript Shop</h1>
        <div className="table-responsive">
          <table id="myTable" className="table table-dark table-hover  ">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Laptop </th>
                <th scope="col">Current User</th>
                <th scope="col">Previous Users</th>
                <th scope="col">Handle</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {readItem.map((laptop, index) => (
                <tr key={laptop.id}>
                  <td>{laptop.id}</td>
                  <td>{laptop.laptop}</td>
                  <td>{laptop.currentUser}</td>
                  <td>{laptop.previousUsers}</td>
                  <td>{laptop.handle}</td>
                  <td>
                    <button
                      onClick={() => {
                        deleteItem(index);
                        setreadItem(readItems());
                      }}
                    >
                      Delete
                    </button>
                    <button onClick={() => handleEditItem(index)}>Edit</button>
                  </td>
                </tr>
              ))}
              <tr>
                <td>
                  <input
                    type="number"
                    name="id"
                    onChange={handleInputChange}
                    // ref={(el) => (inputRef.current.id = el.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="laptop"
                    onChange={handleInputChange}
                    // ref={(el) => (inputRef.current.laptop = el)}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="currentUser"
                    onChange={handleInputChange}
                    // ref={(el) => (inputRef.current.currentUser = el)}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="previousUsers"
                    onChange={handleInputChange}
                    // ref={(el) => (inputRef.current.previousUsers = el)}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="handle"
                    onChange={handleInputChange}
                    // ref={(el) => (inputRef.current.handle = el)}
                  />
                </td>
                <td>
                  <button onClick={handleAddData}>Add</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Dropdown;
