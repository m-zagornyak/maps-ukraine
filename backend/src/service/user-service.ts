const UserModel = require('../models/user-model')
const bcrypt = require('bcrypt');
const uuid = require('uuid')
const mailService = require('./mail-service')
const tokenService = require('./token-service')

export class UserService {
    async registration(email: any, password: any) {
        const candidate = await UserModel.findOne({email})
        if (candidate) {
            throw new Error(`Пользователь с почтовым адресом ${email}уже существует`)
        }
        const hashPassword = await bcrypt.hash(password, 3);
        const activationLink = uuid.v4();
        const user = await UserModel.create({email, password: hashPassword, activationLink});
        await mailService.sendActivationMail(email, activationLink);
        const tokens = tokenService.generateTokens();
    }
}

