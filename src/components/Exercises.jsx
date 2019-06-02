import React, { Component } from 'react';

class Exercises extends Component {
    constructor() {
        super();
        let stored = [];
        if(localStorage.getItem('ExerciseList'))
        {
            let all = localStorage.getItem('ExerciseList').split(",");
            for(let i=0; i<all.length; i+=3)
            {
                let temp = [];
                temp.push(all[i]);
                temp.push(all[i+1]);
                temp.push(all[i+2]);
                stored.push(temp); 
            }
        }
             this.state = {
            courses: stored,
            input: "",
            number: "",
            date: this.getCurrDate()
        }
    }
    getCurrDate() {
        var curr = new Date();
        curr.setDate(curr.getDate());
        var date = curr.toISOString().substr(0,10);
        return date;  
    }

    // Input Handler for to-do-list input
    inputHandler = event => {
        this.setState({ input: event.target.value });
    }

    dateHandler = event => {
        this.setState({ date: event.target.value });
    }
    numberHandler = event => {
        this.setState({ number: event.target.value });
    }


    AddExercise = () => {
        if(this.state.input === "" || this.state.number === "" ) { alert("Empty Input"); return; }
        let clone = [...this.state.courses];
        let _new = [];
        _new.push(this.state.input);
        _new.push(this.state.number);
        _new.push(this.state.date);

        clone.push(_new);
        
        this.setState({courses: clone,
                    input: "",
                    number: "",
                     date: this.getCurrDate()
                    }); 
        localStorage.setItem('ExerciseList',clone);
    }
    deleteExercise = (index) => {
        let clone =[...this.state.courses];
        clone.splice(index,1);

        this.setState({courses: clone});
        localStorage.setItem('ExerciseList',clone);

    }
    renderTableHeader = () => {
        let headers = ["מקצוע - מטלה","תאריך הגשה","זמן נותר","מחק"];
        return headers.map((key, index) => {
            return <th key={key}>{key}</th>
         });
    }
    renderTableData = () => {
        return this.state.courses.map((arr,index) => {
            var tmp = this.state.courses[index][2].split("/"); 
            var testdate = new Date(tmp); //months are zero based array ,so we subtract -1

            return (
               <tr key={arr}>
                  <td>{this.state.courses[index][0] + " - " + this.state.courses[index][1]}</td>
                  <td>{this.state.courses[index][2]}</td>
                  <td>{Math.round((testdate - Date.now())/(1000*60*60*24))}</td>
                  <td>
                      <button key={index} onClick={() => { this.deleteExercise(index) }}>X</button>
                  </td>
               </tr>
            );
         })
    }
    render() { 
        return ( 
            
            <div id="ExercisesColumn">
            <h1>מטלות להגשה</h1>
            <table id="ExerciseTable">
            <tbody>
                <tr>{this.renderTableHeader()}</tr>
                    {this.renderTableData()}
            </tbody>
            </table>
            <hr />
            <h2>הוסף מטלה</h2>
                <span>שם קורס</span>
                <input placeholder="הסתברות.." value={this.state.input} onChange={this.inputHandler}></input>
                <span>מספר מטלה</span>
                <input placeholder="מטלה 2.." value={this.state.number} onChange={this.numberHandler}></input>
                <span>תאריך הגשה</span>
                <input type="date" value={this.state.date} name="date" id="date" onChange={this.dateHandler}></input>
                <button onClick={this.AddExercise}>הוסף</button>
            </div> 
        );
    }
}

export default Exercises;