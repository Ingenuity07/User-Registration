import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from 'axios'

const Register = ({user , setUser}) => {


    const [email, setEmail] = useState("");
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [add, setAdd] = useState("");
    const [phno, setPhno] = useState("");
    const [pass, setPass] = useState("");

    const navigate = useNavigate();

    const handleSignUp = (event) => {
        event.preventDefault();

        const body = {
            email,
            pass,
            fname,
            lname,
            add,
            phno,
            pass
        }

        axios.post('register', body).then((res) => {
            console.log(typeof res);
            localStorage.setItem('token', res.data.token)
            

            setUser(res.data.user)

            navigate('/user')
        }).catch((err => {
            
            console.log(err)
        }))

        console.log(body)

        console.log("in sign in function")
    }

    return (
        <div className="login">
            
                 <form onSubmit={handleSignUp} className='form'>
                    <div className="textbox">
                        <i className="fas fa-envelope"></i>
                        <input
                            type="text"
                            value={fname}
                            required
                            onChange={(event) => setFname(event.target.value)}
                            placeholder="First Name" />
                    </div>
                    <div className="textbox">
                        <i className="fas fa-envelope"></i>
                        <input
                            type="text"
                            value={lname}
                            required
                            onChange={(event) => setLname(event.target.value)}
                            placeholder="Last Name" />
                    </div>

                    <div className="textbox">
                        <i className="fas fa-user"></i>
                        <input
                            type="text"
                            value={add}
                            required
                            onChange={(event) => setAdd(event.target.value)}
                            placeholder="Address" />
                    </div>
                    <div className="textbox">
                        <i className="fas fa-user"></i>
                        <input
                            type="number"
                            value={phno}
                            required
                            onChange={(event) => setPhno(event.target.value)}
                            placeholder="Phone " />
                    </div>
                    <div className="textbox">
                        <i className="fas fa-user"></i>
                        <input
                            type="email"
                            value={email}
                            required
                            onChange={(event) => setEmail(event.target.value)}
                            placeholder="E-mail" />
                    </div>

                    <div className="textbox">
                        <i className="fas fa-lock"></i>
                        <input
                            type="password"
                            required
                            value={pass}
                            onChange={(event) => setPass(event.target.value)}
                            placeholder="Password" />
                    </div>
                    {/* {mila < 0 && <h6 style={{ color: "red" }}>No such user exist </h6>} */}
                     <button  id="show-login" type="submit" style={{ color: "white" }}>Sign-up</button>
                </form>
            
        </div>

    );
}

export default Register;