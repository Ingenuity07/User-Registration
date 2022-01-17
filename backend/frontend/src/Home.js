import Login from "./Login";
import Register from "./register";
import { useState } from "react";
const Home = ({ user, setUser }) => {

    const [choice, setChoice] = useState(null)

    return (
        <div className='home'>

            <div >
            {choice&&<button className="cbut" onClick={()=>setChoice(!choice)} style={{ color: "white" }}  >Go to Sign in</button>}
            {!choice&&<button className="cbut" onClick={()=>setChoice(!choice)} style={{ color: "white" }}  >Go to Register</button>}
             </div>
             <div>
             {!choice && <Login setUser={setUser} setChoice={setChoice} />}
            {choice && <Register setUser={setUser} setChoice={setChoice}/>}
            </div>
        </div>
    );
}

export default Home;