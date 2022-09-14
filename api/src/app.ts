import express from 'express';
import { getUsersRouter } from './routes/get-users';

const app = express();

app.use(getUsersRouter);

export { app };
