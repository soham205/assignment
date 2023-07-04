import express from 'express';

import usersController from '../controllers/users.controller';
import addRoute, { REQ_METHOD_TYPE_E } from '../../../helpers/routeHandler';

const usersRouter = express.Router();

addRoute(usersRouter, REQ_METHOD_TYPE_E.POST, '/login', usersController.login);
addRoute(usersRouter, REQ_METHOD_TYPE_E.POST, '/register', usersController.register);
addRoute(usersRouter, REQ_METHOD_TYPE_E.PUT, '/:id', usersController.update);




export default usersRouter;
