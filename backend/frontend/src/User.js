import Profile from "./Profile";

import { useState } from "react";

const User = ({ user }) => {
const [profile, setProfile] = useState(false)
    return (
        <div className="user">


            {!profile&&<div className="user">

            <h1>Welcome </h1>
                <br />
            <h1>{user.fname} &nbsp; {user.lname}</h1>
            </div>}
            {profile&&<Profile user={user}/>}
            {!profile&&<button class=" my-2 my-sm-0 cbut" type="submit" onClick={()=>{setProfile(!profile)}}>Check Profile</button>}
            {profile&&<button class=" my-2 my-sm-0 cbut" type="submit" onClick={()=>{setProfile(!profile)}}>Dashboard</button>}
            
        </div>

    );
}

export default User;