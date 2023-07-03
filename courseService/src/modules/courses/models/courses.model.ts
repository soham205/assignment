import { CreationAttributes, DataTypes, Model } from 'sequelize';

import DatabaseHandler from '../../../database/databseHandler';

export interface UsersData {
	email: string;
	name: Number;
	isConfimed: boolean;
	createdAt: string;
	updatedAt: string;
}

export interface IUpdateUsersData {
	email: string;
	name: Number;
	isConfimed: boolean;
	createdAt: string;
	updatedAt: string;
}

export type CreateUsers = CreationAttributes<Model<UsersData>>;

export type UpdateUsers = CreationAttributes<Model<IUpdateUsersData>>;

const CourseModel = {
	id: {
		type: DataTypes.INTEGER,
		allowNull: false,
		primaryKey: true,
		autoIncrement: true
	},
	courseTitle: {
		type: DataTypes.STRING(700),
		allowNull: false,
		unique: true
	},
	duration: {
		type: DataTypes.STRING(700),
		allowNull: true
	},
	isConfimed: {
		type: DataTypes.BOOLEAN,
		defaultValue: true,
		allowNull: false
	},
	createdAt: {
		field: 'created_at',
		type: DataTypes.DATE
	},
	updatedAt: {
		field: 'updated_at',
		type: DataTypes.DATE
	}
};

export default DatabaseHandler.getDatabaseHandler().define('courses', CourseModel, {
	timestamps: true,
	freezeTableName: true
});
