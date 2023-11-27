/* eslint-disable no-console */

const app = require('./app');

const port = 5000;

app.listen(
  port,
  () => console.info(`Server is listening on port ${port}`),
).on(
  'error',
  (error) => console.error('Error: ', error.message),
);
