import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function SignUp() {

  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const navigate = useNavigate()
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false)
    try {
      setLoading(true)
      const res = await fetch("/backend/auth/signin", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      }, body: JSON.stringify(formData)
    });
    const data = await res.json()
    setLoading(false)
    if (data.success === false) {
      setError(true);
      return;
    }
    navigate('/')
    } catch (error) {
      setLoading(false)
      setError(true)
    }
  };

  return (
    <div className="p-5 max-w-lg mx-auto">
      <h1 className="text-4xl text-center font-semibold my-8">
        Sign In
      </h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-5 ">
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
          {loading ? 'Loading...' : "Sign In"}
        </button>
      </form>
      <div className="flex gap-3 mt-4">
        <p>Need an account?</p>
        <Link to="/signup">
          <span className="text-blue-500">Sign up</span>
        </Link>
      </div>
      <p className='text-red-800 mt-4'>{error && "Something Went wrong"}</p>
    </div>
  );
}
