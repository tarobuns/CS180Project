import "./navigationbar.scss"
//importing icons from materials UI website
import PetsIcon from '@mui/icons-material/Pets'; //for paw icon (Home Icon)
import NightsStayIcon from '@mui/icons-material/NightsStay'; //for Dark Mode Icon (eventual)
import SearchIcon from '@mui/icons-material/Search'; //for userSearch
import PersonIcon from '@mui/icons-material/Person'; //for userProfile
import { Link } from "react-router-dom";


const NavigationBar = () => {
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
                <img src="https://static.vecteezy.com/system/resources/thumbnails/009/303/117/small/cat-paw-clipart-design-illustration-free-png.png" alt=""/>
                <span>Jane Doe</span>
            </div>
        </div>
    </div>
  );
};

export default NavigationBar