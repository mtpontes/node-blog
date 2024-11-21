const bodyParser = require('body-parser');
const userRoutes = require('./userRoutes');
const publicationRoutes = require('./publicationRoutes');
const commentRoutes = require('./commentRoutes');
const replyRoutes = require('./replyRoutes');

module.exports = (app) => {
  app.use(
    bodyParser.json(),
    userRoutes,
    publicationRoutes,
    commentRoutes,
    replyRoutes
  );
};