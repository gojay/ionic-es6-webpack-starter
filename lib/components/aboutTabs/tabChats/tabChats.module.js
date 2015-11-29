import tabChatsConfig from './tabChats.config.js';
import TabChatsController from './tabChats.controller.js';

var tabChatsModule = angular.module('main.tabChats', [
  'ui.router'
]);

register(tabChatsModule.name)
  .config(tabChatsConfig)
  .controller('TabChatsController', TabChatsController)


export default tabChatsModule;
