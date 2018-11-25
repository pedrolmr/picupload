import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

import UsersList from './components/UsersList';

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
        <UsersList users={this.state.users} />
      </div>
    );
  }
}

export default App;

