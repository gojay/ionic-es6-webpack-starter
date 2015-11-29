import tabChatDetailConfig from './tabChatDetail.config.js';
import TabChatDetailController from './tabChatDetail.controller.js';


var tabChatDetailModule = angular.module('main.tabChatDetail', [
  // 'ionic',
  'ui.router'
]);

register(tabChatDetailModule.name)
  .config(tabChatDetailConfig)
  .controller('TabChatDetailController', TabChatDetailController)


export default tabChatDetailModule;
