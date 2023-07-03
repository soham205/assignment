import { Request, Response } from 'express';

import UsersServices from '../services/users.services';
import { CreateUsers, UpdateUsers } from '../models/users.model';

export default class UsersController {
	public static async create(req: Request, res: Response) {
		const createData: CreateUsers = req.body;
		const createResult = await UsersServices.create(createData);
		res.status(200).json(createResult);
	}

	public static async findOne(req: Request, res: Response) {
		const findOneResult = await UsersServices.findOne({ id: req.params.id });
		res.status(200).json(findOneResult);
	}

	public static async findAll(req: Request, res: Response) {
		const findResult = await UsersServices.findAll(req.query);
		res.status(200).json(findResult);
	}

	public static async update(req: Request, res: Response) {
		const updateData: UpdateUsers = req.body;
		const updateResult = await UsersServices.update(updateData, req.query);
		return res.status(200).json(updateResult);
	}

	public static async deleteOne(req: Request, res: Response) {
		const deleteResult = await UsersServices.deleteOne({ id: req.params.id });
		res.status(200).json(deleteResult);
	}

	public static async deleteAll(req: Request, res: Response) {
		const deleteResult = await UsersServices.deleteAll(req.query);
		res.status(200).json(deleteResult);
	}
}
