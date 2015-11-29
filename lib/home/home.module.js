import homeConfig from './home.config';
import HomeController from './home.controller';

let homeModule = angular.module('main.home', [
  'ionic',
  'ui.router'
])
.config(homeConfig)
.controller('HomeController', HomeController);


export default homeModule;
