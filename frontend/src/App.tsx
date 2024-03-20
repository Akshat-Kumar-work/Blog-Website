import './App.css'
import {Routes,Route} from 'react-router-dom';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Blog from './pages/Blog';
import Blogs from './pages/Blogs';
import Appbar from './components/Appbar';
import Publish from './components/Publish';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUser  } from './store/authSlice';
import { apiConnector,URL } from './operations/connect';



function App() {

  const dispatch = useDispatch();

  const token = useSelector( (state:any)=>state.auth.token) ;
  const login = useSelector( (state:any)=>state.auth.login) ;


  const getUser = async ()=>{
    try{
      console.log("token from redux",token);
     const result = await apiConnector("GET",`${URL}/user/userDetails`,null,{Authorization:token});
     dispatch(setUser(result.data.details));
    }catch(e){
      console.log(e);
      console.log("err while fetching user details");
    }
  }
  useEffect( ()=>{

    getUser();

  },[login]);



  return (

      <>
      <Appbar/>
      <Routes>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/blog/:id' element={<Blog/>}/>
        <Route path='/blogs' element={<Blogs/>}/>
        <Route path='/publish' element={<Publish/>}/>
      </Routes>
      </>
  )
}

export default App
