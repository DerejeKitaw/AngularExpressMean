// To create server side api
## 1_Create model
```bash
#  create county model county.ts
```
## 2_Create controller for county county.ts
```bash
#  create county model county.ts
```
## 3_update routes.ts for county
```bash
  // Countys
  router.route('/countys').get(countyCtrl.getAll);
  router.route('/countys/count').get(countyCtrl.count);
  router.route('/county').post(countyCtrl.insert);
  router.route('/county/:id').get(countyCtrl.get);
  router.route('/county/:id').put(countyCtrl.update);
  router.route('/county/:id').delete(countyCtrl.delete);
```
## 2_Create county component
```bash
    ng g c countys --dry
```
