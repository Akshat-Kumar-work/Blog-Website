import { SigninInput } from "@akshatcode/common-validations";
import { useState } from "react";
import { apiConnector,URL } from "../operations/connect";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setToken ,setLogin } from "../store/authSlice";


const SigninForm = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
    const [signInInputs, setSignInInputs] = useState <SigninInput> ({
        username:"",
        password:""
    })

    const HandleSubmit = async(e:React.FormEvent<HTMLFormElement>)=>{
      e.preventDefault();
      try{
       console.log("inside handlesubmit ")
        const response  = await apiConnector('POST',`${URL}/user/singin`,signInInputs);
        const jwt = response.data.data;



        localStorage.setItem("token",JSON.stringify(jwt));

        dispatch(setToken(jwt));
        dispatch(setLogin(true));

        navigate("/blogs")
        console.log(response);
      }
      catch(e){
        console.log(e);
        alert("error while signing in")
      }

    }

  return (
    <form onSubmit={HandleSubmit} className=" ml-11 md:ml-40 mt-10 flex flex-col ">

  <label className="block">
    <span className="block text-sm font-medium text-slate-700">Email</span>
    <input type="email" className="peer ..." onChange={(e)=>setSignInInputs( {...signInInputs , username:e.target.value} )} placeholder="akshat@gmail.com"/>
    <p className="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
      Please provide a valid username
    </p>
  </label>


  
  <label className="block">
    <span className="block text-sm font-medium text-slate-700">Password</span>
    <input type="password" className="peer ..." onChange={(e)=>setSignInInputs( {...signInInputs , password:e.target.value} )} placeholder="codingiscool"/>
    <p className="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
      Please provide a valid password.
    </p>
  </label>




   <button type="submit" className=" bg-black text-white w-[50%] rounded-lg p-3">
    Sign In
   </button>

</form>
  )
}

export default SigninForm