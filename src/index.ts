import contributionsRoute from '@/routes/contributions';
import pinnedProjectsRoute from '@/routes/pinnedProjects';
import cors from 'cors';
import express from 'express';
import { PORT } from './constants/config';

const app = express();

app.use(cors());
app.use('/contributions', contributionsRoute);
app.use('/pinned-projects', pinnedProjectsRoute);

app.listen(PORT, () => {
  console.log('> Server listening on port 3000');
});
