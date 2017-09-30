import * as express from 'express';
import * as path from 'path';

import setRoutes from './routes';

const app = express();
app.set('port', (process.env.PORT || 3000));
setRoutes(app);

app.get('/*', function(req, res) {
    res.send('working');
  });
app.listen(app.get('port'), () => {
console.log('Server is listening on port ' + app.get('port'));
});
export { app };