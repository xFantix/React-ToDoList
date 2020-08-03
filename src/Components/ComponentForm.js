import React, { Component } from 'react';
import '../Style/ComponentForm.css'

class ComponentForm extends Component {


    today = new Date().toISOString().slice(0, 10);

    state = {
        text: "",
        date: "",
        checked: false,
        active: true,

    }


    handeChangeForm = (e) => {
        const type = e.target.type;
        const value = e.target.value;
        const name = e.target.name;
        const check = e.target.checked;

        if (type === "text" || type === "date") {
            this.setState({
                [name]: value,
            })
        }
        else if (type === "checkbox") {
            this.setState({
                checked: check,
            })
        }
    }
    handleSubmit = (e) => {
        e.preventDefault();
    }



    render() {




        return (
            <form className="ComponentForm" onSubmit={this.handleSubmit}>

                <h2 className="headerForm">Add Your Task</h2>


                <label htmlFor="name" className="formLabel" method="post">
                    <p className="formLabelTag">Nazwa</p>
                    <input className="formLabel__input" type="text" name="text" id="name" value={this.state.text} onChange={this.handeChangeForm} />
                </label>

                <label htmlFor="Date" className="formLabel">
                    <p className="formLabelTag">Date</p>
                    <input className="formLabel__input" type="date" name="date" id="date" value={this.state.date} onChange={this.handeChangeForm} min={this.today} />
                </label>

                <label htmlFor="checkbox" className="formLabel">
                    <p className="formLabelTag__checkbox">Important</p>
                    <input className="formLabel__checkbox" type="checkbox" name="checkbox" id="checkbox" checked={this.state.checked} onChange={this.handeChangeForm} />
                </label>
                <button className="buttonForm">Send Task</button>


            </form>
        );
    }
}

export default ComponentForm;