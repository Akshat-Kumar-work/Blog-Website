import { useEffect, useState } from "react";
import { apiConnector,URL } from "../operations/connect";
import { json } from "stream/consumers";

export const useBlogs = ()=>{
    interface Blog{
        "content":string,
        "title":string,
        "id":Number,
        "author":{
            "name":string
        }
    }
    const[loading,setLoading] = useState(true);
    const [blogs,setblogs] = useState<Blog[]>([]);

    const getBlogs = async()=>{
            try{
                const jwt = localStorage.getItem("token");
                const jsonjwt = JSON.parse(`${jwt}`);
                console.log(jsonjwt)
                const response = await apiConnector("GET",`${URL}/blog/bulk`,null,
                {Authorization:`${jsonjwt}`});
                const data = response.data;
                setblogs(data);
                setLoading(false);
            }   
            catch(e){
                console.log(e);
                alert("error while fetching the bulk blogs");
            }     
    }
    useEffect(()=>{
       getBlogs();
    },[]);

    return{
        loading,blogs
    }
}