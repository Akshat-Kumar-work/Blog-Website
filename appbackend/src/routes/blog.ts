
import { Hono } from 'hono'
//if we are using serverless backend so we will import prisma client from edge
import { PrismaClient } from '@prisma/client/edge';
//accelerate is also needed for connection pooling
import {withAccelerate} from '@prisma/extension-accelerate';



export const blogRouter = new Hono<{
    Bindings:{
        DATABASE_URL:string;
      }
}>();

//we have to initialize the prisma inside the route because we cannot access the env varibales globally, we can acces it by route content


blogRouter.post('/blog', (c) => {
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
    return c.text('Hello Hono!')
  });
  
  
blogRouter.post('/bulck/blog', (c) => {
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
    return c.text('Hello Hono!')
  });