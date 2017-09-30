import * as express from 'express';


export default function setRoutes(app) {

  const router = express.Router();

  


  router.route('/test').get( function (req, res) {
    console.log(res.headersSent); // false
    res.send('OK');
    console.log(res.headersSent); // true
  });

  // Apply the routes to our application with the prefix /api
  app.use('/api', router);

}
