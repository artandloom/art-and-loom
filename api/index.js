import bodyParser from 'body-parser';
const express = require('express');

// Create express instance
const app = express();
app.use(bodyParser.json());

// Require API routes
const ping = require('./routes/ping');
const mail = require('./routes/mail');
const states = require('./routes/states');

// Import API Routes
app.use(ping);
app.use(mail);
app.use(states);

// Export express app
module.exports = app;

// Start standalone server if directly running
if (require.main === module) {
  const port = process.env.PORT || 3001
  app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`API server listening on port ${port}`);
  })
}
