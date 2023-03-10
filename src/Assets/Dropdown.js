import React, { useState, useRef, useEffect } from "react";
import {
  readItems,
  updateItem,
  deleteItem,
  addItem,
  generateId,
} from "../Utilities";

const Dropdown = () => {
  const [readItem, setreadItem] = useState(readItems());
  //const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    setreadItem(readItems());
  }, [editIndex]);

  const inputRef = useRef({
    id: "",
    laptop: "",
    currentUser: "",
    previousUsers: "",
    handle: "",
  });

  const handleAddData = () => {
    const newData = {
      ...inputRef.current,
      id: generateId(inputRef.current.laptop, readItem.length),
    };
    const updatedData = [...readItem, newData];
    if (editIndex === null) {
      setreadItem(updatedData);
      addItem(newData);
    } else {
      const editedItem = { ...readItem[editIndex], ...inputRef.current };
      updatedData[editIndex] = editedItem;
      setEditIndex(null);
      updateItem(editIndex, inputRef.current);
    }
    // inputRef.current = {
    //   id: "",
    //   laptop: "",
    //   currentUser: "",
    //   previousUsers: "",
    //   handle: "",
    // };
    console.log(inputRef.current);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    inputRef.current[name] = value;
  };

  const handleEditItem = (index) => {
    const selectedRow = readItem[index];
    inputRef.current = { ...selectedRow };
    //setIsEditing(true);
    setEditIndex(index);
  };

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
                <td></td>
                <td>
                  <input
                    type="text"
                    name="laptop"
                    onChange={handleInputChange}
                    defaultValue={""}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="currentUser"
                    onChange={handleInputChange}
                    defaultValue={inputRef.current.currentUser}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="previousUsers"
                    onChange={handleInputChange}
                    defaultValue={inputRef.current.previousUsers}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="handle"
                    onChange={handleInputChange}
                    defaultValue={inputRef.current.handle}
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
