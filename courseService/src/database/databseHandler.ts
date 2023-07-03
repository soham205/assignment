import { Dialect, Sequelize } from 'sequelize';
import pg from 'pg';
import { DATABASE } from '../config';

class DatabaseHandler {
	private static _databaseHandler: Sequelize;

	private constructor() {}

	public static getDatabaseHandler() {
		if (!this._databaseHandler) {
			this._databaseHandler = new Sequelize(DATABASE.DB_NAME, DATABASE.USER, DATABASE.PASSWORD, {
				host: DATABASE.HOST,
				port: Number(DATABASE.PORT),
				dialect: 'postgres',
				logging: false
			});
		}
		return this._databaseHandler;
	}

	public static async connectDatabase() {
		try {
			await DatabaseHandler.getDatabaseHandler().sync();
			console.log('DATABSE connected ');
		} catch (error) {
			console.error('Database connection failed ', error);
		}
	}
}

export default DatabaseHandler;
