import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import UsersServices from '../services/users.services';
import { CreateUsers, UpdateUsers, UsersData } from '../models/users.model';
import { JWT_LOGIN_EXPIRES_IN, JWTSecret } from '../../../config';

interface ILoginData {
	email: string;
	password: string;
}

function encryptUserPassword(password: string): Promise<string> {
	return new Promise((resolve, reject) => {
		bcrypt.genSalt(10, function (err: unknown, salt: string) {
			bcrypt.hash(password, salt, function (err: unknown, hash: string) {
				if (err) {
					reject(err);
				}
				resolve(hash);
			});
		});
	});
}

function isPasswordMatching(password: string, passwordHash: string): Promise<boolean> {
	return new Promise((resolve, reject) => {
		bcrypt
			.compare(password, passwordHash)
			.then((result) => {
				if (result) {
					resolve(result);
				} else {
					reject(new Error('Passwords do not match !'));
				}
			})
			.catch((bcryptCompareError) => {
				if (bcryptCompareError) {
					console.error('authService:: isPasswordMatching :: bcryptCompareError ::  ', bcryptCompareError);
					reject(bcryptCompareError);
				}
			});
	});
}

export default class UsersController {
	public static async register(req: Request, res: Response) {
		const createData: CreateUsers = req.body;

		if (!(createData.email && createData.password && createData.name)) {
			return res.status(200).json({ success: false, data: null, message: 'incomeplete register info' });
		}

		createData.password = await encryptUserPassword(createData.password);
		const createResult = await UsersServices.create(createData);
		console.log('createResult', createResult);

		res.status(200).json(createResult);
	}

	public static async login(req: Request, res: Response) {
		try {
			const loginData: ILoginData = req.body;
			if (!(loginData.email && loginData.password)) {
				return res.status(200).json({ success: false, data: null, message: 'incomeplete login info' });
			}

			const readResult = await UsersServices.findByEmail(loginData.email);
			if (readResult && readResult.data && readResult.success) {
				const userElement = readResult.data as unknown as UsersData;
				console.log('userElement', userElement);

				let matchResult = await isPasswordMatching(loginData.password, userElement.password);
				console.log('userElement', userElement);

				let result: string | null = null;
				let message = '';

				if (matchResult) {
					console.log('matchResult', matchResult);

					let userToken = jwt.sign(
						{
							id: userElement.id,
							fullname: userElement.name
						},
						JWTSecret,
						{
							expiresIn: JWT_LOGIN_EXPIRES_IN
						}
					);
					console.log('userToken', userToken);

					result = userToken;
				} else {
					message = 'passwords not matching !';
				}
				return res.status(200).json({ success: matchResult, data: result, message });
			} else {
				return res.status(200).json({ success: false, message: 'User does not exists ', data: null });
			}
		} catch (error) {
			return res.status(200).json({ success: false, data: null, message: error });
		}
	}

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
