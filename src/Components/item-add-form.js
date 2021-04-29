import React from "react";

export default class AddItemForm extends React.Component {
    state = {
        label: ''
    };

    onLabelChange = (e) => {
        this.setState({ 
            label: e.target.value
        });
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onItemAdded(this.state.label);

        this.setState({ 
            label: ''
        });
    }

    render() {
        return(
            <div className='add-form'>
                <form className='form-inline' onSubmit={this.onSubmit}>
                    <input className='form-control input-add' 
                    placeholder='Type a label...' 
                    onChange={this.onLabelChange} 
                    value={this.state.label} />
                    <button className='btn btn-primary' type='submit'>Add</button>
                </form>
                
            </div>
        );
    }
}