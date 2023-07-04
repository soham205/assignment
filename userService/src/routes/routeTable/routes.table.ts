import usersProtectedRouter from '../../modules/users/routes/user.protected.routes';
import usersRouter from '../../modules/users/routes/users.routes';
import { RouterModule } from '../../types/routes-types';
import { ROUTE_MODULE_LIST_E } from './route.module';

export const routeTable: RouterModule.IRouteEntry[] = [{ routePath: ROUTE_MODULE_LIST_E.USERS, router: usersRouter }];

export const protectedRoutes: RouterModule.IRouteEntry[] = [
	{ routePath: ROUTE_MODULE_LIST_E.USERS, router: usersProtectedRouter }
];
