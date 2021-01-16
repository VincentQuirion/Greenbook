import logo from './logo.svg';
import './App.css';

// Argon CSS
import "./assets/vendor/nucleo/css/nucleo.css";
import "./assets/vendor/font-awesome/css/font-awesome.min.css";
import "./assets/css/argon-design-system-react.css";

import "./assets/css/argon-design-system-react.min.css";
import "./assets/css/argon-design-system-react.css.map";
import {Link} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Link to="profile">test profile</Link>
        <Link to="search">test search</Link>
        <Link to="Login">test Login</Link>
        <Link to="Recipe">test Recipe</Link>
      </header>
    </div>
  );
}

export default App;
