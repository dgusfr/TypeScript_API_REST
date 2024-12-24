import 'dotenv/config';
import express, { Application } from 'express';
import { router } from './routes';
import { logMiddleware } from './middlewares/logMiddleware';

const app: Application = express();
const PORT = process.env.PORT || 3000;

app.use(logMiddleware);app.use(logMiddleware);
app.use(express.json());
app.use('/api', router);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
