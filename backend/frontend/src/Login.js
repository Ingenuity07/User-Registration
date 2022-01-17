import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = ({ setUser }) => {


    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const navigate = useNavigate();

    const handleSignIn = (event) => {
        event.preventDefault();

        const body = {
            email,
            pass
        }

        axios.post('user/login', body).then((res) => {

            localStorage.setItem('token', res.token)

            console.log(res.data.user)

            setUser(res.data.user)

            navigate('/user')
        }).catch((err => {
            console.log(err)
        }))

    }

    return (

        <div class="login">


            <section >

                <form onSubmit={handleSignIn} class='form'>
                    <div className="textbox">
                        <i className="fas fa-user"></i>
                        <input
                            type="email"
                            value={email}
                            required
                            onChange={(event) => setEmail(event.target.value)}
                            placeholder="Email" />
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
                    {/* {mila < 0 && <h6 style={{ color: "red" }}> No such user exist </h6>} */}
                    {<button  id="show-login" type="submit" style={{ color: "white" }}>Sign-in</button>}
                </form>
            </section>

        </div>
    );
}

export default Login;