//import { useContext } from "react";
import "./comments.scss"

const Comments = () => {
    //temporary, need back end
    const comments =[
        {
            id: 1, 
            description: "Hello world",
            name: "Monkey D. Luffy", 
            userId: 1, 
            profilePicture:
                "https://thicc-af.mywaifulist.moe/waifus/3653/631e7d3f0ea1732772cb9edf4a182a2690bd20db75598f4f0b433fd679a7b1fa_thumb.jpeg"
        }, 
        {
            id: 2, 
            description: "Hello monkey",
            name: "Son Goku", 
            userId: 1, 
            profilePicture:
                "https://wallpapers.com/images/hd/dragon-ball-xenoverse-1920-x-1080-wallpaper-464i4annyok64pkx.jpg"
        }, 
    ];
    
    return (
        <div className="comments">
            <div className="write">
                <input type="text" placeholder="Leave a Comment" />
                <button>Send</button>
            </div>
            {comments.map(comment => (
    <div className="comment" key={comment.id}> {/* prop key goes here */}
        <img src={comment.profilePicture} alt="" />
        <div className="info">
            <span>{comment.name}</span>
            <p>{comment.description}</p>
        </div>
    </div>
))}

        </div>
    )
}

export default Comments
