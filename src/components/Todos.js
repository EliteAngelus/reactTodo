// 
import React, { Component } from 'react';
import  Todoitem from  './Todoitem';
import PropTypes  from 'prop-types';


class Todos
extends Component {

    // TEST: The function is set to do whatever this.markComplete is below in the render.
    // markComplete = ()=>{
    //     console.log('Hello');
    

    render() {
        console.log(this.props.todos);
        // Cycles Through the Todos states
        // State is passed from app.js and now looped through.
        return this.props.todos.map((todo) => (
// Todoitem is being passed into this component which will display the title and id.
// Prop markComplete is passed here and set to run what this.markComplete it. Also set to run that on whatever is the current item(key) is selected. 
        <Todoitem key={todo.id} todo={todo} markComplete={this.props.markComplete} />

        ))
    }
}

// PropTypes
// Validation for properites that a compenent will have 

Todos.propTypes = {
    todos: PropTypes.array.isRequired
}

export default Todos;