
import './Style/App.css';
import ComponentForm from './Components/ComponentForm'
import TaskList from './Components/TaskList'
import React, { Component } from 'react';

class App extends Component {


  state = {
    tasks: [
      {
        id: 0,
        text: "ZAGRAC",
        date: "202-02-03",
        checked: true,
        active: true,
      },

      {
        id: 1,
        text: "ZAGRAC w LOLa",
        date: "202-02-03",
        checked: true,
        active: true,
      },
    ]
  }

  deleteTask = (id) => {
    let tasks = [...this.state.tasks];
    const index = tasks.findIndex(task => task.id === id);

    tasks.splice(index, 1);
    console.log(tasks);

    this.setState({
      tasks
    })

  }

  changeTaskStatus = (id) => {
    let tasks = [...this.state.tasks];

    tasks.forEach(task => {
      if (task.id === id) {

        task.active = false;

      }
    })

    this.setState({
      tasks
    })

    console.log(tasks);
  }

  render() {
    return (
      <div className="App" >

        <header className="header">
          <h1 className="header__heading">React ToDoList</h1>
        </header>
        <section className="section">
          <ComponentForm />
          <TaskList tasks={this.state.tasks} delete={this.deleteTask} change={this.changeTaskStatus} />
        </section>


      </div>
    );
  }
}

export default App;
