import { Router } from 'express';
import { getUser, updateUser, deleteUser } from '../controllers/userController.js';
import userSchemaValidationMiddleware from '../middlewares/userSchemaValidationMiddleware.js';

const userRouter = Router();
userRouter.get("/user", getUser);
userRouter.put("/user", userSchemaValidationMiddleware, updateUser);
userRouter.delete("/user", deleteUser);
export default userRouter;
