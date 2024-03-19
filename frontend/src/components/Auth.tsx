import { Link } from "react-router-dom"


const Auth = ( {type}:{type:"signup"|"signin"}) => {
  return (
    <div className=" h-screen flex justify-center flex-col">

                <div className="flex justify-center flex-col items-center">
                <div className=" text-3xl font-extrabold">Create an Account</div>
                <div className=" opacity-50 flex space-x-3">
                <p> Already have an account? </p>
                <Link to={"/signin"}>Login</Link>
                </div>
                </div>


    </div>
  )
}

export default Auth