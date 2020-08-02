import React, { Component } from 'react';

class ComponentForm extends Component {

    state = {
        name: "",
    }

    render() {


        return (
            <form>

                <label for="name">
                    <p>Nazwa</p>
                    <input type="text" name="name" id="name" value={this.state.name} />
                </label>


            </form>
        );
    }
}

export default ComponentForm;