import logo from './logo.svg';
import './App.css';
import DCD from './Profile.js';
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
      </header>
      <DCD/> <br/>
      <DCD email="dinhmobile35@gmail.com" SDT="0399355483"/><br/>
      <DCD email="dinhmobile35@gmail.com" SDT="0399355483" Class="CNTT4"/><br/>
    </div>
  );
}

export default App;
