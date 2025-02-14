import { Link } from "react-router-dom";
import "./register.scss"
import { useState } from "react";
import axios from "axios";

const Register = () => {
    const [inputs, setInputs] = useState({
      username:"",
      email:"",
      password:"",
      name:"",
    })
    const[err, setErr] = useState(null);

    const handleChange = e =>{
      setInputs(prev=>({...prev, [e.target.name]: e.target.value}));
    };

    const handleClick =async (e) =>{
      e.preventDefault();

      try {
        await axios.post("http://localhost:8800/backend/auth/register", inputs);
      } catch(err) {
        setErr(err.response.data);
      }
    };

    console.log(err)

    return (
      <div className="register">
        <div className="card">
          <div className="left">
            <h1>Keekers</h1>
            <p> 
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
               Voluptates id repellat omnis autem laudantium dignissimos,
                nesciunt provident magni fugiat enim iusto sit aliquam hic,
                 mollitia, nihil excepturi quas? Enim, dignissimos!
            </p>
            <span>Already have an account?</span>
            <Link to="/login">
            <button> Login </button>
            </Link>
          </div>
          <div className="right">
            <h1>Register</h1>
                <form>
                    <input type="text" placeholder="Keekers Username" name="username" onChange={handleChange}/>
                    <input type="email" placeholder="E-mail" name="email" onChange={handleChange}/>
                    <input type="password" placeholder="Password" name="password" onChange={handleChange}/>
                    <input type="text" placeholder="Name" name="name" onChange={handleChange}/>
                    {err && err}
                    <button onClick={handleClick}>Register</button>
            </form>
          </div> 
        </div>
      </div>
    );
  }
  
  export default Register;