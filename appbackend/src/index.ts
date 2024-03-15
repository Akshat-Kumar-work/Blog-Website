import { Hono } from "hono";
import { userRouter } from "./routes/user";
import { blogRouter } from "./routes/blog";
 

//giving type for env
const app = new Hono<{
  Bindings:{
    DATABASE_URL:string;
  }
}>();

app.route("/api/v1/user",userRouter);
app.route("/api/v1/blog",blogRouter);

app.get('/',(c)=>{
  return c.text("alll ok")
})


export default app
