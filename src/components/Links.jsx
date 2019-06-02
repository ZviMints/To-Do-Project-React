import React, { Component } from 'react';
class Links extends Component {
    constructor() {
        super();
        let stored = [];
        if(localStorage.getItem('LinksList'))
        {
            let all = localStorage.getItem('LinksList').split(",");
            for(let i=0; i<all.length; i+=2)
            {
                let temp = [];
                temp.push(all[i]);
                temp.push(all[i+1]);
                stored.push(temp); 
            }
        }
        this.state = {
            inputAbout: "",
            inputLink: "",
            arr: stored
        }
    }
    AboutHandler = event => {
        this.setState({inputAbout: event.target.value});
    }
    LinkHandler = event => {
        this.setState({inputLink: event.target.value});
    }

    handleClick = () => {
        if(this.state.inputAbout === "" || this.state.inputLink === "" ) { alert("Empty Input"); return; }
        let clone = [...this.state.arr];
        let arr = [];
        arr.push(this.state.inputAbout);
        arr.push(this.state.inputLink);

        clone.push(arr);
        this.setState({arr: clone,
                     inputAbout: "",
                    inputLink: ""});
        localStorage.setItem('LinksList',clone);

    }

    deleteLink = index => {
        let clone = [...this.state.arr];
        clone.splice(index,1);
        this.setState({courses: clone});
        localStorage.setItem('LinksList',clone);
    }

    handleDelete = (index) => {
        let clone = [...this.state.arr];
        clone.splice(index,1);
        this.setState({arr: clone});
        localStorage.setItem('LinksList',clone);

    }

    render() { 
        let List = this.state.arr.map((link,index) => {
            return (
                <li key={link[0]}><a href={this.state.arr[index][1]}>{this.state.arr[index][0]}</a>
                                <button onClick={() => {this.handleDelete(index)}}>X</button></li>
            );
        });
        return (
            <div id="LinksColumn">
            <h1 style={{color: 'black'}}>לינקים</h1>
            <ul className="LinksList">
                {List}
            </ul>
            <input type="text" value={this.state.inputAbout} onChange={this.AboutHandler} placeholder="כותרת.." ></input>
            <input type="text" value={this.state.inputLink} onChange={this.LinkHandler} placeholder="לינק.." ></input>
            <button onClick={this.handleClick}>הוסף</button>

            </div>
          );
    }
}
 
export default Links;