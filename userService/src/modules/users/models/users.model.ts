import { CreationAttributes, DataTypes, Model } from 'sequelize';

import DatabaseHandler from '../../../database/databseHandler';
import { IUserPrefrences } from './userPrefrences.model';

export interface UsersData {
	id?: number;
	nonce: string;
	email?: string;
	user_name?: string;
	referral_code: string;
	name?: string;
	avatar_url?: string;
	createdAt?: string;
	updatedAt?: string;
}

export interface IUpdateUsersData {
	email?: string;
	user_name?: string;
	wallet_addresses?: Array<string>;
	avatar_url?: string;
	avatar_url_key?: string;
	nonce?: string;
	user_prefrences?: Array<IUserPrefrences>;
	roles?: Array<number>;
	roles_to_be_romved?: Array<number>;
	user_prefrences_to_be_removed?: Array<number>;
	wallet_addresses_to_be_removed?: Array<string>;
	otp?: Number;
	is_confirmed?: boolean;
	createdAt?: string;
	updatedAt?: string;
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
