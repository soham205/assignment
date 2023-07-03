import express from "express";

import usersController from "../controllers/users.controller";
import addRoute, { REQ_METHOD_TYPE_E } from "../../../helpers/routeHandler";

const usersRouter = express.Router();

addRoute(usersRouter, REQ_METHOD_TYPE_E.POST, "/", usersController.create);

addRoute(usersRouter, REQ_METHOD_TYPE_E.GET, "/", usersController.findAll);

addRoute(usersRouter, REQ_METHOD_TYPE_E.GET, "/:id", usersController.findOne);

addRoute(usersRouter, REQ_METHOD_TYPE_E.PUT, "/", usersController.update);

addRoute(usersRouter, REQ_METHOD_TYPE_E.DELETE, "/:id", usersController.deleteOne);



export default usersRouter;
