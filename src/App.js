import React, { Component } from 'react';
import logo from './logo.svg';
import s from './app.sass';

console.log(s)

class App extends Component {
  render() {
    return (
      <div className={s.App}>
        <div className={s["App-header"]}>
          <img src={logo} className={s["App-logo"]} alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
