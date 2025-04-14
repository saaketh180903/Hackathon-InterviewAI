import { useState } from "react"
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import { useDispatch } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa6";

const LoginForm = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    })

    const [showPassword, setShowPassword] = useState(false)

    const { email, password } = formData

    const handleOnChange = (e) => {
        setFormData((prevData) => ({
            ...prevData,
            [e.target.name]: e.target.value,
        }))
    }

    const handleOnSubmit = (e) => {
        e.preventDefault()
        // dispatch(login(email, password, navigate))
        console.log(email, password)
    }

    return (
        <div className="flex items-center justify-center h-full">
            <form
                onSubmit={handleOnSubmit}
                className="flex flex-col items-center justify-center p-8 rounded-lg"
            >
                <label className="w-full flex items-center justify-center">
                    <div className="">
                        <p className="mb-1 text-[1.2rem] text-[#1A3652] font-bold">
                            Email <sup className="text-pink-200">*</sup>
                        </p>
                        <input
                            required
                            type="text"
                            name="email"
                            value={email}
                            onChange={handleOnChange}
                            placeholder="Enter email address"
                            className="form-style w-sm"
                        />
                    </div>

                </label>
                <label className="w-full flex items-center justify-center">
                    <div className="relative">
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
                            className="form-style w-sm"
                        />
                        <span
                            onClick={() => setShowPassword((prev) => !prev)}
                            className="absolute right-3 top-[40px] z-[10] cursor-pointer"
                        >
                            {showPassword ? (
                                <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
                            ) : (
                                <AiOutlineEye fontSize={24} fill="#AFB2BF" />
                            )}
                        </span>
                        <Link to="/forgot-password">
                            <p className="mt-3 ml-auto max-w-max text-sm font-bold text-black">
                                Forgot Password
                            </p>
                        </Link>
                    </div>
                </label>
                <button
                    type="submit"
                    className="mt-8 rounded-[8px] bg-gradient-to-r from-[#2C4068] to-[#0196B8] py-[8px] px-[100px] font-medium text-white cursor-pointer"
                >
                    Sign In
                </button>

                <p className="mt-3 max-w-max text-sm font-medium text-[#1A3652]">Or access quickly with</p>

                {/* GitHub & Google auth buttons */}
                <div className="flex gap-4 mt-4">
                    <button className="flex items-center gap-2 bg-white px-8 py-2 rounded-md shadow-md hover:scale-105 transition-transform">
                        <FcGoogle size={34} />
                    </button>
                    <button className="flex items-center gap-2 bg-white px-8 py-2 rounded-md shadow-md hover:scale-105 transition-transform">
                        <FaGithub size={34} />
                    </button>
                </div>


                <div className="flex gap-2 mt-4 items-center">
                    <p className="text-sm font-medium text-[#1A3652]">Don't have an account yet?</p>
                    <Link to="/signup" className="text-sm font-bold text-black underline">
                        Register now
                    </Link>
                </div>

            </form>
        </div>
    )
}

export default LoginForm
