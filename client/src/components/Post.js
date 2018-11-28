// import React from 'react'
// import { Link } from 'react-router-dom'

// const Post = props => {
//     return (
//         <Link to={`/posts/${props.posts.user_id}`}>
//             <div className="postsContainer">
//                 <h3>{props.post.title}</h3>
//                 <img src={props.post.image} />
//                 <p>{props.post.description}</p>
//             </div>
//         </Link>
//     )
// }

// export default Post;

import React from 'react'
import { Link } from 'react-router-dom'

class Post extends React.Component {
    render(){
        return (
            <Link to={`/posts/${this.props.post.user_id}`}>
                <div className="postsContainer">
                    <h3>{this.props.post.title}</h3>
                    <img src={this.props.post.image} />
                    <p>{this.props.post.description}</p>
                </div>
            </Link>
        )
    }
}

export default Post;