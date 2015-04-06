angular
  .module('NumericExample', ['purplefox.numeric'])

  .controller('NumericCtrl', function () {
    'use strict';
    var vm = this;

    vm.value = 12.34;
  });
