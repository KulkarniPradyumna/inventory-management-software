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
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const idRef = useRef();
  const laptopRef = useRef();
  const currentUserRef = useRef();
  const previousUsersRef = useRef();
  const handleRef = useRef();

  useEffect(() => {
    setreadItem(readItems());
  }, [editIndex, isEditing]);

  // const inputRef = useRef({
  //   id: "",
  //   laptop: "",
  //   currentUser: "",
  //   previousUsers: "",
  //   handle: "",
  // });

  const handleAddData = () => {
    console.log(laptopRef.current);
    const newData = {
      laptop: laptopRef.current.value,
      currentUser: currentUserRef.current.value,
      previousUsers: previousUsersRef.current.value,
      handle: handleRef.current.value,
      id: generateId(laptopRef.current.value, readItem.length),
    };
    const updatedData = [...readItem, newData];
    if (editIndex === null) {
      setreadItem(updatedData);
      addItem(newData);
    } else {
      const editedItem = { ...readItem[editIndex], newData };
      updatedData[editIndex] = editedItem;
      setEditIndex(null);
      updateItem(editIndex, newData);
    }
    // inputRef.current = {
    //   id: "",
    //   laptop: "",
    //   currentUser: "",
    //   previousUsers: "",
    //   handle: "",
    // };
    laptopRef.current.value = "";
    currentUserRef.current.value = "";
    previousUsersRef.current.value = "";
    handleRef.current.value = "";
  };

  // const handleInputChange = (event) => {
  //   const { name, value } = event.target;
  //   inputRef.current[name] = value;
  // };

  const handleEditItem = (index) => {
    const selectedRow = readItem[index];
    const { id, laptop, currentUser, previousUsers, handle } = selectedRow;
    console.log(selectedRow, laptop);
    laptopRef.current.value = laptop;
    currentUserRef.current.value = currentUser;
    previousUsersRef.current.value = previousUsers;
    handleRef.current.value = handle;
    setIsEditing(true);
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
              {readItem.map((laptop, id) => (
                <tr key={laptop.id}>
                  <td>{laptop.id}</td>
                  <td>{laptop.laptop}</td>
                  <td>{laptop.currentUser}</td>
                  <td>{laptop.previousUsers}</td>
                  <td>{laptop.handle}</td>
                  <td>
                    <button
                      onClick={() => {
                        deleteItem(id);
                        setreadItem(readItems());
                      }}
                    >
                      Delete
                    </button>
                    <button onClick={() => handleEditItem(id)}>Edit</button>
                  </td>
                </tr>
              ))}
              <tr>
                <td></td>

                <td>
                  <input
                    type="text"
                    name="laptop"
                    ref={laptopRef}

                    // onChange={handleInputChange}
                    // value={inputRef.current.laptop}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="currentUser"
                    ref={currentUserRef}
                    //defaultValue={currentUserRef.current}
                    // onChange={handleInputChange}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="previousUsers"
                    ref={previousUsersRef}
                    // onChange={handleInputChange}
                    // defaultValue={inputRef.current.previousUsers}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="handle"
                    ref={handleRef}
                    // onChange={handleInputChange}
                    // defaultValue={inputRef.current.handle}
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
