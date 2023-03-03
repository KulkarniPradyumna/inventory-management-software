import React, { useEffect, useState } from "react";
import { settingInitialDb, readItems } from "../Utilities";
import { initialDb } from "../Utilities";

const Dropdown = () => {
  const [readItem, setreadItem] = useState(readItems());
  console.log(readItem);

  return (
    <>
      <div className="container">
        <h1>The Assets of The JavaScript Shop</h1>
        <div className="table">
          <table className="table table-dark table-hover">
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
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>@mdo</td>
                <td>
                  <button className="btn btn-primary">Add Comment</button>
                </td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
                <td>@mdo</td>
                <td>
                  <button className="btn btn-primary">Add Comment</button>
                </td>
              </tr>

              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
                <td>@mdo</td>
                <td>
                  <button className="btn btn-primary">Add Comment</button>
                </td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>
                  <form>
                    <input type="text" placeholder="Enter a comment" />
                  </form>
                </td>
                <td>
                  <form>
                    <input type="text" placeholder="Enter a comment" />
                  </form>
                </td>
                <td>
                  <form>
                    <input type="text" placeholder="Enter a comment" />
                  </form>
                </td>
                <td>
                  <form>
                    <input type="text" placeholder="Enter a comment" />
                  </form>
                </td>
                <td>
                  <button className="btn btn-primary">Add Comment</button>
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
