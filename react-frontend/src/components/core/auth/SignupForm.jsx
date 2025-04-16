import React, { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa6";

// import { signup } from '../redux/actions/authActions';

const SignupForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    mobile: ""
  });

  const [showPassword, setShowPassword] = useState(false);

  const { name, email, password, confirmPassword, mobile } = formData;

  const handleOnChange = (e) => {
    setFormData(prevData => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    const payload = {
      name,
      email,
      password,
      mobile,
    };

    console.log("Signup Data:", payload);
    // dispatch(signup(payload, navigate));
    // navigate('/dashboard');
  };

  return (
    <div className="flex justify-center h-screen">
      <div className="w-full max-w-md p-4 overflow-auto h-9/12">
        <form
          onSubmit={handleOnSubmit}
          className="flex flex-col items-center justify-center rounded-lg"
        >
          {/* Name */}
          <label className="w-full mb-4 relative">
            <p className="mb-1 text-[1.2rem] text-[#1A3652] font-bold">
              Name <sup className="text-pink-200">*</sup>
            </p>
            <input
              required
              type="text"
              name="name"
              value={name}
              onChange={handleOnChange}
              placeholder="Enter your name"
              className="form-style w-full border p-2 rounded-md"
            />
          </label>

          {/* Email */}
          <label className="w-full mb-4 relative">
            <p className="mb-1 text-[1.2rem] text-[#1A3652] font-bold">
              Email <sup className="text-pink-200">*</sup>
            </p>
            <input
              required
              type="email"
              name="email"
              value={email}
              onChange={handleOnChange}
              placeholder="Enter email address"
              className="form-style w-full border p-2 rounded-md"
            />
          </label>

          {/* Mobile Number */}
          <label className="w-full mb-4 relative">
            <p className="mb-1 text-[1.2rem] text-[#1A3652] font-bold">
              Mobile Number <sup className="text-pink-200">*</sup>
            </p>
            <input
              required
              type="tel"
              name="mobile"
              value={mobile}
              onChange={handleOnChange}
              placeholder="Enter mobile number"
              pattern="[0-9]{10}"
              title="Enter a valid 10-digit mobile number"
              className="form-style w-full border p-2 rounded-md"
            />
          </label>

          {/* Password */}
          <label className="w-full mb-4 relative">
            <p className="mb-1 text-[1.2rem] text-[#1A3652] font-bold">
              Password <sup className="text-pink-200">*</sup>
            </p>
            <input
              required
              type={showPassword ? "text" : "password"}
              name="password"
              value={password}
              onChange={handleOnChange}
              placeholder="Enter Password"
              className="form-style w-full border p-2 rounded-md"
            />
            <span
              onClick={() => setShowPassword(prev => !prev)}
              className="absolute right-3 top-[40px] z-[10] cursor-pointer"
            >
              {showPassword ? (
                <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
              ) : (
                <AiOutlineEye fontSize={24} fill="#AFB2BF" />
              )}
            </span>
          </label>

          {/* Confirm Password */}
          <label className="w-full mb-6 relative">
            <p className="mb-1 text-[1.2rem] text-[#1A3652] font-bold">
              Confirm Password <sup className="text-pink-200">*</sup>
            </p>
            <input
              required
              type={showPassword ? "text" : "password"}
              name="confirmPassword"
              value={confirmPassword}
              onChange={handleOnChange}
              placeholder="Re-enter Password"
              className="form-style w-full border p-2 rounded-md"
            />
            <span
              onClick={() => setShowPassword(prev => !prev)}
              className="absolute right-3 top-[40px] z-[10] cursor-pointer"
            >
              {showPassword ? (
                <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
              ) : (
                <AiOutlineEye fontSize={24} fill="#AFB2BF" />
              )}
            </span>
          </label>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full mt-2 rounded-[8px] bg-gradient-to-r from-[#2C4068] to-[#0196B8] py-2 font-medium text-white cursor-pointer relative"
          >
            Sign Up
          </button>

          <p className="mt-4 text-sm font-medium text-[#1A3652] relative">Or access quickly with</p>

          {/* Social Buttons */}
          <div className="flex gap-4 mt-4">
            <button type="button" className="flex items-center gap-2 bg-white px-8 py-2 rounded-md shadow-md hover:scale-105 transition-transform relative">
              <FcGoogle size={24} /> Google
            </button>
            <button type="button" className="flex items-center gap-2 bg-white px-8 py-2 rounded-md shadow-md hover:scale-105 transition-transform relative">
              <FaGithub size={24} /> GitHub
            </button>
          </div>

          {/* Navigation Link */}
          <div className="flex gap-2 mt-4 items-center">
            <p className="text-sm font-medium text-[#1A3652] relative">Already have an account?</p>
            <Link to="/login" className="text-sm font-bold text-black underline">
              Sign In
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
