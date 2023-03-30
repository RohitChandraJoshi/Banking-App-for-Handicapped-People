import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import annyang from "annyang";
import { useState } from "react";
import "./App.css";
import Withdrawal from "./components/Withdrawal";
import Deposit from "./components/Deposit";
import CheckBalance from "./components/CheckBalance";
import Login from "./components/Login";
import Home from "./components/Home";
import MainPage from "./components/MainPage";



const App = () => {
  const [setIsLoggedIn] = useState(false);
  useEffect(() => {
    if (annyang) {
      annyang.addCommands({
        "go to withdrawal": () => {
          window.location.href = "/withdrawal";
        },
        "go to deposit": () => {
          window.location.href = "/deposit";
        },
        "go to main page": () =>{
          window.location.href = "/mainpage"
        },
        "go to Account Balance": () => {
          window.location.href = "/check-balance";
        },
        "go to login": () => {
          window.location.href = "/login";
        },
        "go to home": () => {
          window.location.href = "/";
        },
        "open withdrawal": () => {
          window.location.href = "/withdrawal";
        },
        "open deposit": () => {
          window.location.href = "/deposit";
        },
        "get started": () => {
          window.location.href = "/login";
        },
        "about us": () => {
          window.location.href = "#about";
        },
        "go to about ": () => {
          window.location.href = "#about";
        },
        "how to contact": () => {
          window.location.href = "#contact";
        },
        "about this website": () => {
          window.location.href = "#about";
        },
        "features": () => {
          window.location.href = "#features";
        },
        "contact us": () => {
          window.location.href = "#contact";
        },
        "open Account Balance": () => {
          window.location.href = "/check-balance";
        },
        "open login": () => {
          window.location.href = "/login";
        },
        "please login": () => {
          window.location.href = "/login";
        },
        "please sign in": () => {
          window.location.href = "/login";
        },
        "open sig in": () => {
          window.location.href = "/login";
        },
        "sign in": () => {
          window.location.href = "/login";
        },
        "open home": () => {
          window.location.href = "/";
        },
        "logout": () => {
          window.location.href = "/";
        },
        "please logout": () => {
          window.location.href = "/";
        },
        "withdraw :amount": (amount) => {
          const event = new CustomEvent("voice-withdrawal", { detail: amount });
          window.dispatchEvent(event);
        },
        "deposit :amount": (amount) => {
          const event = new CustomEvent("voice-deposit", { detail: amount });
          window.dispatchEvent(event);
        },
        "check balance": () => {
          const event = new CustomEvent("voice-check-balance");
          window.dispatchEvent(event);
        },
        "login with username :username and password :password": (username, password) => {
          if (username === "Rohit" && password === "123") {
            setIsLoggedIn(true);
            
            window.location.href = "/mainpage";
          } else {
            alert("Incorrect username or password");  
          }
        },
      });
      annyang.start();
      annyang.addCallback("result", (result) => {
        const transcript = result[0];
        console.log(transcript);
        // Do something with the transcript, e.g. pass it to the Withdrawal component
      });
    }
    return () => {
      if (annyang) {
        annyang.removeCommands();
        annyang.abort();
      }
    };
  }, [setIsLoggedIn]);

  return (
    <Router>
      <div>
        <header>
          <nav>
            <img class="logo img-fluid" src="/images/bank.png" alt="" />
            <ul className="nav-bar-list">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="#about">About</Link>
              </li>
              <li>
                <Link to="#features">Features</Link>
              </li>
              <li>
                <Link to="#contact">Contact</Link>
              </li>
              <li style={{display: "none"}}>
                <Link to="/login">Login</Link>
              </li>
            </ul>
            <img class="collapse-img" src="images/icon-hamburger.svg" alt="" />
            <img class="close" src="images/icon-close.svg" alt="" />
            <div class="nav-buttons">
              <a href="signup" class="btn-signup">
                Sign In
              </a>
            </div>
          </nav>
          
        </header>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/withdrawal">
            <Withdrawal voiceControl={true} />
          </Route>
          <Route path="/deposit">
            <Deposit voiceControl={true} />
          </Route>
          <Route path="/check-balance">
            <CheckBalance voiceControl={true} />
          </Route>
          <Route path="/login" component={Login}>
            <Login voiceControl={true}  />
          </Route>
          {/* <Route component={NotFound} /> */}
          <Route path="/mainpage">
           <MainPage voiceControl={true} component={MainPage} />
        </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
