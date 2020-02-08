import { Router } from 'express';

export default () => {
    const apiRouter = Router();
    apiRouter.post('/verifyEmailAndPassword', (request, response) => {
        const { email, password } = request.body;
        console.log(email, password);
        response.send();
    });
    apiRouter.post('/sendToken', (request, response) => {
        const { email } = request.body;
        console.log(email);
        response.send();
    });
    apiRouter.post('/validateToken', (request, response) => {
        const { token } = request.body;
        console.log(token);
        response.send();
    });
    return apiRouter;
};
