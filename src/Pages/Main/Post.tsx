import { addDoc, collection } from "firebase/firestore";
import { Post as IPost } from "./Main"
import { auth, db } from "../../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

interface Props{
    post: IPost;
}

export const Post =(props:Props)=>{
    const {post}=props;
    const [user]=useAuthState(auth);
      const LikesRef = collection(db,"likes")

      const addLike= async()=>{
    // console.log(data);
    await addDoc(LikesRef,{userId:user?.uid , postid:post.id});
//    navigate("/");
    
      };
    return <div>hi from Posts

        <div className="title">
            <h1 className="title">{post.title}</h1>
        </div>
        <div className="body">
            <p>
                {post.description}
            </p>
        </div>
        <div className="footer">
            <p>@{post.username}</p>
            <button onClick={addLike}>    &#128077; </button>
        </div>
    </div>
}