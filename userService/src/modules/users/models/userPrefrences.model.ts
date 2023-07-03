import { CreationAttributes, DataTypes, Model } from "sequelize";

import DatabaseHandler from "../../../database/databseHandler";


export interface UserPrefrencesData {
    id?: number
    user_id: number
    prefrence_id?: number
    reference_to?: string
    prefrence_text?: string
}

export interface IUpdateUserPrefrencesData {
    user_id?: number
    role_id?: number
    createdAt?: string
    updatedAt?: string
}

export interface IUserPrefrences {
    reference_to: string
    prefrence_id: number
    prefrence_text?: string
}

export type CreateUserPrefrencesMapping = CreationAttributes<Model<UserPrefrencesData>>

export type UpdateUserPrefrencesMapping = CreationAttributes<Model<IUpdateUserPrefrencesData>>

const UserPrefrencesMappingModel = {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: "users", // its table"s name, not object name
            key: "id", // its column"s name
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
    },
    prefrence_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    reference_to: {
        type: DataTypes.ENUM("games", "nfts"),
        allowNull: true,
    },
    prefrence_text: {
        type: DataTypes.STRING(700),
        allowNull: true,
    },
    createdAt: {
        field: "created_at",
        type: DataTypes.DATE,
    },
    updatedAt: {
        field: "updated_at",
        type: DataTypes.DATE,
    },
};

export default DatabaseHandler.getDatabaseHandler().define(
    "user_prefrences",
    UserPrefrencesMappingModel,
    { timestamps: true, freezeTableName: true }
);
