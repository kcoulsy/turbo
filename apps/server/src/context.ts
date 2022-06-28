

import { PrismaClient } from '@prisma/client';
import * as trpc from '@trpc/server';
import { UserService } from './services/user.service';

export const createContext = () => {
  const prisma = new PrismaClient();

  return {
    userService: (new UserService(prisma))
  };
};

export type Context = trpc.inferAsyncReturnType<typeof createContext>;