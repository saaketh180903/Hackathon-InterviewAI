import SignupForm from "./auth/SignupForm"
import LoginForm from "./auth/LoginForm"

const Template = ({ image, formType }) => {
    return (
        <div className='w-screen h-screen border flex justify-center items-center'>
            <div className='rounded-3xl max-w-7xl max-h-7xl h-9/12 w-8/12 border-[#0196B8] border bg-[#e7ecfc] relative overflow-hidden'>
                {formType === "signup" 
                    ? <img src={image} alt="" className='absolute bottom-0 left-0' />
                    : <img src={image} alt="" className='absolute -bottom-60 -left-60' />
                }

                {formType === "signup" ? <SignupForm /> : <LoginForm />}
            </div>
        </div>
    )
}

export default Template
