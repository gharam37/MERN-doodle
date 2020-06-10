import { Router } from 'express';
import AppController from '../Controllers/AppController.js';
const routes = Router();
routes.get('/login', AppController.login);
routes.post('/thumbnail', AppController.thumbnail);
routes.post('/patch', AppController.jsonPatch);

export default routes;