import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import { Route } from 'react-router-dom';

import UsersList from './components/UsersList';
import UserPage from './components/UserPage';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      users: []
    }
  }

  componentDidMount() {
    axios
      .get('http://localhost:8000/api/users')
      .then((response) => {
        this.setState({ users: response.data})
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">
        <Route exact path="/" render={props => <UsersList {...props} users={this.state.users}/>} />
        <Route exact path="/user/:id" render={props => <UserPage {...props} users={this.state.users} />}/>
      </div>
    );
  }
}

export default App;

