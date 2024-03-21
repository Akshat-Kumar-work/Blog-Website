import { useState } from "react"
import { CreateBlogInput } from "@akshatcode/common-validations";
import { apiConnector ,URL} from "../operations/connect";
import { useNavigate } from "react-router-dom";



const Publish = () => {
    const navigate = useNavigate();
    const [blogContent, setBlogContent] = useState<CreateBlogInput>({
        content:"",
        title:""
    })

    const handlePUblish = async(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
       try{
        console.log(blogContent.content)
        if(blogContent.content===""){
          return alert(" blog is empty");
        }
        const jwt = localStorage.getItem("token");
        const jsonjwt = JSON.parse(`${jwt}`);
        const result = await apiConnector("POST",`${URL}/blog/blog`,blogContent,{Authorization:jsonjwt});
        console.log(result);
        navigate(`/blog/${result.data.id}`)
       }
       catch(e){
        console.log(e);
        alert("err while publishing blog");
       }

    }
  return (
    <div className="max-w-2xl mx-auto mt-14  h-screen">
        
        <form onSubmit={handlePUblish}>

            
	<label className="block mb-2 text-xl font-medium text-gray-900 dark:text-gray-400">Write an Article</label>

    <input  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600
     dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-2" placeholder="Your Title"
     onChange={(e)=>setBlogContent({ ...blogContent, title : e.target.value})}
     ></input>
            
    <textarea  className="block p-2.5   min-h-[60%] w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700
     dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  placeholder="Your message..."
     onChange={(e)=>setBlogContent({...blogContent,content: e.target.value})}></textarea>

     <button className=" p-3 bg-green-500 m-4 rounded-lg" type="submit">
        Publish
     </button>
 </form>

</div>
  )
}

export default Publish