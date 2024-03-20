import { useEffect, useState } from "react";
import { apiConnector,URL } from "../operations/connect";


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

                const response = await apiConnector("GET",`${URL}/blog/bulk`,null,
                {Authorization:`${jsonjwt}`});
                const data = response.data.data;
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

export const useBlog = ({id}:{id:string})=>{
    interface Blog{
        "content":string,
        "title":string,
        "id":Number,
        "author":{
            "name":string
        }
    }
    const[loading,setLoading] = useState(true);
    const [blog,setblog] = useState<Blog>();

    const getBlogs = async()=>{
            try{
                const jwt = localStorage.getItem("token");
                const jsonjwt = JSON.parse(`${jwt}`);
                console.log(id)
                const response = await apiConnector("GET",`${URL}/blog/getBlog/${id}`,null,
                {Authorization:`${jsonjwt}`});
                console.log(response)
                const data = response.data.data;
                setblog(data);
                setLoading(false);
            }   
            catch(e){
                console.log(e);
                alert("error while fetching the single blog");
            }     
    }
    useEffect(()=>{
       getBlogs();
    },[id]);

    return{
        loading,blog
    }
}