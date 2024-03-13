import { Link, useNavigate } from "react-router-dom";
import "./login.scss"
import { useContext, useState } from "react";
import { AuthContext } from "../../context/authContext";

const Login = () => {
    const [inputs, setInputs] = useState({
      username: "",
      password: "",
    });
    const [err, setErr] = useState(null);

    const navigate = useNavigate();

    const handleChange = (e) => {
      setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const { login } = useContext(AuthContext);

    const handleLogin = async (e) => {
      e.preventDefault(); // Prevent the default form submission behavior
      try {
        await login(inputs);
        navigate("/");
      } catch (err) {
        // Check if the error has a response property and that response has a data property
        if (err.response && err.response.data) {
          setErr(err.response.data);
        } else {
          // Handle other types of errors (e.g., network errors, or errors without a response property)
          setErr('An unexpected error occurred.');
        }
      }
    };

    return (
      <div className="login">
        <div className="card">
          <div className="left">
            <h1>Keekers</h1>
            <p> 
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
               Voluptates id repellat omnis autem laudantium dignissimos,
                nesciunt provident magni fugiat enim iusto sit aliquam hic,
                 mollitia, nihil excepturi quas? Enim, dignissimos!
            </p>
            <span>Ready to create an account?</span>
            <Link to="/register">
            <button> Register </button>
            </Link>
          </div>
          <div className="right">
            <h1>Login</h1>
            <form>
              <input type="text" placeholder="Keekers Username" name="username" onChange={handleChange}/>
              <input type="password" placeholder="Password" name="password" onChange={handleChange}/>
              {err && err}
              <button onClick={handleLogin}>Login</button>
            </form>
          </div> 
        </div>
      </div>
    );
  }
  
  export default Login;