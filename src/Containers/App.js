import React, { useState, useEffect } from 'react';
import CardList from '../Components/CardList';
import SearchBox from '../Components/SearchBox';
import Scroll from '../Components/Scroll';
import './App.css';
import ErrorBoundary from '../Components/ErrorBoundary';

function App () {
    // constructor() {
    //     super()
    //     this.state = {
    //         robots: [],
    //         searchfield: ''
    //     }
    // }
    // componentDidMount() {
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //     .then(response => response.json())
    //     .then(users => this.setState({robots: users}));
    // }

    //Using hooks when compared to the constructor above. UseState and UseEffect
    const [robots, setRobots] = useState([]);
    const [searchfield, setSearchfield] = useState('');

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => setRobots(users));
    }, [])

    const onSearchChange = (event) => {
        setSearchfield (event.target.value)
    }

    const filteredRobots = robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    })
    return (!robots.length)? 
        <h1 className='tc f1'>Loading</h1>:
        (
            (
                <div className='tc'>
                    <h1 className='f1'>RoboFriends</h1>
                    <SearchBox searchChange={onSearchChange}/>
                    <Scroll>
                        <ErrorBoundary>
                            <CardList robots={filteredRobots}/>
                        </ErrorBoundary>
                    </Scroll>
                </div>
            )
        );               
    }

export default App;