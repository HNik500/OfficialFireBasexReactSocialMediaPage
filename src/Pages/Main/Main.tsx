//  import React from 'react'
import {getDocs, collection} from 'firebase/firestore'
import { db } from "../../config/firebase";
import { useEffect, useState } from 'react';
import { Post } from './Post';
export interface Post{
  id:string,
  userId:string;
  title:string;
  username:string;
  description:string;
}
export const Main = () => {
  const [ postsList,SetpostsList] = useState<Post[]| null>(null)
  const postsRef = collection(db,"posts");
  const getPosts= async()=>{
const data = await getDocs(postsRef);
SetpostsList(data.docs.map((doc)=>({...doc.data(), id:doc.id})) as Post[]
);
  } 
  useEffect(()=>{
getPosts();
  },[])
  return (
    <div>{postsList?.map((post)=>(
    <Post key ={post.id} post={post}/>
  ))}
  </div>
  )
}
