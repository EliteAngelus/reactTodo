import React, {Component} from 'react'
import PropTypes from 'prop-types';





export class Todoitem extends Component{
getStyle = () =>{
return{
    background: 'f4f4f4',
    padding:'10px',
    borderbottom: '1px #ccc dotted',
    textDecoration: this.props.todo.completed ? 
    'line-through' : 'none'
}

}
 


render(){
    const btnStyle = {
        backgroundColor: 'light-blue',
        color: '#FF0000',
        border: 'none',
        padding: '5px 10px',
        borderRadius: '50%',
        cursor: 'pointer',
        float: 'right'
    }
    // Pulling the id and title of whatever the current todo is. Stored in a variable. As not to repeat "this.props.todo code."
    const {id, title} = this.props.todo;
        return(
            <div style={this.getStyle()}>
                <p>
                    {/* When box is checked we are calling the markComplete function */}
                    <input type="checkbox" onChange={this.props.markComplete.bind (this, id)}/> {''}  {title}
                    <button style={btnStyle}>x</button>
                    </p>
            </div>
         )

    }
}






// PropTypes

Todoitem.propTypes = {
    todo: PropTypes.object.isRequired
}



export default Todoitem