import { Router } from 'express';
import AppController from '../Controllers/AppController.js';
import  {upload}  from '../Middlewares/uploadMiddleware.js';

const routes = Router();

routes.post('/login', AppController.login);
routes.post('/thumbnail',upload.single('image'), AppController.thumbnail);
routes.post('/patch', AppController.jsonPatch);

export default routes;