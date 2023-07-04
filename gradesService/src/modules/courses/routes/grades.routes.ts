import express from "express";

import usersController from "../controllers/grades.controller";
import addRoute, { REQ_METHOD_TYPE_E } from "../../../helpers/routeHandler";

const gradesRouter = express.Router();

addRoute(gradesRouter, REQ_METHOD_TYPE_E.POST, "/", usersController.create);

addRoute(gradesRouter, REQ_METHOD_TYPE_E.GET, "/", usersController.findAll);

addRoute(gradesRouter, REQ_METHOD_TYPE_E.GET, "/:id", usersController.findOne);

addRoute(gradesRouter, REQ_METHOD_TYPE_E.PUT, "/", usersController.update);

addRoute(gradesRouter, REQ_METHOD_TYPE_E.DELETE, "/:id", usersController.deleteOne);



export default gradesRouter;
