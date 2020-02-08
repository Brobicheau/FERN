import { Router } from 'express';
import next from 'next';

const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({
    dev,
    // the absolute directory from the package.json file that initialises this module
    // IE: the absolute path from the root of the Cloud Function
    conf: { distDir: 'dist/client' },
});

export default async () => {
    await nextApp.prepare();

    const nextRequestHandler = nextApp.getRequestHandler();
    const appRouter = Router();

    appRouter.get('*', nextRequestHandler);

    return appRouter;
};
