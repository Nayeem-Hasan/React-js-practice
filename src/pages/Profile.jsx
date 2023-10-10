import React from 'react';
import Menu from '../component/Menu';
import { useParams } from "react-router-dom";

const Profile = () => {
    let {facebookId,youtubeId}=useParams();
    return (
        <div>
            <Menu/>
            <p>Facebook={facebookId}</p>
            <p>Youtube={youtubeId}</p>
            <h1>This is Profile Page</h1>
        </div>
    );
};

export default Profile;