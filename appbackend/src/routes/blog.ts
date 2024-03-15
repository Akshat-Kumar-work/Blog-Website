
import { Hono } from 'hono'
//if we are using serverless backend so we will import prisma client from edge
import { PrismaClient } from '@prisma/client/edge';
//accelerate is also needed for connection pooling
import {withAccelerate} from '@prisma/extension-accelerate';

import { decode,verify } from 'hono/jwt';

export const blogRouter = new Hono<{
    Bindings:{
        DATABASE_URL:string;
        JWT_SECRET:string;
      },
      Variables:{
        userId:string;
      }
}>();

//we have to initialize the prisma inside the route because we cannot access the env varibales globally, we can acces it by route content

//middleware
blogRouter.use("/*",async(c,next)=>{
    const authHeader =  c.req.header("Authorization") || "";
    const result = await verify(authHeader,c.env.JWT_SECRET);
    if(result){
        c.set("userId",result.id);
    await    next();
    }else{
        c.status(403);
        return c.json({
            mess:"you are not logged in "
        })
    }

})

//creating blog
blogRouter.post('/blog',async (c) => {
    const body = await c.req.json();
    const userId = c.get("userId");

    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
      }).$extends(withAccelerate());
    try{
    const result = await prisma.blog.create({
        data:{
            authorId: Number(userId),
            content: body.content,
            title: body.title
        }
    })

    return c.json({
        id:result.id
    })
    }catch(e){
        console.log(e);
        return c.json({
            message:"unable to create blog"
        })
    }
  });
  
  
blogRouter.put('/update/blog', async (c) => {
    const body = await c.req.json();
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
    try{
        const result = await prisma.blog.update({
            where:{
                id: body.id
            },
            data:{
                title:body.title,
                content:body.content
            }
        })

        return c.json({
            updatedData : result
        })
    }
    catch(e){
        console.log(e)
        return c.json({
            mess: "unable to udpate blog"
        })
    }
  });


blogRouter.get('/getBlog',async(c)=>{

    const body = await c.req.json();
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
      }).$extends(withAccelerate());

    try{
        const result = await prisma.blog.findFirst({
            where:{
                id:body.id
            }
        })

        return c.json({
            data:result
        })
    }
    catch(e){   
        console.log(e);
        return c.json({
            mess: "unable to get the blod for given id"
        })

    }

    })


blogRouter.get('/bulk/blog',async(c)=>{
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
      }).$extends(withAccelerate());

      try{

        const result = await prisma.blog.findMany();

        c.status(200);
        return c.json({
            data:result
        })

      }catch(e){
        console.log(e);
        return c.json({
            mess:'unable to fetch all blogs'
        })
      }
})