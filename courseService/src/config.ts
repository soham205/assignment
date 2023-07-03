export const ENVIRONMENT = process.env.NODE_ENV;
export const PORT = process.env.PORT;

export const EXPRESS_SESSION_SECRET: string = process.env.EXPRESS_SESSION_SECRET || '';

export const BASE_ENDPOINT = process.env.BASE_ENDPOINT;

export const API_VERSION = process.env.API_VERSION || 'v1';

export const DATABASE = {
	DB_NAME: process.env.POSTGRES_DB || '',
	HOST: process.env.DB_HOST || '',
	PORT: process.env.DB_PORT || '',
	USER: process.env.POSTGRES_USER || '',
	PASSWORD: process.env.POSTGRES_PASSWORD || '',
	DB_DIALECT: process.env.DB_DIALECT || ''
};

export const ENVIRONMENTS = {
	LOCAL: 'local',
	DEVELOP: 'develop',
	STAGE: 'stage',
	PROD: 'prod'
};

export const RUNNING_ENVIRONMENT = process.env.NODE_ENV || '';
