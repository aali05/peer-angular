var myApp = angular.module('myApp', []);

myApp.controller('Controlla', function($http){
  console.log('NG');

  var vm = this;

  vm.addItems = function(){
    console.log('in addItems');
    var newItem = {
      song: vm.songIn,
      food: vm.foodIn
    };

    console.log(newItem);
    $http({
      method: 'POST',
      url: '/test',
      data: newItem,
      cache: false
    }).then(function success(response){
      console.log(response.data);
    }, function fail(response){
      console.log(response);
    });


    $http({
      method: 'GET',
      url: '/test'
    }).then(function mySuccess(response){
      vm.items = response.data;
      console.log(vm.items);
    },function fail(response){
      console.log(response);
    });


    vm.songIn = '';
    vm.foodIn = '';
  };

});
