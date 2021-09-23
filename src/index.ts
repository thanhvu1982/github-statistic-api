import contributionsRoute from '@/routes/contributions';
import cors from 'cors';
import express from 'express';
import { PORT } from './constants/config';

const app = express();

app.use(cors());
app.use('/contributions', contributionsRoute);

app.listen(PORT, () => {
  console.log('> Server listening on port 3000');
});
