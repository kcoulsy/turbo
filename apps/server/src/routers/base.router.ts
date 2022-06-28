import { createRouter } from "@src/createRouter";
import { postRouter } from "./post.router";
import { userRouter } from "./user.router";

export const baseRouter = createRouter()
  .merge('posts.', postRouter)
  .merge('users.', userRouter)
