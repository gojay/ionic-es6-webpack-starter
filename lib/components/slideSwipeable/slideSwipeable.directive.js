//inspired from: http://www.michaelbromley.co.uk/blog/350/exploring-es6-classes-in-angularjs-1-x#_section-directives

class slideSwipeableDirective {
  /*@ngInject*/

  constructor($timeout, $ionicGesture) {
    this.restrict = 'A';
    this.require = '^ionSlideBox';
    this.scope = {};

    this.$timeout = $timeout;
    this.$ionicGesture = $ionicGesture;
  }

  // optional compile function
  compile(tElement) {
    //tElement.css('position', 'absolute');
  }

  // optional link function
  link(scope, element, attrs, slideBoxCtrl) {
    this.$timeout(() => {
      slideBoxCtrl.__slider.enableSlide(false);
    });

    var _dragHorizontal = (e) => {
      if(e.gesture.distance > 25) {
        slideBoxCtrl.__slider.enableSlide(true);
      }
    };

    var _dragVertical = (e) => {
      slideBoxCtrl.__slider.enableSlide(false);
    };
      
    var swipeGesture =  this.$ionicGesture
                        .on('dragleft',   _dragHorizontal, element)
                        .on('dragright',  _dragHorizontal, element)
                        .on('swipeleft',  _dragHorizontal, element)
                        .on('swiperight', _dragHorizontal, element)
                        .on('dragup',     _dragVertical, element)
                        .on('dragdown',   _dragVertical, element)
                        .on('swipeup',    _dragVertical, element)
                        .on('swipedown',  _dragVertical, element);

    scope.$on('$destroy', () => {
         this.$ionicGesture.off(swipeGesture, 'dragleft',   _dragHorizontal);
         this.$ionicGesture.off(swipeGesture, 'dragright',  _dragHorizontal);
         this.$ionicGesture.off(swipeGesture, 'swipeleft',  _dragHorizontal);
         this.$ionicGesture.off(swipeGesture, 'swiperight', _dragHorizontal);
         this.$ionicGesture.off(swipeGesture, 'dragup',     _dragVertical);
         this.$ionicGesture.off(swipeGesture, 'dragdown',   _dragVertical);
         this.$ionicGesture.off(swipeGesture, 'swipeup',    _dragVertical);
         this.$ionicGesture.off(swipeGesture, 'swipedown',  _dragVertical);
    });
  }
}

export default slideSwipeableDirective;