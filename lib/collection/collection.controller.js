class CollectionController {
  /*@ngInject*/
	constructor($scope, $timeout, $window, $ionicSideMenuDelegate, $ionicScrollDelegate, $ionicSlideBoxDelegate) {
		this.name = 'Collection Slidebox';
		this.$scope = $scope;
		this.$timeout = $timeout;
		this.$window = $window;
		this.$ionicScrollDelegate = $ionicScrollDelegate;
		this.$ionicSlideBoxDelegate = $ionicSlideBoxDelegate;

		$ionicSideMenuDelegate.canDragContent(false);

		this.scrollCollections = ['scroll-left', 'scroll-center', 'scroll-right'];

		this.items = {
			left: [],
			center: [],
			right: []
		};

		this.activeTabIndex = this.previousTabIndex = 0;

  	this.userScrolling = false;

		this._initListeners();
	}

	_initListeners() {
		this.$scope.$on('$ionicView.beforeEnter', () => {
			console.log('beforeEnter..');
			this.$timeout(() => { 
				this.$ionicSlideBoxDelegate.enableSlide(false); 
			});
			this._buildItems();
		});

		this.$scope.$on('$ionicView.beforeLeave', () => {
			console.log('beforeLeave..');
		});

		this.$scope.$on('$destroy', () => {
			console.log('$destroy..');
		});
	}

	_buildItems(until = 1000) {
		for (var i = 0; i < until; i++) {
	  	var number = i + 1;
	  	this.items.left.push('Left ' + number);
	  	this.items.center.push('Center ' + number);
	  	this.items.right.push('Right ' + number);
	  }
	}

	getHeight() {
		return {
  		height: this.$window.innerHeight + 'px'
  	}
	}

	slideHasChanged(index) {
  	this.activeTabIndex = index;
		this.previousTabIndex = angular.copy(this.activeTabIndex);

  	var scrollHandle = this.scrollCollections[this.previousTabIndex];
 		this.$ionicScrollDelegate.$getByHandle(scrollHandle).scrollTop();
	}

	onSlideDragHorizontal() {
		console.log('onSlideDragHorizontal');
		$timeout(() => { 
			this.$ionicSlideBoxDelegate.enableSlide(true); 
		});
	}

	onSlideDragVertical() {
		console.log('onSlideDragVertical');
		$timeout(() => { 
			this.$ionicSlideBoxDelegate.enableSlide(false); 
		});
	}

	onRelease() {
		if(this.userScrolling) {
  		this.userScrolling = false;
  		console.log('release');
  	}
	}

	onScrollUp() {
		this.userScrolling = true;
		console.log('onScrollUp');
	}
}

export default CollectionController;