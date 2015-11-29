import tabAccountModule from './tabAccount/tabAccount.module';
import tabChatsModule from './tabChats/tabChats.module';
import tabDashModule from './tabDash/tabDash.module';

let aboutTabsModule = angular.module('about.tabs', [
	tabAccountModule.name,
	tabChatsModule.name,
	tabDashModule.name
]);

export default aboutTabsModule;