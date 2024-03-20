
interface Blog{
    "content":string,
    "title":string,
    "id":Number,
    "author":{
        "name":string
    }
}

const  FullBlog = ({blog}:{blog:Blog|undefined}) => {
  return (
    <div className=" flex justify-center">


            <div className="grid grid-cols-12 px-10 w-full pt-200 max-w-screen-xl pt-12">

                <div className="col-span-8">
                    <div className="text-5xl font-extrabold">
                        {blog?.title}
                    </div>
                    <div className="text-slate-500 pt-2">
                        Post on 2nd Decemeber 2023
                    </div>
                    <div className="pt-4">
                        {blog?.content}
                    </div>


                   
                    </div>
                    <div className="col-span-4 flex flex-col">
                        Author 
                      <div className="flex   flex-col">
                      <div>{blog?.author.name||"Anonymous"}</div>
                        <div className="pt-2 text-slate-500">
                        Random catch phrase about author to get user attention
                    </div>
                      </div>
                </div>

            </div>
        
     

       

    </div>
  )
}

export default FullBlog