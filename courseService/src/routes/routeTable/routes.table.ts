import usersRouter from "../../modules/courses/routes/courses.routes";
import { RouterModule } from "../../types/routes-types";
import { ROUTE_MODULE_LIST_E } from "./route.module";



export const routeTable: RouterModule.IRouteEntry[] = [
	{ routePath: ROUTE_MODULE_LIST_E.COURSES, router: usersRouter },

];
