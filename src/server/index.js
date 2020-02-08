import * as admin from 'firebase-admin';
import * as functions from 'firebase-functions';
import createAppRouter from './routers/app-router';
import createApiRouter from './routers/api-router';
import bodyParser from 'body-parser';
import express from 'express';
admin.initializeApp();

const app = express();
const createRootRouter = async () => {
    const rootRouter = express.Router();
    rootRouter.use('/api', createApiRouter());
    rootRouter.use('/', await createAppRouter());
    return rootRouter;
};
const buildExpressApp = async () => {
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    app.use('/', await createRootRouter());
};
buildExpressApp();
const server = functions.https.onRequest(app);

export { server };
