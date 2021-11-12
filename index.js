import express from 'express';
import helmet from 'helmet';

const app = express();

app.use( helmet());

app.get('/', (_req, res) => {
  res.status(200).json({ message: 'It\'s alive!' });
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server is up on port ${PORT}.`);
});
