import React, { Component } from 'react';
import Header from './components/Layout/Header';
import AddTodo from './components/AddTodo';
import './App.css';
import Todos from './components/Todos';

// State inside app.js
class App extends Component {
    state ={
        todos: [
            {
                id:1,
                title:'Finish Todo React',
                completed: false
            },
            {
                id: 2,
                title: 'Complete Tekken Tutorial',
                completed: false
            },
            {
                id: 3,
                title: 'Make Dinner',
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
// Toggle Delete
    delTodo = (id) =>{
        this.setState({ todos:[...this.state.todos.filter(todo => todo.id !== id)]})   
    }



    render() {
        return ( < div className="App" >
            <div className="container">
                {/* Header component */}
                <Header />
                {/* Add todo input */}
                <AddTodo />
                {/* Next line allows State to be passed to Todos.js */}
                {/* Info is rendered here and is being mapped through through Todos.js */}
                <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />            
            </div>
            
            </div>  
        );
    }
}

export default App;