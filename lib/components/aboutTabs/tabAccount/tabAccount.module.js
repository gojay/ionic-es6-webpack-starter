import tabAccountConfig from './tabAccount.config.js';
import TabAccountController from './tabAccount.controller.js';

var tabAccountModule = angular.module('main.tabAccount', [
  'ui.router'
]);

register(tabAccountModule.name)
  .config(tabAccountConfig)
  .controller('TabAccountController', TabAccountController)


export default tabAccountModule;
