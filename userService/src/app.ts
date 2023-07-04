import express, { Request, Response, NextFunction } from 'express';
import session from 'express-session';
import compression from 'compression';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import helmet from 'helmet';
import morgan from 'morgan';
import cors from 'cors';

import routes from './routes';
import DatabaseHandler from './database/databseHandler';
import { ApiError, InternalError, NotFoundError } from './core/APIHandler/APIError';
import { EXPRESS_SESSION_SECRET, BASE_ENDPOINT, API_VERSION, ENVIRONMENT, ENVIRONMENTS } from './config';
import passportMiddleWare from './middlewares/passportMiddleWare';
import protectedRoutes from './routes/routeTable/protectedRoutes';

dotenv.config();
const app = express();

DatabaseHandler.connectDatabase().catch(() => {
	process.exit(1);
});

app.use(helmet());
app.use(cors({ origin: '*', optionsSuccessStatus: 200 }));

app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true, parameterLimit: 50000 }));

app.use(compression());
app.use(morgan('combined'));

// public routes.
app.use(session({ secret: EXPRESS_SESSION_SECRET, resave: true, saveUninitialized: true }));

app.use(`${BASE_ENDPOINT}/${API_VERSION}`, routes.route);

//jwt passport middleware.
passportMiddleWare.usePassportMiddleware(app);

//protected routes.
app.use(`${BASE_ENDPOINT}/${API_VERSION}`, protectedRoutes.route);


// catch 404 and forward to error handler
app.use((req: Request, res: Response, next: NextFunction) => {
	return next(new NotFoundError());
});

// Middleware Error Handler
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
	console.error(err);
	if (err instanceof ApiError) {
		ApiError.handle(err, res);
	} else {
		if (ENVIRONMENT === ENVIRONMENTS.DEVELOP) {
			return res.status(500).send(err.message);
		}
		ApiError.handle(new InternalError(), res);
	}
});

export default app;
