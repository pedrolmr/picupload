import React from 'react';
import User from './User';

const UsersList = props => {
    return (
        <div className="UsersList">
            {props.users.map(user => {
                return (
                    <User
                        user={user}
                        name={user.name} 
                        description={user.description} 
                        posts={props.posts}
                    />
                );
            })}
        </div>
    );
}

export default UsersList;

