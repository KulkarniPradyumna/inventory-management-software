import React, { useState } from "react";

const Employees = () => {
  const [person, setPerson] = useState({ firstName: "", email: "", age: "" });
  const [people, setPeople] = useState([]);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPerson({ ...person, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (person.firstName && person.email && person.age) {
      const newPerson = { ...person, id: new Date().getTime().toString() };
      setPeople([...people, newPerson]);
      setPerson({ firstName: "", email: "", age: "" });
      console.log(newPerson);
      console.log(localStorage.getItem("person"));
      let existingValues = JSON.parse(localStorage.getItem("person")) || [];
      existingValues.push(newPerson);
      localStorage.setItem("person", JSON.stringify(existingValues));
    }
  };

  return (
    <>
      <article className="form">
        <form>
          <div className="form-control">
            <label htmlFor="firstName">Name : </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={person.firstName}
              onChange={handleChange}
            />
          </div>
          <div className="form-control">
            <label htmlFor="email">Email : </label>
            <input
              type="email"
              id="email"
              name="email"
              value={person.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-control">
            <label htmlFor="age">Age : </label>
            <input
              type="number"
              id="age"
              name="age"
              value={person.age}
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary btn-color btn-bg-color btn-sm col-xs-2 margin-top"
            onClick={handleSubmit}
          >
            add person
          </button>
        </form>
      </article>
      <article>
        {people.map((person) => {
          const { id, firstName, email, age } = person;
          return (
            <div key={id} className="item">
              <h3 className="item-name">Name : {firstName}</h3>
              <h6 className="item-email">Email : {email}</h6>
              <h6 className="item-age">Age : {age}</h6>
            </div>
          );
        })}
      </article>
    </>
  );
};

export default Employees;
