import cors from 'cors';
import express from 'express';
import herokuAwake from 'heroku-awake';
import path from 'path';
import swaggerUI from 'swagger-ui-express';
import yaml from 'yamljs';
import { APP_URL, PORT } from './constants/config';
import contributionsRoute from './routes/contributions';
import homeRoute from './routes/home';
import pinnedProjectsRoute from './routes/pinnedProjects';

const app = express();
app.use(cors());
app.use(
  '/docs',
  swaggerUI.serve,
  swaggerUI.setup(yaml.load(path.join(__dirname, 'docs', 'swagger.yml'))),
);
app.use('/contributions', contributionsRoute);
app.use('/pinned-projects', pinnedProjectsRoute);
app.use('/', homeRoute);

app.listen(PORT, () => {
  console.log(`> Server listening on port ${PORT}`);
  herokuAwake(APP_URL);
});
