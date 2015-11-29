import template from './tabDash.html';

export default function ($stateProvider, $urlRouterProvider) {
  'ngInject';
  $stateProvider
    .state('root.about.dash', {
      url: "/dash",
      views: {
        'tab-dash': {
          template: template,
          controller: "TabDashController as vm"
        }
      }
    });
}
