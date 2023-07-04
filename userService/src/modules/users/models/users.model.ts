import { CreationAttributes, DataTypes, Model } from 'sequelize';

import DatabaseHandler from '../../../database/databseHandler';

export interface UsersData {
	id: number;
	name: string;
	password: string;
	email: string;
}

export interface IUpdateUsersData {
	name: string;
	password: string;
	email: string;
}

export type CreateUsers = CreationAttributes<Model<UsersData>>;

export type UpdateUsers = CreationAttributes<Model<IUpdateUsersData>>;

const UsersModel = {
	id: {
		type: DataTypes.INTEGER,
		allowNull: false,
		primaryKey: true,
		autoIncrement: true
	},
	email: {
		type: DataTypes.STRING(700),
		allowNull: false,
		unique: true
	},
	name: {
		type: DataTypes.STRING(700),
		allowNull: true
	},
	password: {
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

export default DatabaseHandler.getDatabaseHandler().define('users', UsersModel, {
	timestamps: true,
	freezeTableName: true
});
