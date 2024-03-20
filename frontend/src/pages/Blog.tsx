import { useParams } from "react-router-dom";
import { useBlog } from "../hooks"
import FullBlog from "../components/FullBlog";


const Blog = () => {
  const {id} = useParams();
  console.log("id inside blog",id)
  const {blog,loading} = useBlog({id: id||""});


  if(loading){
    return <div>loading...</div>
  }

  return (
    <div>
      <FullBlog blog={blog}  />
    </div>
  )
}

export default Blog