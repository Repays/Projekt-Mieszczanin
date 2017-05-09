/*global angular */

var size =0;

(function () {
    "use strict";
    angular.module('myAppModule', [])
        .directive('myTable', myTable)
        .controller('MainController',MainController);

    function MainController(){
        var vm=this;
        vm.persons=[
            {name: 'Tomek', lastname: 'Smith', gender: 'M', points: 123},
            {name: 'Zosia', lastname: 'Lola', gender: 'K', points: 100},
            {name: 'Wojtek', lastname: 'Kowalski', gender: 'M', points: 98},
            {name: 'Magda', lastname: 'Kowalska', gender: 'K', points: 76},
            {name: 'Sara', lastname: 'Nowak', gender: 'K', points: 134},
            {name: 'Antek', lastname: 'Owocowy', gender: 'M', points: 14}
        ];
        vm.template=[
            {id:'name',nazwa:'Imie'},
            {id:'lastname',nazwa:'Nazwisko'},
            {id:'gender',nazwa:'Plec'},
            {id:'points',nazwa:'Punkty'}
        ];

        vm.arraySize = vm.persons.length;
        size = vm.arraySize;
        return vm.arraySize;
    }

    function myTable () {
        var directive = {
            scope: {
                data: '=',
                template: '='
            },
            templateUrl: './myTable.html',
            controller: myController,
            controllerAs: 'vm',
            bindToController: true
        };

        function myController() {
            var vm=this;
            vm.order='';
            vm.ordersign='-';
            vm.data=directive.scope.data;
            vm.sort=sort;
            vm.maxRow = vm.arraySize;
            vm.rowNumber = size;
            //vm.rowNumber = vm.arraySize;

            function sort(columnName){
                vm.order=columnName;
                vm.ordersign=(vm.ordersign=='' ? '-' : '');
                vm.order=(vm.ordersign + vm.order);
            }
        }

        return directive;
    };
})();
