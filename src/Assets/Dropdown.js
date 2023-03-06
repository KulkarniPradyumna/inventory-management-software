import React, { useEffect, useState } from "react";
import {
  settingInitialDb,
  readItems,
  updateItem,
  deleteItem,
  addItem,
} from "../Utilities";
import { initialDb } from "../Utilities";

const Dropdown = () => {
  const [readItem, setreadItem] = useState(readItems());
  // console.log(readItem);

  const [id, setId] = useState("");
  const [laptop, setLaptop] = useState("");
  const [currentUser, setCurrentUser] = useState("");
  const [previousUsers, setpreviousUsers] = useState("");
  const [handle, sethandle] = useState("");

  const handleSave = () => {
    addItem({ id, laptop, currentUser, previousUsers, handle });
    setreadItem(readItems());
  };
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
                    <button
                      onClick={() => {
                        updateItem(index);
                        setreadItem(readItems());
                      }}
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
              <tr>
                <td>
                  <input
                    type="number"
                    onChange={(e) => setId(e.target.value)}
                  />
                </td>
                <td>
                  <form action="">
                    <input
                      type="text"
                      onChange={(e) => setLaptop(e.target.value)}
                    />
                  </form>
                </td>
                <td>
                  <input
                    type="text"
                    onChange={(e) => setCurrentUser(e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    onChange={(e) => setpreviousUsers(e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    onChange={(e) => sethandle(e.target.value)}
                  />
                </td>
                <td>
                  <button onClick={handleSave}>Add</button>
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
