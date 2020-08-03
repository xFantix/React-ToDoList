import React from 'react';
import './Style/App.css';
import ComponentForm from './Components/ComponentForm'


function App() {
  return (
    <div className="App">

      <header className="header">
        <h1 className="header__heading">React ToDoList</h1>
      </header>
      <section className="section">
        <ComponentForm />
      </section>


    </div>
  );
}

export default App;
