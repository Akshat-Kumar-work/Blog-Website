import Quote from "../components/Quote"
import Auth from "../components/Auth"

const Signup = () => {
  return (
    <div className="grid  md:grid-cols-2  ">
      
        <div>
          <Auth type={"signup"}/>
        </div>

        <div className=" invisible md:visible">
          <Quote/>
        </div>
    </div>
  )
}

export default Signup