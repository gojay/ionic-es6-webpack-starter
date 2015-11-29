import template from './template/menu.html';

export default function ($stateProvider) {
  'ngInject';
  return $stateProvider.state('root', {
    url: '',
    abstract: true,
    views: {
      '@': {
        template: template
      }
    }
  });
}


