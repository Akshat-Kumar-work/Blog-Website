import { useState } from "react"
import { SignupInput } from "@akshatcode/common-validations";
import { apiConnector,URL } from "../operations/connect";
import { useNavigate } from "react-router-dom";



const SignupForm = () => {
    const navigate = useNavigate();
 console.log("url",URL)
    const [signupInputs,setSignUpInputs] = useState <SignupInput> ({
        username:"",
        password:"",
        name:""
    });

    const HandleSubmit = async(e:React.FormEvent<HTMLFormElement>)=>{
      e.preventDefault();
      try{
        const response  = await apiConnector('POST',`${URL}/user/signup`,signupInputs);
        const jwt = response.data.data;
        localStorage.setItem("token",JSON.stringify(jwt));
        navigate("/blogs")
        
      }
      catch(e){
        console.log(e);
        alert("error while signing up")
      }

    }
  return (

<form onSubmit={HandleSubmit} className=" ml-11 md:ml-40 mt-10 flex flex-col ">

  <label className="block">
    <span className="block text-sm font-medium text-slate-700">Username</span>
    <input type="email" className="peer ... " onChange={(e)=>setSignUpInputs( {...signupInputs , username:e.target.value} )} placeholder="akshat@gmail.com"/>
    <p className="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
      Please provide a valid username
    </p>
  </label>


  
  <label className="block">
    <span className="block text-sm font-medium text-slate-700">Name</span>
    <input type="text" className="peer ..." onChange={(e)=>setSignUpInputs( {...signupInputs , name:e.target.value} )} placeholder="Akshat"/>
    <p className="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
      Please provide a valid email address.
    </p>
  </label>



  
  <label className="block">
    <span className="block text-sm font-medium text-slate-700">Password</span>
    <input type="password" className="peer ..." onChange={(e)=>setSignUpInputs( {...signupInputs , password:e.target.value} )} placeholder="codingiscool"/>
    <p className="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
      Please provide a valid password
    </p>
  </label>


   <button type="submit" className=" bg-black text-white w-[50%] rounded-lg p-3">
    Sign Up
   </button>

</form>
  );
}

export default SignupForm;