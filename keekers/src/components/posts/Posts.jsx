import "./posts.scss";
import Post from "../post/Post";
import { useQuery } from "@tanstack/react-query";
import { makeRequest } from "../../axios";

const Posts = () => {
    const queryInfo = useQuery({
        queryKey: ['posts'],
        queryFn: () => makeRequest.get("http://localhost:8800/backend/posts").then(res => res.data)
    });

    const { isLoading, error, data } = queryInfo;

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>An error occurred: {error.message}</div>;

    return (
        <div className="posts">
            {data?.map((post) => (
                <Post post={post} key={post.id} />
            ))}
        </div>
    );
};

export default Posts;
