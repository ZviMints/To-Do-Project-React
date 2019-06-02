import React, { Component } from 'react';
import SingleToDo from './SingleToDo'

class ToDoList extends Component {
    constructor(props) {
        super(props);
        let stored = [];
        if(localStorage.getItem(this.getListStorager()))
        {
            stored = localStorage.getItem(this.getListStorager()).split(",");
        }
        
        this.state = {
            list: stored,
            input: "",
        }
    }
    

    getStorageLink = () => {
        return this.state.header;
    }
    // Input Handler for to-do-list input
    inputHandler = event => {
        this.setState({ input: event.target.value });
    }
    getListStorager = () => {
        return this.props.header + "";
    }
    // Add To-Do to list
    addTaskToList = () => {
        if(this.state.input === "" ) { alert("Empty Input"); return; }
        let clone =[...this.state.list];
        clone.push(this.state.input);
        this.setState({list: clone, input: ""});
        localStorage.setItem(this.getListStorager(),clone);
    }
    deleteTask = (index) => {
        let clone = [...this.state.list];
        clone.splice(index,1);
        this.setState({list: clone});
        localStorage.setItem(this.getListStorager(),clone);
    }
    render() { 
        let listItems = this.state.list.map( (task,index) => {
        return ( 
            <SingleToDo key={index} task={task} delete={() => this.deleteTask(index)}/>
            );
        });
        return (
            <div id="column">
            <a className="close" onClick={this.props.delete} />
            <h1 className="h1_header">{this.props.header}</h1>
            <input onChange={this.inputHandler} value={this.state.input} placeholder="משימה..." />
            <button onClick={this.addTaskToList} >הוסף</button>
            { this.state.list.length === 0 ? <h3>🗅 רשימה ריקה</h3> : <ol>{listItems}</ol> }   
            </div>
        );
    }
}
 
export default ToDoList;