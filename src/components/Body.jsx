import React, { Component } from 'react'
import Exercises from './Exercises'
import ToDoList from './ToDoList'
import Links from './Links'
import Week from './Week'

class Body extends Component {
    constructor() {
      super();
      let stored = [];
      if(localStorage.getItem('CoursesList'))
        stored = localStorage.getItem('CoursesList').split(",");

      this.state = {
        courses: stored,
        course: ""
      }
    }
  
  // Add  Course To List
  AddCourseHandler = () => {
    if(this.state.course === "" ) { alert("Empty Input"); return; }
    let clone = [...this.state.courses];
    clone.push(this.state.course);
    this.setState({courses: clone, course: ""});
    localStorage.setItem('CoursesList',clone);

  }

    // Input Handler for to-do-list input
  inputHandler = event => {
      this.setState({ course: event.target.value });
  }

  AddToList = () => {
        return ( 
        <div id="AddToDoList">
            <input onChange={this.inputHandler} value={this.state.course} placeholder="שם קורס..."/>
            <h1><button onClick={this.AddCourseHandler}>הוסף קורס</button></h1>
        </div>
         );
    }
    deleteCourse = index => {
      let clone = [...this.state.courses];
      clone.splice(index,1);
      this.setState({courses: clone});
      localStorage.setItem('CoursesList',clone);
    }
    render() {
    let CoursesToDoList = this.state.courses.map( (course_name,index) => {
    return (
    <ToDoList key={index} header={course_name} delete={() => {this.deleteCourse(index)}}/> 
    );
    }) // End CoursesToDoList
    return (   
    <div id="content">      
      < Week />
      <hr/>
      <h1>משימות לפי קורסים</h1>
      <div id = "FirstRow">
        {CoursesToDoList}
        {this.AddToList()}
      </div>

      <hr/>
      <div id="SecondRow" style={{marginTop: "25px"}}>
      <Exercises />
      <Links />
      </div>



    </div>
      );
    } 




} // End Body Component
export default Body