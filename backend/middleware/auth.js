import jwt from "jsonwebtoken";

const authMiddleware = async (req, res, next) => {
    const token = req.headers['token'];
    
    if (!token) {
        return res.status(401).json({ success: false, message: "Not Authorized. Please log in again." });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.body.userId = decoded.id;  // Keep this consistent with the naming used in your controllers
        next();
    } catch (error) {
        console.error("JWT Verification Error:", error.message);
        return res.status(403).json({ success: false, message: "Token is invalid or expired. Please log in again." });
    }
}

export default authMiddleware;
