import "./post.scss"
//imported icons from mui.com
import FavoriteIcon from '@mui/icons-material/Favorite'; //for like
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'; //for unlike
import CommentIcon from '@mui/icons-material/Comment'; //for comment
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'; //for "more" if we have time
import { Link } from "react-router-dom";
import Comments from "../comments/Comments";
import { useState } from "react";


const Post = ({post}) => {
  
  const [commentOpen, setCommentOpen] = useState(false)

  const isLiked = false; //temporary, need to connect onClick w back end

  return (
    <div className="post">
        <div className="container">
            <div className="user">
                <div className="userInfo">
                    <img src = {post.profilePicture} alt="" />
                    <div className="details">
                        <Link to={`/profile/${post.userId}`} style={{textDecoration:"none", color: "inherit"}}>
                            <span className="name">{post.name}</span>
                        </Link>
                        <span className="date">1 sec ago</span>
                    </div>
                </div>
                <MoreHorizIcon/>
            </div>
            <div className="content">
                <p>{post.description}</p>
                <img src={post.image} alt=""/>
            </div>
            <div className="information">
                <div className="item">
                    {isLiked  ? <FavoriteIcon/>: <FavoriteBorderIcon/>}
                    8 likes
                </div>
                <div className="item" onClick={()=>setCommentOpen(!commentOpen)}>
                    <CommentIcon/>
                    2 Comments
                </div>
            </div>
            {commentOpen && <Comments/>}
        </div>
    </div>
  );
};


export default Post;