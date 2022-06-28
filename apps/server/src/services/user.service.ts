import { PrismaClient } from "@prisma/client";
import { userSchema } from "@src/schemes/user.schema";
import { z } from "zod";


export class UserService {
  private prismaClient: PrismaClient;

  constructor(prismaClient: PrismaClient) {
    this.prismaClient = prismaClient;
  }

  public async getMany() {
    const users = await this.prismaClient.user.findMany()
    return { users };
  }

  public async create(data: z.infer<typeof userSchema>) {
    const user  = await this.prismaClient.user.create({ data });

    return user;
  }
}