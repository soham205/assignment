import express from 'express';

import { protectedRoutes } from '../routeTable/routes.table';

const router = express.Router();


for (const routeEntry of protectedRoutes) {
	router.use(`/${routeEntry.routePath}`, routeEntry.router);
	
}
export default { route: router };
