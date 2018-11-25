import React from 'react';
import { Link } from 'react-router-dom';

const User = (props) => {
    return (
        <div className="user">
            <h3>
                <Link to={`/user/${props.user.id}`}>{props.name}</Link>
            </h3>
            <p>{props.description}</p> 
        </div>
    );
}

export default User;

