import SigninForm from "./SigninForm";
import SignupForm from "./SignupForm";

const Form = ( {formType} :{formType:"signin"|"signup"})=>{
    return (
       <div>
        {formType=="signup" ?  <SignupForm/>:<SigninForm/>}
       </div>
        
    )
}

export default Form;