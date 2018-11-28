import React from 'react'
import Post from './Post'

class PostPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            post: {}
        }
    }

    componentDidMount() {
        const postId = this.props.match.params.id;
        this.setState({
            post: this.props.posts.find(post => `${post.user_id}` === postId)
        });
    }

    render() {
        return (
            <div className="user-page">
                
                {this.props.posts.map(post => {
                    return this.state.post.id === post.user_id ? 'post comments' : null
                })}
            </div>
        )
    }
}


export default PostPage;