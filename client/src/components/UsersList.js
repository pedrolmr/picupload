import React from 'react';

const UsersList = props => {
    return (
        <div className="UsersList">
            {props.users.map(user => {
                return(
                    <div>
                        <p>{user.name}</p>
                        <p>{user.description}</p>
                    </div>
                );
            })}
        </div>
    );
}

export default UsersList;

