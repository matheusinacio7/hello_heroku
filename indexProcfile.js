import express from 'express';
import helmet from 'helmet';

const { SECRET_MESSAGE, PORT } = process.env;

const app = express();

app.use( helmet());

app.get('/env', (_req, res) => {
  res.status(200).json({ message: `from procfile: ${SECRET_MESSAGE}` });
});

app.get('/', (_req, res) => {
  res.status(200).json({ message: 'It\'s alive! FROM PROCFILE' });
});

app.listen(PORT, () => {
  console.log(`Server is up on port ${PORT}.`);
});
