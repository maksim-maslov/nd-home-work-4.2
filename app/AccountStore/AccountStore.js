'use strict';

angular
    .module('myApp')
    .factory('AccountStore', function() {

        const state = {
            account: {}
        };

        return {
            getItems()  {
                return state.account;
            },
            addItem(item) {
                state.account = {
                    name: item.name,
                    email: item.email,
                    phone: item.phone
                };
            }
        };

    })
