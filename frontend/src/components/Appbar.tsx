import { Link, useNavigate } from "react-router-dom"
import { useSelector , useDispatch} from "react-redux";
import { setUser,setToken,setLogin } from "../store/authSlice";


const Appbar = () => {
  const dispatch = useDispatch();
  const login = useSelector( (state:any)=>state.auth.login) ;
  const user = useSelector( (state:any)=>state.auth.user) ;

  const navigate = useNavigate();

  const handleLogout=()=>{
    dispatch(setUser(null));
    dispatch(setToken(null));
    dispatch(setLogin(false));
    localStorage.clear();
    navigate("/");
  }

  return (
    <div className=" border-b flex flex-row  justify-between w-full px-5 py-5  md:px-16 md:py-4 flex-wrap">

        <Link to={"/"}><div className=" p-3">Blog Verse</div></Link>

      { login &&  <Link to={"/publish"}><div className=" p-3">New</div> </Link> }
        {    login &&    <Link to={"/blogs"} ><div className=" p-3">Blogs</div></Link>}

         {      !login &&  <Link to={"/signin"}>
          <div className=" p-3">Login</div>
          </Link>}

       {!login&& <Link to={"/signup"}><div className=" p-3">Signup</div></Link>}

          {
            login && <button onClick={handleLogout} className=" p-3">Logout</button>
          }

        {user && <div className=" p-3">{user?.name}</div>}
        
    </div>
  )
}

export default Appbar