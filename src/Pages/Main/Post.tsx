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
    const LikesRef = collection(db, "likes");

    const addLike = async () => {
        if (!user) {
            console.log("❌ Error: User is not logged in");
            return;
        }
        if (!post.id) {
            console.log("❌ Error: Post ID is undefined");
            return;
        }

        console.log("✅ User ID:", user.uid);
        console.log("✅ Post ID:", post.id);

        try {
            await addDoc(LikesRef, { userId: user.uid, postId: post.id });
            console.log("🎉 Like added successfully!");
        } catch (error) {
            console.error("❌ Firestore write error:", error);
        }
    };

    return (
        <div>
            <p>hi from Posts</p>
            <div className="title">
                <h1 className="title">{post.title}</h1>
            </div>
            <div className="body">
                <p>{post.description}</p>
            </div>
            <div className="footer">
                <p>@{post.username}</p>
                <button onClick={addLike}>&#128077;</button>
            </div>
        </div>
    );
};