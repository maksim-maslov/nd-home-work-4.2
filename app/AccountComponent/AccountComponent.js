'use strict';

angular
    .module('myApp')
    .component('accountComponent', {
        templateUrl: 'AccountComponent/AccountComponent.html',
        controller: function(AccountStore) {
            this.account = AccountStore.getItems();
        }
    })