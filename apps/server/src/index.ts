import express from 'express';
import * as trpcExpress from '@trpc/server/adapters/express';
import { createContext } from './context';
import { baseRouter } from './routers/base.router';

import { expressHandler } from 'trpc-playground/handlers/express'

const runApp = async () => {

  const app = express();
  const PORT = 8080;

  const trpcApiEndpoint = '/api/trpc'
  const playgroundEndpoint = '/api/trpc-playground'

  app.use(
    trpcApiEndpoint,
    trpcExpress.createExpressMiddleware({
      router: baseRouter,
      createContext,
    }),
  );

  app.use(
    playgroundEndpoint,
    await expressHandler({
      trpcApiEndpoint,
      playgroundEndpoint,
      router: baseRouter,
      // uncomment this if you're using superjson
      // request: {
      //   superjson: true,
      // },
    }),
  )

  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  }); 
}

runApp()


export type AppRouter = typeof baseRouter;