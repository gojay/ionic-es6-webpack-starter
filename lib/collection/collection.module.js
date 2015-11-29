import slideSwipeableModule from '../components/slideSwipeable/slideSwipeable.module';
import collectionConfig from './collection.config';
import CollectionController from './collection.controller';
import './collection.scss';

let collectionModule = angular.module('main.collection', [
	'ui.router',
	slideSwipeableModule.name
])
.config(collectionConfig)
.controller('CollectionController', CollectionController);

export default collectionModule;
