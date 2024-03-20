
interface BlogCardProps{
    authorName:string,
    title:string,
    content:string,
    publishedDate:string
}

const BlogCard = ({authorName,title,content,publishedDate}:BlogCardProps) => {
  return (
    <div className="flex flex-col  p-10 w-full   min-w-full ">

            <div className="font-extralight flex"> <div className=" font-semibold">{authorName}</div> . {publishedDate} </div>
            <div className=" font-bold pt-3">{title}</div>
            <div>{content.substring(0,100)+"..."}</div>
            <div className=" pt-3 opacity-50">
              {`${Math.ceil(content.length/100)} minutes read`}
            </div>
            <div className="bg-slate-200 h-1 w-full  mt-2"></div>
    </div>
  )
}

export default BlogCard