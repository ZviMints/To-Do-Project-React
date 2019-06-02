import React, { Component } from 'react';
import Label from './Label';
class Week extends Component {
    constructor() {
        super();
        this.state = {
        }
    }

    renderTableHeader = () => {
        let headers = ["     ", "יום ראשון", "יום שני", "יום שלישי", "יום רבעי", "יום חמישי", "יום שישי", "יום שבת"];
        return headers.map((key, index) => {
            if(index === 0) return <th key={key}>{key}</th>
            return <th className="TableHeaders" key={key}>{key}</th>
         });
    }
    renderTableData = () => {
    let table = []
    let d = new Date();
    let n = d.getDay()
    // Outer loop to create parent
    for (let i = 0; i < 3; i++) {
      let children = []
      //Inner loop to create children
      for (let j = 0; j < 8; j++) {
        if(j === 0) {
            switch(i) {
                case 0:
                children.push(
                    <td className="TableHours" key="בוקר">
                        בוקר
                    </td>)
                    break;
                case 1:
                children.push(
                    <td className="TableHours" key="צהריים">
                        צהריים
                    </td>)
                    break;
                case 2:
                children.push(
                    <td className="TableHours" key="לילה">
                        לילה
                    </td>)
                    break;
            }
        }
        else {
        let field_text = localStorage.getItem(i +","+ j) ? localStorage.getItem(i +","+ j) : "";
        
        children.push(
                    <td style={{backgroundColor: (n)===(j-1) ? '#bebebe' : 'white'}}
                    id ={i +","+ j} key={i +","+ j}>
                    <Label html={field_text} id={i +","+ j} />
                    </td>)
        }
      }
      //Create the parent and add the children
      table.push(<tr key={i}>{children}</tr>)
    }
    return table
  }
    render() { 
        return (
            <div id="week">
            <h1>מהלך השבוע</h1>
            <table id="WeekTable">
            <tbody>
                <tr>{this.renderTableHeader()}</tr>
                    {this.renderTableData()}
            </tbody>
            </table>
            </div>
          );
    }
}
 
export default Week;