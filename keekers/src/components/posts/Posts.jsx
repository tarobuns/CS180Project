import "./posts.scss"
import Post from "../post/Post";
import { useQuery } from "@tanstack/react-query";
import { makeRequest } from "../../axios";

const Posts = () => {

    //Temporary data 
    // Need back-end

    
    const posts = [
        {
            id: 1,
            name: "Monkey D. Luffy",
            userId: 1, 
            profilePicture:
                "https://thicc-af.mywaifulist.moe/waifus/3653/631e7d3f0ea1732772cb9edf4a182a2690bd20db75598f4f0b433fd679a7b1fa_thumb.jpeg",
            description: "I like him, he's funny.", 
            image: "https://qph.cf2.quoracdn.net/main-qimg-da5fe9a79977ebd07984db95a5709a4b.webp", 

        }, 
        {
            id: 2,
            name: "Son Goku",
            userId: 2, 
            profilePicture:
                "https://wallpapers.com/images/hd/dragon-ball-xenoverse-1920-x-1080-wallpaper-464i4annyok64pkx.jpg",
            description: "He's okay.", 
            image: "https://qph.cf2.quoracdn.net/main-qimg-da5fe9a79977ebd07984db95a5709a4b.webp",
        },
    ];
    
    return <div className="posts">
        {posts.map(post=>(
            <Post post={post} key={post.id}/>
        ))}
    </div>;
};

export default Posts;