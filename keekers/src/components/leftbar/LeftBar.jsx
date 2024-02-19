import "./leftbar.scss"
import GroupIcon from '@mui/icons-material/Group';

const LeftBar = () => {
  return (
    <div className="leftbar">
        <div className="container">
            <div className="menu">
                <div className="user">
                    <img src="https://static.vecteezy.com/system/resources/thumbnails/009/303/117/small/cat-paw-clipart-design-illustration-free-png.png"
                        alt=""
                    />
                    <span>Jane Doe</span>
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