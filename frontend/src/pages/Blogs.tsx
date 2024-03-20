import BlogCard from "../components/BlogCard";
import Appbar from "../components/Appbar";
import { useBlogs } from "../hooks";

const Blogs  = ()=>{
    const {loading,blogs} = useBlogs();
    if(loading){
        return <div>loading........</div>
    }
    return (
        <div className=" flex  flex-col  items-center  ">
            <Appbar/>
            <div className=" max-w-3xl flex flex-col justify-center">
                {
                    blogs.map( (blog)=>{
                        return(
                            <BlogCard key={String(blog.id)} id={blog.id} title={blog.title} authorName={blog.author.name || "No-Name"} content={blog.content} publishedDate="2/3/2334"/>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Blogs;