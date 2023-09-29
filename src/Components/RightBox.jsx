const RightBox = ({
  tipAmount,
  total,
  people,
  handleBill,
  handleTip,
  handlePeople,
  handleReset,
}) => {
  return (
    <div className="right-box">
      <div className="result-group">
        <p>Tip Amount per Person:</p>
        <p>${tipAmount ? tipAmount.toFixed(2) : '0.00'}</p>
      </div>
      <div className="result-group">
        <p>Total per Person:</p>
        <p>${total ? total.toFixed(2) : '0.00'}</p>
      </div>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default RightBox;
