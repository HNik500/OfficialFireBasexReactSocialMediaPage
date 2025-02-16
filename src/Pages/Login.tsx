
import { auth, provider } from '../config/firebase'
import { signInWithPopup } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

export const Login =  () => {
  const navigate = useNavigate();
    const signInWithGoogle =async ()=>{
        const result = await signInWithPopup(auth,provider);
        console.log(result);
        navigate("/")
    }
  return (
    <div><p>Sign in with dgit add .
    git commit -m " started mini" 
    git push
    google to continue</p>
    <button onClick={signInWithGoogle}>Sign in with Google</button>
    </div>
  )
}
