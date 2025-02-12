import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form"
import * as yup from 'yup';
import { addDoc,collection } from "firebase/firestore";
import { auth,db } from "../../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
interface CreateFormData{
  title:string;
  description:string;

}
const Createform = () => {
  const [user]=useAuthState(auth);
  const navigate = useNavigate()
  const schema = yup.object().shape({
    title:yup.string().required("must include title!"),
    description:yup.string().required("must include title!"),
  })
  const {register,
    handleSubmit,
    formState:{errors} 
  } =useForm<CreateFormData>({
    resolver:yupResolver(schema),
  }) 
  const postsRef = collection(db,"posts")
  const onCreatepost= async(data:CreateFormData)=>{
// console.log(data);
await addDoc(postsRef,{
  // title:data.title,
  // description:data.description,
  ...data,
  username:user?.displayName,
  UserId:user?.uid,
  
})
navigate("/");

  };
  return (
    <form action="" onSubmit={handleSubmit(onCreatepost)}>
      <input type="text" placeholder="title..."{...register("title")} />
      <p style={{color: "red"}}>{errors.title?.message}</p>
      <textarea  placeholder="Description....." {...register("description")} />
      <p  style={{color:"red"}}>{errors.description?.message}</p>
      <input type="submit" />

    </form>
  )
}

export default Createform