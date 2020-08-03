import React, { Component } from 'react';
import '../Style/Task.css'

const Task = (props) => {
    const { text, date, checked, id } = props.task;


    const style = {
        color: 'red',
    }

    return (
        <div className="task">
            <strong style={checked ? style : null}>{text}</strong><span>({date}) </span>
            <button className="taskButton" onClick={() => props.delete(id)}>X</button>
            <button className="taskButton" onClick={() => props.change(id)}>Done</button>
        </div>
    );
}

export default Task;