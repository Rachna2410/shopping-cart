// import React, { useState } from "react";
// import jwt from "jsonwebtoken";

// const LoginForm = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   const handleUsernameChange = (e) => {
//     setUsername(e.target.value);
//   };

//   const handlePasswordChange = (e) => {
//     setPassword(e.target.value);
//   };

//   const handleFormSubmit = (e) => {
//     e.preventDefault();

//     // Validate form inputs
//     if (!username || !password) {
//       alert("Please enter username and password");
//       return;
//     }

//     // Generate JWT token
//     const token = jwt.sign({ username }, "secret_key");

//     // Store token in local storage
//     localStorage.setItem("token", token);

//     // Update logged in state
//     setIsLoggedIn(true);
//   };

//   //   const handleLogout = () => {
//   //     // Remove token from local storage
//   //     localStorage.removeItem("token");

//   //     // Update logged in state
//   //     setIsLoggedIn(false);
//   //   };

//   //   if (isLoggedIn) {
//   //     return (
//   //       <div>
//   //         <h2>Welcome, {username}!</h2>
//   //         <button onClick={handleLogout}>Logout</button>
//   //       </div>
//   //     );
//   //   }

//   return (
//     <form onSubmit={handleFormSubmit}>
//       <input
//         type="text"
//         placeholder="Username"
//         value={username}
//         onChange={handleUsernameChange}
//       />
//       <input
//         type="password"
//         placeholder="Password"
//         value={password}
//         onChange={handlePasswordChange}
//       />
//       <button type="submit">Login</button>
//     </form>
//   );
// };

// export default LoginForm;
