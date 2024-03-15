import { Hono } from 'hono'
//if we are using serverless backend so we will import prisma client from edge
import { PrismaClient } from '@prisma/client/edge';
//accelerate is also needed for connection pooling
import {withAccelerate} from '@prisma/extension-accelerate';

import { decode,sign,verify } from 'hono/jwt';

 
//we have to initialize the prisma inside the route because we cannot access the env varibales globally, we can acces it by route content



//giving type for env
const app = new Hono<{
  Bindings:{
    DATABASE_URL:string;
  }
}>();

app.post('/api/v1/user/singnup', async (c) => {

  //getting body
  //here we are using .json() because we dont have middlewares like express express.json() to parse the req to json
  const body = await c.req.json();

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

    const secret =`${body.password}${body.username}`;

    const jwt = await sign({id:user.id},secret);

  return c.text(jwt)

  }
  catch(e){
    c.status(411);
    return c.text('User already exists with this username')
  }

});

app.post('/api/v1/user/singnin',async (c) => {

  const body = await c.req.json();
  try{
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());

    const user = await prisma.user.findFirst({
      where:{
        username:body.username,
        password: body.password
      }
    })

    if(!user){
      c.status(403);
      return c.json({message:'Invalid credentials'});
    }
    const secret =`${body.password}${body.username}`;
    const jwt = await sign({
      id:user.id
    },secret);

    return c.text(jwt);
  }
  catch(e){
    console.log(e);
    return c.text('unable to sign in')
  }
});

app.post('/api/v1/blog', (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  return c.text('Hello Hono!')
});


app.post('/api/v1/blog/blog', (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  return c.text('Hello Hono!')
});








export default app
