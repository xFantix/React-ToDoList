import React, { Component } from 'react';
import '../Style/ComponentForm.css'

class ComponentForm extends Component {


    today = new Date().toISOString().slice(0, 10);

    state = {
        name: "",
        date: "",
    }


    handeChangeForm = (e) => {
        const type = e.target.type;
        const value = e.target.value;
        const name = e.target.name;

        if (type === "text" || type === "date") {
            this.setState({
                [name]: value,
            })
        }
    }



    render() {




        return (
            <form className="ComponentForm">

                <h2 className="headerForm">Add Your Task</h2>


                <label htmlFor="name" className="formLabel">
                    <p className="formLabelTag">Nazwa</p>
                    <input className="formLabel__input" type="text" name="name" id="name" value={this.state.name} onChange={this.handeChangeForm} />
                </label>

                <label htmlFor="Date" className="formLabel">
                    <p className="formLabelTag">Date</p>
                    <input className="formLabel__input" type="date" name="date" id="date" value={this.state.date} onChange={this.handeChangeForm} min={this.today} />
                </label>


            </form>
        );
    }
}

export default ComponentForm;