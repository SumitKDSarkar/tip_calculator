import React from "react";

const LeftBox = ({ handleTip, handleBill, bill, people, handlePeople }) => {
  return (
    <div className="left-box">
      <div className="input-group">
        <label htmlFor="billInput">Total Bill:</label>
        <input
          type="number"
          id="billInput"
          value={bill}
          onChange={(e) => handleBill(parseFloat(e.target.value))}
        />
      </div>
      <div className="tip-buttons">
        <button onClick={() => handleTip(5)}>5%</button>
        <button onClick={() => handleTip(10)}>10%</button>
        <button onClick={() => handleTip(15)}>15%</button>
        
      </div>
      <div className="input-group">
        <label htmlFor="peopleInput">Number of People:</label>
        <input
          type="number"
          id="peopleInput"
          value={people}
          onChange={(e) => handlePeople(parseInt(e.target.value))}
        />
      </div>
    </div>
  );
};

export default LeftBox;
