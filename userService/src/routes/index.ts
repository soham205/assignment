import express from 'express';

import { routeTable } from './routeTable/routes.table';

const router = express.Router();

/***
 * Routes for the app
 */
for (const routeEntry of routeTable) {
	console.log('routeEntry.routePath', routeEntry);

	router.use(`/${routeEntry.routePath}`, routeEntry.router);
}

export default { route: router };
