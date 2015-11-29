import template from './collection.html';

export default function ($stateProvider) {
	'ngInject';
	$stateProvider
		.state('root.collection', {
			url: '/collection',
      views: {
        'content@root': {
					template: template,
					controller: 'CollectionController as vm'
        }
      }
		});
}