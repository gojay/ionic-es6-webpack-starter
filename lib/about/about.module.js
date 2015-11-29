import aboutTabsModule from '../components/aboutTabs/about.tabs.module';
import aboutConfig from './about.config';
import AboutController from './about.controller';

let tabsModule = angular.module('main.about', [
	'ionic',
	'ui.router',
	aboutTabsModule.name
])
.config(aboutConfig)
.controller('AboutController', AboutController);

export default tabsModule;
