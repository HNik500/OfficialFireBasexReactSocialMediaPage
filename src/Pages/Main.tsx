//  import React from 'react'
import {getDocs, collection} from 'firebase/firestore'
import { db } from '../config/firebase';
import { useState } from 'react';
export const Main = () => {
  const [ postsList,SetpostsList] = useState(null)
  const postsRef = collection(db,"posts");
  const getPosts= async()=>{
const data = await getDocs(postsRef);
console.log(data.docs.map((doc)=>({...doc.data(), id:doc.id})));
  }
  getPosts();
  return (
    <div>Main Page</div>
  )
}
