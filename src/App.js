import React, { Component } from 'react';
import './App.css';
import Todos from './components/Todos';

// State inside app.js
class App extends Component {
    state ={
        todos: [
            {
                id:1,
                title:'Take out the trash',
                completed: false
            },
            {
                id: 2,
                title: 'Dinner with wife',
                completed: false
            },
            {
                id: 3,
                title: 'Meeting with boss',
                completed: false
            }
        ]
    }

    //Toggle Complete 
    markComplete = (id) =>{
        this.setState({
            todos: this.state.todos.map(todo =>{
              if(todo.id ===id){
                //   !todo.completed = true
                // Return it's opposite
                  todo.completed = !todo.completed 
              }

              return todo;
            })
        })
    }

    render() {
        return ( < div className="App" >
            {/* Next line allows State to be passed to Todos.js */}
            {/* Info is rendered here and is being mapped through through Todos.js */}
            <Todos todos={this.state.todos} markComplete={this.markComplete} />            
            </div>  
        );
    }
}

export default App;