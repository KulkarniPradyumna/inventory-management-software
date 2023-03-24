import React, { useState, useRef, useEffect } from "react";
import {
  readItems,
  updateItem,
  deleteItem,
  addItem,
  generateId,
} from "../Utilities";

const Assets = () => {
  const [readItem, setreadItem] = useState(readItems());
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const laptopRef = useRef();

  useEffect(() => {
    setreadItem(readItems());
  }, [editIndex, isEditing]);

  const handleAddData = () => {
    const newData = {
      id: generateId(laptopRef.current.value, readItem.length),
      laptop: laptopRef.current.value,
    };
    if (newData.laptop) {
      const updatedData = [...readItem, newData];
      if (editIndex === null) {
        setreadItem(updatedData);
        addItem(newData);
      } else {
        const editedData = {
          id: readItem[editIndex].id,
          laptop: laptopRef.current.value,
        };
        const editedItem = { ...readItem[editIndex], editedData };
        updatedData[editIndex] = editedItem;
        setEditIndex(null);
        updateItem(editIndex, editedData);
      }
      laptopRef.current.value = "";
    } else {
      alert("Enter the data");
    }
  };

  const handleEditItem = (id) => {
    const selectedRow = readItem[id];
    const { laptop, currentUser, previousUsers, handle } = selectedRow;
    laptopRef.current.value = laptop;
    setIsEditing(true);
    setEditIndex(id);
  };

  return (
    <>
      <div className="container">
        <h1>The Assets of The JavaScript Shop</h1>
        <div className="table-responsive">
          <table className="table table-dark table-hover  ">
            <thead>
              <tr>
                <th className="text-center" scope="col">
                  ID
                </th>
                <th className="text-center" scope="col">
                  Assets
                </th>
                <th className="text-center" scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {readItem.map((laptop, id) => (
                <tr key={laptop.id}>
                  <td className="text-center">{laptop.id}</td>
                  <td className="text-center">{laptop.laptop}</td>
                  <td className="text-center">
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
                <td className="text-center"></td>

                <td className="text-center">
                  <input type="text" name="laptop" ref={laptopRef} />
                </td>
                <td className="text-center">
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
export default Assets;
