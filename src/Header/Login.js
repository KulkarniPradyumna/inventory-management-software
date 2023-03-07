// import React, { useState } from "react";
// import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
// import Home from "./Home";

// const Login = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [loggedIn, setLoggedIn] = useState(false);
//   const handleLogin = (e) => {
//     // handle login logic here
//     e.preventDefault(); // Prevent form submission
//     // Authenticate user
//     if (username === "myusername" && password === "mypassword") {
//       setLoggedIn(true);
//     }
//   };

//   if (loggedIn) {
//     return (
//       <Routes>
//         <Route render={() => <Navigate to="/home" />} />
//       </Routes>
//     );
//   }
//   return (
//     <>
//       <div>
//         <h2>Login</h2>
//         <form onSubmit={handleLogin}>
//           <label>
//             Username:
//             <input
//               type="text"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//             />
//           </label>
//           <br />
//           <label>
//             Password:
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//           </label>
//           <br />
//           <button type="submit">Login</button>
//         </form>
//       </div>
//     </>
//   );
// };

// export default Login;
