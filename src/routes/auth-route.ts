import express from 'express';
import { authUser, registerUser } from '../controllers/auth-controller';

const authRouter = express.Router();

authRouter.route('/register').post(registerUser);
authRouter.route('/login').post(authUser);

export default authRouter;
