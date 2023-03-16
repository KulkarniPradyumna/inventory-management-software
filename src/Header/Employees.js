import React, { useState, useRef, useEffect } from "react";
import {
  readItems,
  updateItem,
  deleteItem,
  addItem,
  generateId,
} from "../EmployeeUtils";

const Employees = () => {
  const [readItem, setreadItem] = useState(readItems());
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const nameRef = useRef();
  const emailRef = useRef();
  const ageRef = useRef();

  useEffect(() => {
    setreadItem(readItems());
  }, [editIndex, isEditing]);

  const handleAddData = () => {
    const newData = {
      id: generateId(nameRef.current.value, readItem.length),
      name: nameRef.current.value,
      email: emailRef.current.value,
      age: ageRef.current.value,
    };
    if (newData.name && newData.email && newData.age) {
      const updatedData = [...readItem, newData];
      if (editIndex === null) {
        setreadItem(updatedData);
        addItem(newData);
      } else {
        const editedData = {
          id: readItem[editIndex].id,
          name: nameRef.current.value,
          email: emailRef.current.value,
          age: ageRef.current.value,
        };
        const editedItem = { ...readItem[editIndex], editedData };
        updatedData[editIndex] = editedItem;
        setEditIndex(null);
        updateItem(editIndex, editedData);
      }
      nameRef.current.value = "";
      emailRef.current.value = "";
      ageRef.current.value = "";
    } else {
      alert("Enter the data");
    }
  };

  const handleEditItem = (index) => {
    const selectedRow = readItem[index];
    const { name, email, age } = selectedRow;
    nameRef.current.value = name;
    emailRef.current.value = email;
    ageRef.current.value = age;
    setIsEditing(true);
    setEditIndex(index);
  };

  return (
    <>
      <div className="container">
        <h1>The Employees of The JavaScript Shop</h1>
        <div className="table-responsive">
          <table className="table  table-dark table-hover  ">
            <thead>
              <tr>
                <th className="text-center" scope="col">
                  ID
                </th>
                <th className="text-center" scope="col">
                  Name{" "}
                </th>
                <th className="text-center" scope="col">
                  Email
                </th>
                <th className="text-center" scope="col">
                  Emp ID
                </th>
                <th className="text-center" scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {readItem.map((person, id) => (
                <tr key={person.id}>
                  <td className="text-center">{person.id}</td>
                  <td className="text-center">{person.name}</td>
                  <td className="text-center">{person.email}</td>
                  <td className="text-center">{person.age}</td>

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
                <td></td>

                <td className="text-center">
                  <input type="text" name="name" ref={nameRef} />
                </td>
                <td className="text-center">
                  <input type="text" name="email" ref={emailRef} />
                </td>
                <td className="text-center">
                  <input type="numbers" name="age" ref={ageRef} />
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

export default Employees;
