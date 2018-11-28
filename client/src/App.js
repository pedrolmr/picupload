import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import { Route } from 'react-router-dom';

import UsersList from './components/UsersList';
import UserPage from './components/UserPage';
import PostPage from './components/PostPage';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      users: [],
      posts: []
    }
  }

  componentDidMount() {
    this.getUsers();
    this.getPosts();
  }

  getUsers = () => {
    axios
      .get('http://localhost:8000/api/users')
      .then((response) => {
        this.setState({ users: response.data })
      })
      .catch(err => console.log(err));
  }

  getPosts = () => {
    axios
      .get('http://localhost:8000/api/posts')
      .then((response) => {
        this.setState({ posts: response.data })
      })
      .catch(err => console.log(err));
  }
  render() {
    return (
      <div className="App">
        <Route exact path="/" render={props => <UsersList {...props} users={this.state.users} posts={this.state.posts}/>} />

        <Route exact path="/user/:id" render={props => <UserPage {...props} users={this.state.users} posts={this.state.posts}/>}/>

        <Route exact path="/posts/:id" render={props => <PostPage {...props} users={this.state.users} posts={this.state.posts} />} />
      </div>
    );
  }
}

export default App;

