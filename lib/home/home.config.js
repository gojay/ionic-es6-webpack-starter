import template from './home.html';

export default function ($stateProvider, $urlRouterProvider) {
  'ngInject';
  $stateProvider
    .state('root.home', {
      url: "/home",
      views: {
        'content@root': {
          template: template,
          controller: "HomeController as vm"
        }
      }
    })
  ;
  $urlRouterProvider.otherwise("/home");
}
