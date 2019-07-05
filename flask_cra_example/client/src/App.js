import React from 'react';
import logo from './logo.svg';
import FormDemo from './FormDemo';
import TimeDemo from './TimeDemo';
import './App.css';

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Flask/React Demo</p>
      </header>

      <main className="App-main">
        <section>
          <TimeDemo />
        </section>
        <section>
          <FormDemo />
        </section>
      </main>
    </div>
  );
}
