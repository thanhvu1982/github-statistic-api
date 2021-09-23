if (process.env.NODE_ENV === 'production') {
  require('module-alias/register');
}
import contributionsRoute from '@/routes/contributions';
import pinnedProjectsRoute from '@/routes/pinnedProjects';
import cors from 'cors';
import express from 'express';
import path from 'path';
import swaggerUI from 'swagger-ui-express';
import yaml from 'yamljs';
import { PORT } from './constants/config';

const app = express();

app.use(cors());
app.use(
  '/docs',
  swaggerUI.serve,
  swaggerUI.setup(yaml.load(path.join(__dirname, 'docs', 'swagger.yml'))),
);
app.use('/contributions', contributionsRoute);
app.use('/pinned-projects', pinnedProjectsRoute);

app.listen(PORT, () => {
  console.log('> Server listening on port 3000');
});
