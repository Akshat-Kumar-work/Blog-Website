
import { Hono } from 'hono'
//if we are using serverless backend so we will import prisma client from edge
import { PrismaClient } from '@prisma/client/edge';
//accelerate is also needed for connection pooling
import {withAccelerate} from '@prisma/extension-accelerate';

import { sign } from 'hono/jwt';

import {signupInput , signinInput } from "@akshatcode/common-validations";



export const userRouter = new Hono<{
    Bindings:{
        DATABASE_URL:string;
        JWT_SECRET:string;
      }
}>();

//we have to initialize the prisma inside the route because we cannot access the env varibales globally, we can acces it by route content


userRouter.post('/signup', async (c) => {

    //getting body
    //here we are using .json() because we dont have middlewares like express express.json() to parse the req to json
    const body = await c.req.json();

    const {success} = signupInput.safeParse(body);
    if(!success){
      return c.json({
        mess:"Input not correct"
      })
    }
  
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
  
    
  
    try{
    const user =   await prisma.user.create({
        data:{
          username: body.username,
          password: body.password,
          name: body.name
        }
      });
  
    
  
    const jwt = await sign({id:user.id},c.env.JWT_SECRET);
    
      c.status(200);
    return c.json({
      data:jwt
    })
  
    }
    catch(e){
      c.status(411);
      return c.text('User already exists with this username')
    }
  
  });
  
userRouter.post('/singin',async (c) => {
  
    const body = await c.req.json();
    try{
      const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
      }).$extends(withAccelerate());
      console.log(body)
      const {success} = signinInput.safeParse(body);
      if(!success){
        c.status(411)
        return c.json({
          mess:"input not correct"
        })
      }
  
      const user = await prisma.user.findUnique({
        where:{
          username:body.username,
          password: body.password
        }
      })
  
      if(!user){
        c.status(403);
        return c.json({message:'Invalid credentials'});
      }
     
      const jwt = await sign({
        id:user.id
      },c.env.JWT_SECRET);

      console.log("jwt",jwt)
      
      c.status(200)
      return c.json(
       { data:jwt}
      );
    }
    catch(e){
      console.log(e);
      return c.text('unable to sign in')
    }
  });