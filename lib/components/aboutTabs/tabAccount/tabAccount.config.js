import template from './tabAccount.html';

export default function ($stateProvider, $urlRouterProvider) {
  'ngInject';
  $stateProvider
    .state('root.about.account', {
      url: "/account",
      views: {
        'tab-account': {
          template: template,
          controller: "TabAccountController as vm"
        }
      }
    });
}
