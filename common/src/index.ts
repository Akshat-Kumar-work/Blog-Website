import z, { string } from "zod";


//these are variables used by backend for validations
export const signupInput = z.object({
    username: z.string().email(),
    password: z.string().min(6),
    name: z.string().optional()
})


export const signinInput = z.object({
    username: z.string().email(),
    password: z.string().min(6)
})





export const createBlogInput = z.object({
    title: string(),
    content:string()
})




export const updateBlog = z.object({
    title: string(),
    content: string(),
    id: string()
})




//these are used by frontend for validations
//type inference in zod
//infering the type of signup-input into a type variable and exporting it for frontend
export type SignupInput = z.infer<typeof signupInput>
export type SigninInput = z.infer<typeof signinInput>
export type CreateBlogInput = z.infer<typeof createBlogInput>;
export type UpdateBlog = z.infer<typeof updateBlog> 

