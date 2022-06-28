import { createRouter } from "@src/createRouter";
import { userSchema } from "@src/schemes/user.schema";

export const userRouter = createRouter()
  .query('getUsers', {
    async resolve(req) {
      const users = await req.ctx.userService.getMany();
      return { users };
    },
  })
  .mutation('createUser', {
    input: userSchema,
    async resolve(req) {
      const user  = await req.ctx.userService.create(req.input);

      return { user }
    }
  })