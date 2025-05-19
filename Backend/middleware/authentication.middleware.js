import jwt from "jsonwebtoken";
import UserTable from "../user/user.model.js";

const isUser = async (req, res, next) => {
  const authorization = req?.headers?.authorization;

  if (!authorization || !authorization.startsWith("Bearer ")) {
    return res
      .status(401)
      .send({ message: "Access denied. No token provided." });
  }

  const token = authorization.split(" ")[1];

  try {
    const secretKey = process.env.JWT_SECRET; // You should move this to env variables
    const payload = jwt.verify(token, secretKey);

    // Find user using email from payload
    const user = await UserTable.findOne({ email: payload.email });

    if (!user) {
      return res.status(401).send({ message: "Unauthorized. User not found." });
    }

    // Optional: attach user to request object for later use
    req.user = user;

    next();
  } catch (error) {
    return res
      .status(401)
      .send({ message: "Unauthorized. Invalid or expired token." });
  }
};

export default isUser;
