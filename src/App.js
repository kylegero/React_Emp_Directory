import React, { useEffect, useState} from "react";
import Filterer from "./Filterer";
import table from "./table"
import { getUsers } from "./API";
import './App.css';
import logo from './logo.svg';

function App() {
  const  [initialUsers, updateAvailableUsers] = useState([]);
  const  [usersToRender, updateUsersToRender] = useState([]);
  useEffect(() => {
    getUsers().then(({ data: { results } }) => updateAvailableUsers(results));
  }, []);
  return (
    <div classname="App">
      <h1>Employee Directory</h1>
      <p>PLACEHOLDER TEXT ABOUT FILTERING</p>
      <filter users={initialUsers} updateUsers={updateUsersToRender} />
      <table users={usersToRender} />
    </div>
  );

}
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
