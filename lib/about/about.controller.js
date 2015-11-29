class About {
  /*@ngInject*/
  constructor($scope, $state, $ionicTabsDelegate) {
    this.title = 'About';
    this.$scope = $scope;

    this.$scope.$on('$ionicView.beforeEnter', () => {
    	if($state.is('root.about')) $ionicTabsDelegate.select(0);
    });
  }
}


export default About;