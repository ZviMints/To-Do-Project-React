import React, { Component } from 'react';
class Exercises extends Component {
    constructor() {
        super();
        this.state = {
            courses: ["הסתברות","cpp"],
            dates: ["הסתברות","cpp"],
            date: "",
            input: ""
        }
    }
    render() { 
        let listItems = this.state.courses.map( (courseName,index) => {
            return ( 
                    <h1>hey</h1>
            );}
        );
        return ( 
            <div id="Exercises">
            <h1>מטלות להגשה</h1>
            <table>
                <thead>
                    <th>מקצוע</th>
                    <th>תאריך</th>
                </thead>
            <tr>
            <td>{listItems}</td>
            </tr>
            </table>
            <hr />
            <h2>הוסף מטלה</h2>
            <label for="dateofbirth">מקצוע</label>
            <input placeholder="מטלה 2 בהסתברות.."></input>
            <label for="date">תאריך הגשה</label>
            <input type="date" name="date" id="date"></input>
            </div>
        );
    }
}
export default Exercises;