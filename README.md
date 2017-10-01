# AngularExpressMean
##_01_Create client folder and install angular for front end
```bash
# ng new src -sd client  --style scss --dry
```
    remove --dry to install angular

##_02_Create server folder and install express

```bash
# npm install --save express
```

Create app.ts
```bash
var http=require('http'),
express= require('express');

var app=express();
app.get('/', function(req, res){
    res.send('Dkitaw.com');
});

http.createServer(app).listen(3000);

```
to run typescript first transpile ts to js by
```bash
$ stc app.ts
$ node app  //will run ap.js
```

##_03_Install concurrently to run more than one comand using script
```bash
$npm install concurrently --save
```

set script in package.json
```bash
"dev": "concurrently \"mongod\" \"ng serve -pc proxy.conf.json --open\" \"tsc -w -p server\" \"nodemon dist/server/app.js\"",

```

##_04_Creat user service for angular
```bash
$ ng g service services/user -dry

```