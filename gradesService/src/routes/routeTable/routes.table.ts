import gradesRouter from "../../modules/courses/routes/grades.routes";
import { RouterModule } from "../../types/routes-types";
import { ROUTE_MODULE_LIST_E } from "./route.module";



export const routeTable: RouterModule.IRouteEntry[] = [
	{ routePath: ROUTE_MODULE_LIST_E.GRADES, router: gradesRouter },

];
