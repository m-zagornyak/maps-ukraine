const jwt = require('jsonwebtoken')
const { JWT_ACCESS_SECRET, JWT_REFRESH_SECRET } = require('../config/config')
const tokenModel = require('../models/token-model')

export class TokenService {
    generateTokens(payload: any) {
        const accessToken = jwt.sing(payload, JWT_ACCESS_SECRET, {expiresIn: '15m'});
        const refreshToken = jwt.sing(payload, JWT_REFRESH_SECRET, {expiresIn: '30d'});
        return {
            accessToken,
            refreshToken
        }
    }

    async saveToken(userId: any, refreshToken: any) {
        const tokenData = await tokenModel.findOne({user: userId})
        if (tokenData) {
            tokenData.refreshToken = refreshToken;
            return tokenData.save();
        }
        const token = await tokenModel.create({user: userId, refreshToken})
        return token;
    }
}