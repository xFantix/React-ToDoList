
import './Style/App.css';
import ComponentForm from './Components/ComponentForm'
import TaskList from './Components/TaskList'
import React, { Component } from 'react';

class App extends Component {

  counter = 0;
  state = {
    tasks: [
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

        this.setState({
          tasks
        })
      }
    })

  }

  addTask = (text, date, checked) => {


    const task = {
      id: this.counter,
      text: text,
      date: date,
      checked: checked,
      active: true,

    }

    this.counter++;

    this.setState(prevState => ({
      tasks: [...prevState.tasks, task],
    }))


    return true;

  }

  render() {
    return (
      <div className="App" >

        <header className="header">
          <h1 className="header__heading">React ToDoList</h1>
        </header>
        <section className="section">
          <ComponentForm add={this.addTask} />
          <TaskList tasks={this.state.tasks} delete={this.deleteTask} change={this.changeTaskStatus} />
        </section>


      </div>
    );
  }
}

export default App;
