import template from './tabChats.html';

export default function ($stateProvider) {
  'ngInject';
  $stateProvider
    .state('root.about.chats', {
      url: "/chats",
      views: {
        'tab-chats': {
          template: template,
          controller: "TabChatsController as vm"
        }
      }
    });
}
