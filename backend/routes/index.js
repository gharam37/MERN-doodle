import { Router } from 'express';
import AppController from '../Controllers/AppController.js';
const routes = Router();
routes.post('/login', AppController.login);
routes.post('/thumbnail', AppController.thumbnail);
routes.post('/patch', AppController.jsonPatch);

export default routes;