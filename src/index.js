const express = require('express');

const app = express();

const cors = require('cors');

const port = 3000;
const swaggerUi = require('swagger-ui-express');
// const swaggerJsdoc  = require('swagger-jsdoc');
const docs = require('../docs');
const diverProfiles = require('./diver-profiles/diver-profiles');
const diverCertifications = require('./diver-certifications/diver-certification');

app.use(cors());
app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(docs));
app.use('/diverprofiles', diverProfiles);
app.use('/divercertifications', diverCertifications);

app.get('/', (req, res) => {
  res.json({
    title: 'Hello, world',
  });
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Example app listening at http://localhost:${port}`);
});
