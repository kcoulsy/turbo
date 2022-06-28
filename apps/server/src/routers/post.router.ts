import { Prisma } from "@prisma/client";
import { createRouter } from "@src/createRouter";

export const postRouter = createRouter()
  // .query('getPosts', {
    // input: (val: unknown) => {
    //   if (typeof val === 'string') return val;
    //   throw new Error(`Invalid input: ${typeof val}`);
    // },
    // async resolve(req) {
    //   const posts = await req.ctx.prisma.post.findMany()
    //   return { posts };
    // },
  // })
  // .mutation('createPost', {
  //   input: 
  // }); 
