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
  // console.log(readItem);

  const [editingIndex, setEditingIndex] = useState(null);

  let inputRef = useRef(null);

  const handleRef = () => {
    inputRef.current.value = readItem(id);
  };

  //   const handleSave = (e) => {
  //     e.preventDefault();
  //     if (editingIndex !== null) {
  //       const updatedItem = {
  //         id: id,
  //         laptop: laptop,
  //         currentUser: currentUser,
  //         previousUsers: previousUsers,
  //         handle: handle,
  //       };
  //       updateItem(editingIndex, updatedItem);
  //       setEditingIndex(null);
  //     } else {
  //       addItem({ id, laptop, currentUser, previousUsers, handle });
  //       setreadItem(readItems());
  //     }
  //   };

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
          <table className="table table-dark table-hover  ">
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
                    <button onClick={handleRef}>Edit</button>
                  </td>
                </tr>
              ))}
              <tr>
                <td>
                  <form>
                    <input
                      type="number"
                      value={id}
                      onChange={(e) => handleRef(e.target.value)}
                    />
                  </form>
                </td>
                <td>
                  <form>
                    <input
                      type="text"
                      value={laptop}
                      onChange={(e) => handleRef(e.target.value)}
                    />
                  </form>
                </td>
                <td>
                  <form>
                    <input
                      type="text"
                      value={currentUser}
                      onChange={(e) => handleRef(e.target.value)}
                    />
                  </form>
                </td>
                <td>
                  <form>
                    <input
                      type="text"
                      value={previousUsers}
                      onChange={(e) => handleRef(e.target.value)}
                    />
                  </form>
                </td>
                <td>
                  <form>
                    <input
                      type="text"
                      value={handle}
                      onChange={(e) => handleRef(e.target.value)}
                    />
                  </form>
                </td>
                <td>
                  <button type="submit">
                    {editingIndex !== null ? "Save" : "Add"}
                  </button>
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
