import { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
function Signin() {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
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
        setLoading(true)
        const result = await axios.post('api/auth/signin', formData, {
            headers: {
              'Content-Type': 'application/json'
            }
          });
          if(result.status === 201){
            console.log(result);
          }
          if(result.data.success === false){
              setError(result.data.message)
              setLoading(false)
              return
            } 
            setError(null)
            navigate('/')
    } catch (error) {
        setError(error.message)
    }finally{
        setLoading(false)

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
