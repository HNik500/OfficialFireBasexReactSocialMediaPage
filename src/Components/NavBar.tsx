
import { Link } from 'react-router-dom'
import { auth } from '../config/firebase' 
import { useAuthState } from 'react-firebase-hooks/auth'
import { signOut } from 'firebase/auth'

export const NavBar = () => {
  const [user]=useAuthState(auth);
const SignUserOut= async()=>{
await signOut(auth);
}
  return (
    <div className='navbar'>
      <div className='links'>
        <Link to={"/"} className='pr-14'>Home</Link>
        {!user? (<Link to={"/login"}>Login.. </Link>):<Link to={"/createpost"} className='pr-14'>Create Post</Link>}
        
        </div>
        <div className='user'>
          {user &&(
            <>
          <p>{user?.displayName}</p>
          <img src={user?.photoURL ||""} alt="" width="100" height="100" />
          <button onClick={SignUserOut}>Log out</button>
          </>
)}
        </div>
    </div>
  )
}
