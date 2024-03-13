import "./navigationbar.scss"
//importing icons from materials UI website
import PetsIcon from '@mui/icons-material/Pets'; //for paw icon (Home Icon)
import NightsStayIcon from '@mui/icons-material/NightsStay'; //for Dark Mode Icon (eventual)
import SearchIcon from '@mui/icons-material/Search'; //for userSearch
import PersonIcon from '@mui/icons-material/Person'; //for userProfile
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";


const NavigationBar = () => {
    const { currentUser } = useContext(AuthContext);
  return (
    <div className="Navigationbar">
        <div className="left">
            <Link to="/" style={{textDecoration:"none"}}>
             <span>Keekers</span>
            </Link>
            <PetsIcon/>
            <NightsStayIcon/>
        </div>
        <div className="middle">
            <div className="search">
                <SearchIcon/>
                <input type="text" placeholder="User Search..."/>
            </div>
        </div>
        <div className="right">
            <PersonIcon/>
            <div className="user"> 
                <img src={currentUser.profilePicure} alt=""/>
                <span>{currentUser.name}</span>
            </div>
        </div>
    </div>
  );
};

export default NavigationBar