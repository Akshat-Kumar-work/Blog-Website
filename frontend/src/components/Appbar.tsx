import { Link } from "react-router-dom"

const Appbar = () => {
  return (
    <div className=" border-b flex  justify-between w-full  px-16 py-4">

        <div>Medium</div>
       <Link to={"/publish"}><div>New</div> </Link> 
        <div>name</div>
        
    </div>
  )
}

export default Appbar