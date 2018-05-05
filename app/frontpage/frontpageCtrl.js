angular.module('myApp')
.controller('FrontpageCtrl', function() {
    
    var vm = this;

    vm.menu = [
        {title: 'Список', href: 'list'},
        {title: 'Добавить нового', href: 'createNewPokemon'},
        {title: 'Личный кабинет', href: 'account'},
    ];

});