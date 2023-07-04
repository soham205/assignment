import { Request, Response, NextFunction, Router } from 'express';

type AsyncFunction = (req: Request, res: Response, next: NextFunction) => Promise<unknown>;

export enum REQ_METHOD_TYPE_E {
	GET,
	POST,
	PUT,
	PATCH,
	DELETE
}

const asyncHandler = (execution: AsyncFunction) => (req: Request, res: Response, next: NextFunction) => {
	execution(req, res, next).catch(next);
};

const addRoute = (router: Router, methodType: REQ_METHOD_TYPE_E, routePath: string, executionFn: AsyncFunction) => {
	switch (methodType) {
		case REQ_METHOD_TYPE_E.GET:
			router.get(routePath, asyncHandler(executionFn));
			break;

		case REQ_METHOD_TYPE_E.POST:
			router.post(routePath, asyncHandler(executionFn));
			break;

		case REQ_METHOD_TYPE_E.PUT:
			router.put(routePath, asyncHandler(executionFn));
			break;

		case REQ_METHOD_TYPE_E.PATCH:
			router.patch(routePath, asyncHandler(executionFn));
			break;

		case REQ_METHOD_TYPE_E.DELETE:
			router.delete(routePath, asyncHandler(executionFn));
			break;
	}
};

export default addRoute;
