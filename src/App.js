import React, { Component } from "react";
import CardList from "./CardList";
import { robots } from "./Robots";
import SearchBox from "./SearchBox";



class App extends React.Component {
    constructor() {
        super();
        this.state = {
                robots: robots,
                searchField: ''
            }
        }

    onSearchChange(event) {
        console.log(event.target.value);
    }    
    //continue from video here 17:46
        
    render() {
        return (
            <div className="tc">
                <h1>RoboFriends</h1>
                <SearchBox onSearchChange={this.onSearchChange} />
                <CardList robots={this.state.robots}/> 
            </div>       
        );
    }
    } 

export default App;