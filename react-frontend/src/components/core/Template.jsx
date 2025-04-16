import SignupForm from "./auth/SignupForm"
import LoginForm from "./auth/LoginForm"


const Template = ({ image, formType }) => {
   return (
       <div className='w-screen h-screen border flex justify-center items-center'>
           <div className={`rounded-3xl mt-20 max-w-7xl max-h-7xl h-10/12 w-8/12 border-[#0196B8] border bg-[#e7ecfc] relative ${formType === "login" ? "overflow-hidden" : ""}`}>
               {formType === "signup"
                   ? <img src={image} alt="" className='absolute bottom-0 opacity-30 h-[800px] w-[1000px] top-[-100px] left-[40px]' />
                   : <img src={image} alt="" className='absolute -bottom-60 -left-60' />
               }
               {formType === "signup" ? <SignupForm /> : <LoginForm />}
           </div>
       </div>
   )
}


export default Template
