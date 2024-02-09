import { Link } from "react-router-dom";
import "./register.scss"

const Register = () => {
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
                    <input type="text" placeholder="Keekers Username"/>
                    <input type="email" placeholder="E-mail"/>
                    <input type="password" placeholder="Password"/>
                    <input type="text" placeholder="Name"/>
                    <button>Register</button>
            </form>
          </div> 
        </div>
      </div>
    );
  }
  
  export default Register;