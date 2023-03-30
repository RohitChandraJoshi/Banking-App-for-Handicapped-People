import React, { useState, useEffect } from "react";

const Withdrawal = ({ voiceControl }) => {
  const [withdrawalAmount, setWithdrawalAmount] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (voiceControl) {
      window.addEventListener("voice-withdrawal", handleVoiceWithdrawal);
      return () => {
        window.removeEventListener("voice-withdrawal", handleVoiceWithdrawal);
      };
    }
  }, [voiceControl]);

  const handleWithdrawal = (event) => {
    event.preventDefault();
    // Perform validation on withdrawalAmount, e.g. ensure it's a positive number
    if (isNaN(withdrawalAmount) || parseFloat(withdrawalAmount) <= 0) {
      setErrorMessage("Please enter a valid withdrawal amount");
      setSuccessMessage("");
      return;
    }
    setSuccessMessage(`Successfully withdrew $${withdrawalAmount}`);
    setErrorMessage("");
    setWithdrawalAmount("");
  };

  const handleVoiceWithdrawal = (event) => {
    const amount = event.detail;
    setWithdrawalAmount(amount);
    setSuccessMessage(`Successfully withdrew $${amount}`);
    setErrorMessage("");
  };

  return (
    <div className="page-container">
      <h2>Withdrawal</h2>
      <form onSubmit={handleWithdrawal}>
        <label>
          Amount:
          <input
            type="number"
            step="0.01"
            min="0"
            value={withdrawalAmount}
            onChange={(event) => setWithdrawalAmount(event.target.value)}
          />
        </label>
        <button type="submit">Withdraw</button>
      </form>
      {successMessage && <p className="success-message">{successMessage}</p>}
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
};

export default Withdrawal;
