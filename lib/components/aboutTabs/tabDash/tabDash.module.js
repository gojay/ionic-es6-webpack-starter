import tabDashConfig from './tabDash.config.js';
import TabDashController from './tabDash.controller.js';

var tabDashModule = angular.module('main.tabDash', [
  'ui.router'
]);

register(tabDashModule.name)
  .config(tabDashConfig)
  .controller('TabDashController', TabDashController)


export default tabDashModule;
