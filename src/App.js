import React, { useEffect, useState } from "react";
import Sorting from "./Sorting";
import Table from "./Table";
import { getEmps } from "./API";
import "./App.css";

function App() {
  const [initialEmps, updateAvailableEmps] = useState([]);
  const [empsToRender, updateEmpsToRender] = useState([]);

  useEffect(() => {
    getEmps().then(({ data: { results } }) => updateAvailableEmps(results));
  }, []);

  return (
    <div className="App">
      <h1>Employee Directory</h1>
      <p>
        To sort employees by first name, begin entering a first name below
        <br></br>
        If you'd like to sort employees alphabetically by first name, give the "First" a click
      </p>
      <Sorting emps={initialEmps} updateEmps={updateEmpsToRender} />
      <Table emps={empsToRender} />
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
