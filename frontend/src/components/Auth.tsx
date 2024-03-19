import { Link } from "react-router-dom"
import Form from "./Form"


const Auth = ( {type}:{type:"signup"|"signin"}) => {
  return (
    <div className=" h-screen flex justify-center flex-col">


                <div className="flex justify-center flex-col items-center">
                <div className=" text-3xl font-extrabold">{type=="signup"?"Create an Account":"Login into your Account"}</div>
                <div className={`opacity-50 flex space-x-3 ${type=="signup"?"visible":"invisible"}`}>
                <p> Already have an account? </p>
                <Link to={"/signin"}>Login</Link>
                </div>
                </div>


      <Form formType={type}/>


    </div>
  )
}

export default Auth