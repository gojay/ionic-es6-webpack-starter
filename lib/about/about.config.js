import template from './about.html';

export default function ($stateProvider) {
  'ngInject';
  $stateProvider
    .state('root.about', {
      url: '/about',
      views: {
        'content@root': {
          template: template,
          controller: 'AboutController as vm'
        }
      }
    });
}
