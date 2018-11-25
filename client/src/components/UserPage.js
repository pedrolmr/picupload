import React from "react";
import { Link } from "react-router-dom";

const UserPage = props => {
    if(props.users.length){
        let user = props.users.find(user => `${user.id}` === props.match.params.id);
    
    return(
        <div className="note-page">
            <h1>WELCOME TO THE USER PAGE</h1>
            <h1>{user.name}</h1>
            <h2>{user.description}</h2>
        </div>
    );
    }else{
        return <p>Loading...</p>
    }
};

export default UserPage;