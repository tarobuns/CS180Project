import "./profile.scss"
import Posts from "../../components/posts/Posts"
import { useNavigate } from "react-router-dom"

const Profile = () => {
    const navigate = useNavigate();
    
    const handleGearClick = () => {
      console.log("Gear icon clicked");
      navigate("/settings");
    }
  
  return (
    <div className="profile">
      <div className="images">
        <img src="https://wallpapers-clan.com/wp-content/uploads/2023/11/monkey-d-luffy-standing-in-water-desktop-wallpaper-preview.jpg"
         alt="" 
         className="cover" />
        <img src="https://thicc-af.mywaifulist.moe/waifus/3653/631e7d3f0ea1732772cb9edf4a182a2690bd20db75598f4f0b433fd679a7b1fa_thumb.jpeg"
         alt="" 
         className="profilePicture" />
      </div>
      <div className="profileContainer">
        <div className="userInformation">
          <div className="center">
            <span>Monkey D. Luffy</span>
            <div className="info">
              <span>Bio Here</span>
            </div>
            <button>Follow</button>
          </div>
        </div>
        <button className="gearButton" onClick={handleGearClick}>
        <div className="gearIcon"></div>
        </button>
        <Posts/>
      </div>
      
    </div>
  )
}

export default Profile