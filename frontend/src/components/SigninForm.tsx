import { SigninInput } from "@akshatcode/common-validations";
import { useState } from "react";


const SigninForm = () => {
    const [signInInputs, setSignInInputs] = useState <SigninInput> ({
        username:"",
        password:""
    })

    const HandleSubmit=()=>{

    }

  return (
    <form onSubmit={HandleSubmit} className=" ml-40 mt-10 flex flex-col ">

  <label className="block">
    <span className="block text-sm font-medium text-slate-700">Username</span>
    <input type="email" className="peer ..." onChange={(e)=>setSignInInputs( {...signInInputs , username:e.target.value} )} placeholder="akshat@gmail.com"/>
    <p className="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
      Please provide a valid username
    </p>
  </label>


  
  <label className="block">
    <span className="block text-sm font-medium text-slate-700">Name</span>
    <input type="text" className="peer ..." onChange={(e)=>setSignInInputs( {...signInInputs , password:e.target.value} )} placeholder="codingiscool"/>
    <p className="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
      Please provide a valid email address.
    </p>
  </label>




   <button type="submit" className=" bg-black text-white w-[50%] rounded-lg p-3">
    Sign In
   </button>

</form>
  )
}

export default SigninForm