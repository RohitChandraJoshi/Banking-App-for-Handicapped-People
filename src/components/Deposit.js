import React, { useState, useEffect } from "react";

const Deposit = ({ voiceControl }) => {
  const [depositAmount, setDepositAmount] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (voiceControl) {
      window.addEventListener("voice-deposit", handleVoiceDeposit);
      return () => {
        window.removeEventListener("voice-deposit", handleVoiceDeposit);
      };
    }
  }, [voiceControl]);

  const handleDeposit = (event) => {
    event.preventDefault();
    // Perform validation on depositAmount, e.g. ensure it's a positive number
    if (isNaN(depositAmount) || parseFloat(depositAmount) <= 0) {
      setErrorMessage("Please enter a valid deposit amount");
      setSuccessMessage("");
      return;
    }
    setSuccessMessage(`Successfully deposited $${depositAmount}`);
    setErrorMessage("");
    setDepositAmount("");
  };

  const handleVoiceDeposit = (event) => {
    const amount = event.detail;
    console.log("Received voice deposit amount:", amount);
    setDepositAmount(amount);
    setSuccessMessage(`Successfully deposited $${amount}`);
    setErrorMessage("");
  };

  return (
    <div className="page-container">
      <h2>Deposit</h2>
      <form onSubmit={handleDeposit}>
        <label>
          Amount:
          <input
            type="number"
            step="0.01"
            min="0"
            value={depositAmount}
            onChange={(event) => setDepositAmount(event.target.value)}
          />
        </label>
        <button type="submit">Deposit</button>
      </form>
      {successMessage && <p className="success-message">{successMessage}</p>}
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
};

export default Deposit;
