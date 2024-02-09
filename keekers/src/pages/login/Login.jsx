import { Link } from "react-router-dom";
import "./login.scss"

const Login = () => {
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
                    <input type="text" placeholder="Keekers Username"/>
                    <input type="password" placeholder="Password"/>
                    <button>Login</button>
            </form>
          </div> 
        </div>
      </div>
    );
  }
  
  export default Login;