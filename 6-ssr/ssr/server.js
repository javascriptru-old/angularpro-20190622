require('zone.js/dist/zone-node');
require('reflect-metadata');
const { ngExpressEngine } = require("@nguniversal/express-engine");
const express = require('express');
const join = require('path').join;
const app = express();
const DIST_FOLDER = join(process.cwd(), 'dist');
const { AppServerModuleNgFactory, LAZY_MODULE_MAP } = require('./dist/server/main');
const { provideModuleMap } = require("@nguniversal/module-map-ngfactory-loader");


app.engine('html', ngExpressEngine({
  bootstrap: AppServerModuleNgFactory,
  providers: [
    provideModuleMap(LAZY_MODULE_MAP)
  ]
}));

app.set('view engine', 'html');
app.set('views', join(DIST_FOLDER, 'browser'));
app.get('*.*', express.static(join(DIST_FOLDER, 'browser')));
app.get('*', (req, res) => res.render('index', { req }));


app.listen(4000, () => console.log(`Node server listening on http://localhost:4000`));
