import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import authRouter from './routes/auth-route';

dotenv.config();

const app = express();

app.use(express.json());

mongoose.connect(process.env.MONGO_URI!, {
  pass: process.env.MONGO_PASSWORD,
  user: process.env.MONGO_USER,
});

app.use('/api/auth', authRouter);

app.use((err: any, req: any, res: any, next: any) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode).json({ message: err.message });
});

export default app;
