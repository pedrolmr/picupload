import React from 'react'
import Post from './Post'

class UserPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            user: {}
        }
    }

    componentDidMount() {
        const userId = this.props.match.params.id;
        this.setState({
            user: this.props.users.find(user => `${user.id}` === userId)
        });
    }

    render() {
        return (
            <div className="user-page">
            <h1>{this.state.user.name}'s Posts</h1>
                {this.props.posts.map(post => {
                    return this.state.user.id === post.user_id ? <Post post={post} name={this.props.name}/> : null
                })}
            </div>
        )
    }
}


export default UserPage;