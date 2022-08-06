import jwt from 'jsonwebtoken';

export const requireSignin = (req, res, next) => {
    try {
        const decoded = jwt.verify(
            req.headers.authorization,
            process.env.JWT_SECRET
        );

        req.user = decoded;
        next();
    } catch (error) {
        console.log(error);
        return res.status(401).json(error);
    }
}