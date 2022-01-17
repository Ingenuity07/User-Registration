const Profile = ({user}) => {
    return ( 

        <div className="profile">
            <h2>{user.fname}</h2>
            <h2>{user.lname}</h2>
            <h2>{user.email}</h2>
            <h2>{user.phno}</h2>
            <h2>{user.add}</h2>
        </div>
     );
}
 
export default Profile;