import { Post as IPost } from "./Main"

interface Props{
    post: IPost;
}

export const Post =(props:Props)=>{
    const {post}=props;
    return <div>hi from Post

        <div className="title">
            <h1 className="title">{post.title}</h1>
        </div>
        <div></div>
    </div>
}