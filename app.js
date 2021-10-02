import express from 'express';
import userRouter from './routes/users.js';
import authRouter from './routes/auth.js';
import contactsRouter from './routes/contacts.js';
import { validateAuthToken } from './middleware/auth.js';
import path from 'path';

const app = express();

// middlewares
app.use(express.json());

// routes
app.use('/api/users', userRouter);
app.use('/api/auth', authRouter);
app.use('/api/contacts', validateAuthToken, contactsRouter);

// serve static assets in production
if (process.env.NODE_ENV === 'production') {
  // set static folder
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

export default app;
