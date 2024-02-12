import { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signInStart,signInSuccess,signInFailure } from "../redux/user/userSlice";
function Signin() {
  const [formData, setFormData] = useState({});
const {loading, error} = useSelector((state)=> state.user)
  const dispatch = useDispatch()
  const handleChange = (event) => {
    setFormData((prev) => ({
      ...prev,
      [event.target.id]: event.target.value
    }));
  };
const navigate= useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault(); 
    try {
        dispatch(signInStart)
        const result = await axios.post('api/auth/signin', formData, {
            headers: {
              'Content-Type': 'application/json'
            }
          });
          if(result.status === 201){
            console.log(result);
          }
          if(result.data.success === false){
            dispatch(signInFailure(result.data.message))
            //   setError(result.data.message)
            //   setLoading(false)
              return
            } 
            dispatch(signInSuccess(result.data))
            navigate('/')
    } catch (error) {
        console.log(error.response.data.message)
        dispatch(signInFailure(error.response.data.message))
    }
  };

  console.log(formData);

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">
        Sign in
      </h1>
      <form className="flex flex-col gap-4 " onSubmit={handleSubmit}>
        <input className="border p-3 rounded-lg" onChange={handleChange} id="email" type="email" placeholder="email"></input>
        {/* <input className="border p-3 rounded-lg" onChange={handleChange} id="username" type="text" placeholder="username"></input> */}
        <input className="border p-3 rounded-lg" onChange={handleChange} id="password" type="password" placeholder="password"></input>
        <button disabled={loading} className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80">{loading?"Loading":"Signup"}</button>
      </form>
      <div className="flex gap-2 mt-5">
        <p>Dont have an account?</p>
        <Link to='/signup'>
          <span className="text-blue-700">
            sign in
          </span>
        </Link>
      </div>
      {error && <p className="text-red-500 mt-5">{error}</p>}
    </div>
  );
}

export default Signin;
