import React, { useState } from "react";
import LeftBox from "./LeftBox";
import RightBox from "./RightBox";

const BillPage = () => {
  const [totalBill, setTotalBill] = useState(0);
  const [tipPercentage, setTipPercentage] = useState(0);
  const [numberOfPeople, setNumberOfPeople] = useState(1);

  const handleBill = (value) => {
    setTotalBill(value);
  };

  const handleTip = (percentage) => {
    setTipPercentage(percentage);
  };

  const handlePeople = (value) => {
    setNumberOfPeople(value);
  };

  const calculateTipPerPerson = () => {
    const tipAmount = (totalBill * (tipPercentage / 100)) / numberOfPeople;
    return isNaN(tipAmount) ? 0 : tipAmount;
  };

  const calculateTotalPerPerson = () => {
    const totalAmount = totalBill / numberOfPeople + calculateTipPerPerson();
    return isNaN(totalAmount) ? 0 : totalAmount;
  };

  return (
    <div className="bill-page">
      <LeftBox
        handleBill={handleBill}
        handleTip={handleTip}
        handlePeople={handlePeople}
        bill={totalBill}
        people={numberOfPeople}
      />
      <RightBox
        tipAmount={calculateTipPerPerson()}
        total={calculateTotalPerPerson()}
        people={numberOfPeople}
        handleReset={() => {
          setTotalBill(0);
          setTipPercentage(0);
          setNumberOfPeople(1);
        }}
      />
    </div>
  );
};

export default BillPage;
