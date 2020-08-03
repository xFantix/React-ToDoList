import React, { Component } from 'react';
import Task from './Task'

const TaskList = (props) => {

    const active = props.tasks.map(task => task.active === true);

    const done = props.tasks.map(task => task.active === false);

    const activeTasks = active.map(task => <Task key={task.id} task={task} />);

    return (
        <div>
            {activeTasks}
        </div>
    );
}

export default TaskList;
