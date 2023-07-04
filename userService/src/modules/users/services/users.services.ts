import UsersModel, { CreateUsers, UpdateUsers } from '../models/users.model';

export default class UsersServices {
	public static async create(createData: CreateUsers) {
		try {
			console.log('--------', createData);

			const createdData = await UsersModel.create(createData);
			return {
				status: 200,
				success: true,
				data: createdData,
				message: ''
			};
		} catch (error: unknown) {
			console.error(error);
			return {
				status: 200,
				success: false,
				data: null,
				message: error
			};
		}
	}

	public static async findOne(condition: any, excludeOtp: boolean = false) {
		try {
			// users roles m:m mapping
			const raw = condition.raw ? condition.raw : false;
			delete condition.raw;
			const otpRequired = excludeOtp ? '' : 'otp';
			/*------------------------------------------------------------------------------------------------------------- */
			const createdData = await UsersModel.findOne({
				where: JSON.parse(JSON.stringify(condition)),
				raw
			});
			return {
				status: 200,
				success: true,
				data: createdData,
				message: ''
			};
		} catch (error: unknown) {
			console.error(error);
			return {
				status: 200,
				success: false,
				data: null,
				message: error
			};
		}
	}

	public static async findByEmail(email: string) {
		try {
			// users roles m:m mapping
			console.log('------------------------------------------------sdjklfa;sdklfja;sldkfja;lsdjkfa;l');

			/*------------------------------------------------------------------------------------------------------------- */
			const readResult = await UsersModel.findOne({
				where: JSON.parse(JSON.stringify({ email })),
				raw: true
			});
			console.log('--------------------------', readResult);

			return {
				status: 200,
				success: true,
				data: readResult,
				message: ''
			};
		} catch (error: unknown) {
			console.error(error);
			return {
				status: 200,
				success: false,
				data: null,
				message: error
			};
		}
	}

	public static async findAll(condition: any) {
		try {

			const findData = await UsersModel.findAndCountAll({
				where: JSON.parse(JSON.stringify(condition)),
				raw: true
			});
			return {
				status: 200,
				success: true,
				data: findData,
				message: ''
			};
		} catch (error: unknown) {
			console.error(error);
			return {
				status: 200,
				success: false,
				data: null,
				message: error
			};
		}
	}

	public static async update(updateData: UpdateUsers, condition: unknown) {
		try {
			const updatedData = await UsersModel.update({ ...updateData }, { where: JSON.parse(JSON.stringify(condition)) });
			return {
				status: 200,
				success: true,
				data: updatedData,
				message: ''
			};
		} catch (error: unknown) {
			console.error(error);
			return {
				status: 200,
				success: false,
				data: null,
				message: error
			};
		}
	}

	public static async deleteOne(condition: unknown) {
		try {
			const updatedData = await UsersModel.destroy({ where: JSON.parse(JSON.stringify(condition)) });
			return {
				status: 200,
				success: true,
				data: updatedData,
				message: ''
			};
		} catch (error: unknown) {
			console.error(error);
			return {
				status: 200,
				success: false,
				data: null,
				message: error
			};
		}
	}

	public static async deleteAll(condition: unknown) {
		try {
			const updatedData = await UsersModel.destroy({ where: JSON.parse(JSON.stringify(condition)) });
			return {
				status: 200,
				success: true,
				data: updatedData,
				message: ''
			};
		} catch (error: unknown) {
			console.error(error);
			return {
				status: 200,
				success: false,
				data: null,
				message: error
			};
		}
	}
}
