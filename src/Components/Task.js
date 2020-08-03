import React, { Component } from 'react';

const Task = (props) => {
    const { name } = props.task;
    return (
        <div>
            <h1>{name}</h1>
            <button>HEj</button>
        </div>
    );
}

export default Task;