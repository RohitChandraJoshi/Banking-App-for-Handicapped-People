import React from "react";
import { Link } from "react-router-dom";

const MainPage = () => {
  return (
    <div className="page-container">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/withdrawal">Withdrawal</Link>
          </li>
          <li>
            <Link to="/deposit">Deposit</Link>
          </li>
          <li>
            <Link to="/check-balance">Account Balance</Link>
          </li>
          <li>
            <Link to="/home">logout</Link>
          </li>
        </ul>
      </nav>
      <h2> <br /> Welcome to our banking app!</h2>
      <p>
        Please use the navigation menu to access different pages of the app.
      </p>
      <p style={{wordWrap: "break-word" }}>
      
        In order to empower the differently abled (Divyaang) people of the
        country with digital banking services, easy-to-use innovative solutions
        for digital banking services such as digital payments, account opening,
        account statement, payment of utility bills, usage of debit/credit
        cards, etc., may be explored. This would provide equal opportunity to
        the physically challenged without any discrimination by the digitisation
        of banking and enable a greater inclusion of the physically challenged
        into the mainstream
      </p>
    </div>
  );
};

export default MainPage;
