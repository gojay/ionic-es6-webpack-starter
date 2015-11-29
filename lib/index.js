import 'expose?_!lodash';
import 'ionic-sdk/release/js/ionic.bundle';

// Material Design Lite
import 'material-design-lite/dist/material';
//TODO: Download css from http://www.getmdl.io/customize/index.html
import 'material-design-lite/dist/material.css';
// Angular Material Design Lite
import 'angular-material-design-lite';

// Our modules
import modConstant from './constant.js';
import modConfigIonic from './config/ionic.config.js';
import modConfigMaterial from './config/material.config.js';
import modConfigRoute from './config/route.config.js';

import modRun from './run.js';
import runCordova from './run/cordova.run.js';

import modMenu from './menu/menu.module.js';
import modHome from './home/home.module.js';
import modAbout from './about/about.module.js';
import modCollection from './collection/collection.module.js';
import modApi from './api/api.module.js';

// Style entry point
import './scss/main';

// Create our prototype module
let mod = angular.module('main', [
  'ionic',
  'ui.router',
  'mdl',

  modConstant.name,
  modMenu.name,
  modAbout.name,
  modCollection.name,
  modHome.name,
  modApi.name,
]);
// IONIC CONFIG
mod.config(modConfigIonic);
// ROUTE Config
mod.config(modConfigRoute);
// MATERIAL DESIGN Config
mod.config(modConfigMaterial);

// Run
mod.run(modRun);
mod.run(runCordova);

export default mod = mod.name;
