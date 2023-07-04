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

const GradesModel = {
	id: {
		type: DataTypes.INTEGER,
		allowNull: false,
		primaryKey: true,
		autoIncrement: true
	},
	score: {
		type: DataTypes.STRING(700),
		allowNull: true
	},
	grade: {
		type: DataTypes.STRING(700),
		allowNull: true
	},
	userId: {
		type: DataTypes.INTEGER,
		references: {
			model: 'users', // its table"s name, not object name
			key: 'id' // its column"s name
		},
		onUpdate: 'CASCADE',
		onDelete: 'CASCADE'
	},
	courseId: {
		type: DataTypes.INTEGER,
		references: {
			model: 'courses', // its table"s name, not object name
			key: 'id' // its column"s name
		},
		onUpdate: 'CASCADE',
		onDelete: 'CASCADE'
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

export default DatabaseHandler.getDatabaseHandler().define('grades', GradesModel, {
	timestamps: true,
	freezeTableName: true
});
