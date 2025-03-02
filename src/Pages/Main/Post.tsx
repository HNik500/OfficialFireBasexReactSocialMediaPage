import { addDoc, collection } from "firebase/firestore";
import { Post as IPost } from "./Main";
import { auth, db } from "../../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

interface Props {
    post: IPost;
}

export const Post = (props: Props) => {
    const { post } = props;
    const [user] = useAuthState(auth);

    const addLike = async () => {
        if (!user) {
            alert("You need to be logged in to like a post.");
            return;
        }

        try {
            const LikesRef = collection(db, "likes");
            await addDoc(LikesRef, { userId: user.uid, postId: post.id });
            console.log("Like added successfully!");
        } catch (error) {
            console.error("Error adding like:", error);
        }
    };

    return (
        <div>
            <div className="title">
                <h1 className="title">{post.title}</h1>
            </div>
            <div className="body">
                <p>{post.description}</p>
            </div>
            <div className="footer">
                <p>@{post.username}</p>
                <button onClick={addLike}>👍</button>
            </div>
        </div>
    );
};
