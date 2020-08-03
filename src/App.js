
import './Style/App.css';
import ComponentForm from './Components/ComponentForm'
import TaskList from './Components/TaskList'
import React, { Component } from 'react';

class App extends Component {


  state = {
    tasks: [
      {
        id: 0,
        name: "ZAGRAC",
        date: "aasdasd",
        checked: true,
        active: true,
      },
    ]
  }


  render() {
    return (
      <div className="App" >

        <header className="header">
          <h1 className="header__heading">React ToDoList</h1>
        </header>
        <section className="section">
          <ComponentForm />
          <TaskList tasks={this.state.tasks} />
        </section>


      </div>
    );
  }
}

export default App;
