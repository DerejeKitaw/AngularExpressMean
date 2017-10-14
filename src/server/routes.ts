import * as express from 'express';

import CountyCtrl from './controllers/county';
import InverterCtrl from './controllers/inverter';
import UserCtrl from './controllers/user';
import County from './models/county';
import Inverter from './models/inverter';
import User from './models/user';

export default function setRoutes(app) {

  const router = express.Router();

  const countyCtrl = new CountyCtrl();
  const inverterCtrl = new InverterCtrl();
  const userCtrl = new UserCtrl();

  // Countys
  router.route('/countys').get(countyCtrl.getAll);
  router.route('/countys/count').get(countyCtrl.count);
  router.route('/county').post(countyCtrl.insert);
  router.route('/county/:id').get(countyCtrl.get);
  router.route('/county/:id').put(countyCtrl.update);
  router.route('/county/:id').delete(countyCtrl.delete);

  // Countys
  router.route('/inverters').get(inverterCtrl.getAll);
  router.route('/inverters/count').get(inverterCtrl.count);
  router.route('/inverter').post(inverterCtrl.insert);
  router.route('/inverter/:id').get(inverterCtrl.get);
  router.route('/inverter/:id').put(inverterCtrl.update);
  router.route('/inverter/:id').delete(inverterCtrl.delete);

  // Users
  router.route('/login').post(userCtrl.login);
  router.route('/users').get(userCtrl.getAll);
  router.route('/users/count').get(userCtrl.count);
  router.route('/user').post(userCtrl.insert);
  router.route('/user/:id').get(userCtrl.get);
  router.route('/user/:id').put(userCtrl.update);
  router.route('/user/:id').delete(userCtrl.delete);

  // Apply the routes to our applicountyion with the prefix /api
  app.use('/api', router);

}
