import React, { Component } from 'react';
import Task from './Task'
import '../Style/TaskList.css'

const TaskList = (props) => {



    const done = props.tasks.filter(task => task.active === false);
    const active = props.tasks.filter(task => task.active === true);

    const activeTasks = active.map(task => <Task key={task.id} task={task} delete={props.delete} change={props.change} />);

    const doneTasks = done.map(task => <Task key={task.id} task={task} delete={props.delete} change={props.change} />);

    return (
        <div className="TaskList">
            <h2 className="taskListHeader" >Active Task ({activeTasks.length})</h2>
            {activeTasks.length > 0 ? activeTasks : <h3 className="taskListHeader__noList">No Assignments</h3>}
            <h2 className="taskListHeader" >Done Task ({doneTasks.length})</h2>
            {doneTasks.length > 0 ? activeTasks : <h3 className="taskListHeader__noList">No Assignments</h3>}
        </div>
    );
}

export default TaskList;
