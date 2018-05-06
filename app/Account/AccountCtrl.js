'use strict';

angular
    .module('myApp')
    .controller('AccountCtrl', function(AccountStore) {

        var vm = this;
        vm.account = {};
        vm.getAccount = AccountStore.getItems();

        vm.addToAccount = function(account) {
          AccountStore.addItem(account);
    	  vm.account = {};       
          vm.accountForm.$setPristine();
        };

    });

