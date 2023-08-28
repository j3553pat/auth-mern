import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function SignUp() {

  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false)
    try {
      setLoading(true)
      const res = await fetch("/backend/auth/signup", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      }, body: JSON.stringify(formData)
    });
    const data = await res.json()
    console.log(data)
    setLoading(false)
    if (data.success === false) {
      setError(true);
      return;
    }
    } catch (error) {
      setLoading(false)
      setError(true)
    }
  };

  return (
    <div className="p-5 max-w-lg mx-auto">
      <h1 className="text-4xl text-center font-semibold my-8">
        Create An Account
      </h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-5 ">
        <input
          type="text"
          placeholder="username"
          id="username"
          className="bg-slate-200 p-4 rounded-lg"
          onChange={handleChange}
        />
        <input
          type="email"
          placeholder="email"
          id="email"
          className="bg-slate-200 p-4 rounded-lg"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="password"
          id="password"
          className="bg-slate-200 p-4 rounded-lg"
          onChange={handleChange}
        />
        <button disabled={loading} className="bg-slate-800 text-white p-3 rounded-lg uppercase hover:opacity-80 disabled:opacity-70">
          {loading ? 'Loading...' : "Sign Up"}
        </button>
      </form>
      <div className="flex gap-3 mt-4">
        <p> Have an account?</p>
        <Link to="/signin">
          <span className="text-blue-500">Sign In</span>
        </Link>
      </div>
      <p className='text-red-800 mt-4'>{error && "Something Went wrong"}</p>
    </div>
  );
}
