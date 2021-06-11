import React from 'react';
import corsLogo from './CORS.png';
import './App.css';

const App = () =>
(
  <div className="App">
    <header className="App-header">
      <img src={corsLogo} className="App-logo" alt="logo" />
      <p>
        CORS Tester.  Do it light.
        </p>
      <form>
        <label>
          Name:
      <input type="text" name="name" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </header>
  </div>
);

export default App;
