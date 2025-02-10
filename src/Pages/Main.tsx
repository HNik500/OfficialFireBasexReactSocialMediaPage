//  import React from 'react'
import {getDocs, collection} from 'firebase/firestore'
import { db } from '../config/firebase';
import { useState } from 'react';
export const Main = () => {
  const [ postsList,SetpostsList] = useState(null)
  const postsRef = collection(db,"posts");
  return (
    <div>Main Page</div>
  )
}
