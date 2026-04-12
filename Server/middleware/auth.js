// import jwt from 'jsonwebtoken';

// const auth= (req,res,next)=>{
//     const token = req.headers.authorization;
//     try{
//         jwt.verify( token,process.env.JWT_SECRET)
//         next();
//     }catch( error ){
//         res.json({success: false, message: 'Invalid token' });
//     }
// }

// export default auth;

// 
import jwt from 'jsonwebtoken';

// General auth - works for both admin and user tokens
const auth = (req, res, next) => {
    const token = req.headers.authorization;
    // if (!token) return res.json({ success: false, message: 'No token provided' });
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.userId = decoded.id;
        req.role = decoded.role;
        next();
    } catch (error) {
        res.json({ success: false, message: 'Invalid token' });
    }
};

// Admin only middleware
export const adminOnly = (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) return res.json({ success: false, message: 'No token provided' });

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        if (decoded.role !== 'admin') {
            return res.json({ success: false, message: 'Admin access only' });
        }
        req.userId = decoded.id;
        req.role = decoded.role;
        next();
    } catch (error) {
        res.json({ success: false, message: 'Invalid token' });
    }
};

// User only middleware
export const userOnly = (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) return res.json({ success: false, message: 'No token provided' });

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        if (decoded.role !== 'user') {
            return res.json({ success: false, message: 'User access only' });
        }
        req.userId = decoded.id;
        req.role = decoded.role;
        next();
    } catch (error) {
        res.json({ success: false, message: 'Invalid token' });
    }
};

export default auth;