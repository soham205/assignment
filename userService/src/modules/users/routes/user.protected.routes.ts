import express from 'express';

import usersController from '../controllers/users.controller';
import addRoute, { REQ_METHOD_TYPE_E } from '../../../helpers/routeHandler';

const usersProtectedRouter = express.Router();

addRoute(usersProtectedRouter, REQ_METHOD_TYPE_E.GET, '/profile', usersController.findAll);

export default usersProtectedRouter;
