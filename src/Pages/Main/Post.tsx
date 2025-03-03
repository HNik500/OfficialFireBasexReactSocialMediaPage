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
      const LikesRef = collection(db,"likes");

      const addLike= async()=>{
    //console.log(data);
    await addDoc(LikesRef,{UserId:user?.uid ,postId:post.id});  // main problem was that i was bad naming so i had user.Id while in my rules i had User.Id so since they didn't match it gave me an error, so i went to my database and changed my user.Id to User.Id and after doing that it is sucessfully adding likes to my database!.
//    navigate("/");
    
      };
    return <div>hi from Posts

        <div className="title">
            <h1 className="title">{post.title}</h1>
        </div> ff
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