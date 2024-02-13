import {GoogleAuthProvider, getAuth, signInWithPopup} from 'firebase/auth'
import { app } from '../firebase'
import axios from 'axios'
import { useDispatch, useSelector } from "react-redux";
import {signInSuccess} from "../redux/user/userSlice";
import { useNavigate } from 'react-router-dom';
function OAuth() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const handleGoogleClick = async()=>{
        try {
            const provider =new GoogleAuthProvider()
            const auth = getAuth(app)

            const result = await signInWithPopup(auth, provider)
            console.log(result)
            const reqBoby = JSON.stringify({name: result.user.displayName, email:result.user.email, photo:result.user.photoURL})
            const googleSign = await axios.post('api/auth/google', reqBoby,{
                headers: {
                  'Content-Type': 'application/json'
                }
              })

              if (googleSign.status === 200) {
                console.log(googleSign);
                dispatch(signInSuccess(googleSign.data))
                navigate('/')
              }
        } catch (error) {
            console.log('coild not sign in with google', error)
        }
    }
    return ( 
        <button onClick={handleGoogleClick} type="submit" className="bg-red-700 text-white p-3 rounded-lg uppercase hover:opacity-95">
            contiune with Google
        </button>
     );
}

export default OAuth;