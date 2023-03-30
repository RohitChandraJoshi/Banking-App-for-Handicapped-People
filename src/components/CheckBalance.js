import React, { useState, useEffect } from "react";

const CheckBalance = ({ voiceControl }) => {
  const [accountBalance, setAccountBalance] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (voiceControl) {
      window.addEventListener("voice-check-balance", handleVoiceCheckBalance);
      return () => {
        window.removeEventListener("voice-check-balance", handleVoiceCheckBalance);
      };
    }
  }, [voiceControl]);

  const handleCheckBalance = (event) => {
    event.preventDefault();
    setErrorMessage("");
    // Perform logic to fetch account balance from server or other data source
    const balance = 500;
    setAccountBalance(balance);
    setSuccessMessage(`Your account balance is $${balance}`);
  };

  const handleVoiceCheckBalance = () => {
    setErrorMessage("");
    // Perform logic to fetch account balance from server or other data source
    const balance = 500;
    setAccountBalance(balance);
    setSuccessMessage(`Your account balance is $${balance}`);
  };

  return (
    <div className="page-container">
      <h2>Check Balance</h2>
      <button onClick={handleCheckBalance}>Check Balance</button>
      {successMessage && <p className="success-message">{successMessage}</p>}
      {accountBalance && !successMessage && (
        <p>Your account balance is ${accountBalance}</p>
      )}
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
};

export default CheckBalance;
