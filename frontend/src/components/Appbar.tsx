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
    <div className=" border-b flex  justify-between w-full  px-16 py-4">

        <Link to={"/"}><div>BlogSite</div></Link>

      { login &&  <Link to={"/publish"}><div>New</div> </Link> }
{    login &&    <Link to={"/blogs"} ><div>Blogs</div></Link>}

         {      !login &&  <Link to={"/signin"}>
          <div>Login</div>
          </Link>}

       {!login&& <Link to={"/signup"}><div>Signup</div></Link>}

          {
            login && <button onClick={handleLogout}>Logout</button>
          }

        {user && <div>{user?.name}</div>}
        
    </div>
  )
}

export default Appbar