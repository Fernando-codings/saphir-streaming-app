import jwt from 'jsonwebtoken'

export const generationJWT = (userId: string, role: string, version: number) => {
    const secret: string = process.env.JWT_SECRET!;
    const payload = { id: userId, role, version };
    return jwt.sign(payload, secret,{expiresIn : '15m'});
}
