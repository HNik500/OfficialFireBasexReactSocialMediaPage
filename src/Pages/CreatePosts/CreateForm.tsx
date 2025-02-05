import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form"
import * as yup from 'yup';
interface CreateFormData{
  title:string;
  description:string;

}
const Createform = () => {
  const schema = yup.object().shape({
    title:yup.string().required("must include title!!!"),
    description:yup.string().required("must include title!"),
  })
  const {register,handleSubmit,formState:{errors} } =useForm<CreateFormData>({
    resolver:yupResolver(schema),
  }) 
  const onCreatepost=(data:CreateFormData)=>{
console.log(data);

  }
  return (
    <form action="" onSubmit={handleSubmit(onCreatepost)}>
      <input type="text" placeholder="title..."{...register("title")} />
      <p style={{color: "red"}}>{errors.title?.message}</p>
      <textarea  placeholder="Description.." {...register("description")} />
      <p  style={{color:"red"}}>{errors.description?.message}</p>
      <input type="submit" />

    </form>
  )
}

export default Createform