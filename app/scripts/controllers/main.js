'use strict';

/**
 * @ngdoc function
 * @name anthonyPowellcomApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the anthonyPowellcomApp
 */
angular.module('anthonyPowellcomApp')
  .controller('MainCtrl', function() {
    $(window).scroll(function(){
      var windowScroll = $(this).scrollTop();



      if(windowScroll>$('.jumbotron3').offset().top-$(window).height()){
        console.log(windowScroll);
      }

      $('#PF-mockup').css({
        'transform':'translate('+windowScroll/50+'%, 0px)'
      });
      $('#BIT-mockup').css({
        'transform':'translate(-'+windowScroll/50+'%, 0px)'
      });


    });

  });
