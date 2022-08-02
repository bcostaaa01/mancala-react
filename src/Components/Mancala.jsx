import React, { useState } from "react";
import Draggable from "react-draggable";

const Mancala = () => {
  const [inputStonesToAdd, setStonesToAdd] = useState(1);
  const [commitedStonesToAdd, setCommitedStonesToAdd] = useState(0);

  const [inputPitsToAdd, setPitsToAdd] = useState(1);
  const [commitedPitsToAdd, setCommitedPitsToAdd] = useState(0);

  const Stones = () => (
    <>
      <Draggable>
        <img
          src={"https://miro.medium.com/max/220/1*C351fbWRMQTvLkCbZtuEHw.png"}
          alt="stone-component"
          height="35px"
        />
      </Draggable>
    </>
  );

  /* const Pits = () => (
    <>
      <svg width="400" height="180">
        <rect x="50" y="20" rx="20" ry="20" width="150" height="150" />
      </svg>
    </>
  ); */
  
  const Pit = () => (
    <>
    <svg width="400" height="180">
        <rect x="50" y="20" rx="20" ry="20" width="150" height="150" />
      </svg>
    </>
  )
  
  /*const ListComp = ({ id }) => (
    <>
      <ul>
        <li index>Hello n {id}</li>
      </ul>
    </>
  );*/

  return (
    <div>
      <label htmlFor="">Number of Stones to add</label>
      <input
        type="number"
        name=""
        id=""
        value={inputStonesToAdd}
        onChange={(e) => {
          setStonesToAdd(parseInt(e.currentTarget.value, 10));
        }}
      />
      <button
        onClick={() => {
          setCommitedStonesToAdd(inputStonesToAdd);
        }}
      >
        Add Stones
      </button>
      <label htmlFor="">Number of Pits to add</label>
      <input
        type="number"
        value={inputPitsToAdd}
        onChange={(e) => {
          setPitsToAdd(parseInt(e.currentTarget.value, 10));
        }}
      />

      <button
        onClick={() => {
          setCommitedPitsToAdd(inputPitsToAdd);
        }}
      >
        Add Pits
      </button>
      <Pit style={align="left"}/>
      <Pit style={align="right"}/>
      {[...Array(commitedStonesToAdd)].map(() => (
        <Stones />
      ))}
      {[...Array(commitedPitsToAdd)].map(() => (
        <Pit />
      ))}
    </div>
  );
};

export default Mancala;
