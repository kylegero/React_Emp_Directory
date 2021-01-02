import React, { useEffect, useState } from "react";

const Sorting = ({ emps, updateEmps }) => {
  const [inputValue, updateInput] = useState("")
  useEffect(() => {
    const filteredEmps =
      inputValue === ""
        ? emps
        : emps.filter(
            ({ name: { first } }) =>
              first.toLowerCase().indexOf(inputValue.toLowerCase()) >= 0
          );
    updateEmps(filteredEmps);
  }, [inputValue, emps]);

  return (
    <input value={inputValue} onChange={e => updateInput(e.target.value)} />
  );
};

export default Sorting;
