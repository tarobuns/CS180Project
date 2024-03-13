import { useContext } from "react";
import "./leftbar.scss"
import GroupIcon from '@mui/icons-material/Group';
import { AuthContext } from "../../context/authContext";

const LeftBar = () => {
    const { currentUser } = useContext(AuthContext);
  return (
    <div className="leftbar">
        <div className="container">
            <div className="menu">
                <div className="user">
                    <img src={currentUser.profilePicture}
                        alt=""
                    />
                    <span>{currentUser.name}</span>
                </div>
                <div className="follower">
                    <GroupIcon/>
                    <span>Followers</span>
                </div>
            </div>
            <hr/>
        </div>
    </div>
  );
};

export default LeftBar