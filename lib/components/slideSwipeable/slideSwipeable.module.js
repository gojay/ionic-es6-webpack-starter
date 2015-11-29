import slideSwipeableDirective from './slideSwipeable.directive';

let slideSwipeableModule = angular.module('directive.slideSwipeable', [
	'ionic'
]);

register(slideSwipeableModule.name)
  .directive('slideSwipeable', slideSwipeableDirective);

export default slideSwipeableModule;
