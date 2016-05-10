'use strict';
/**
 * @ngdoc function
 * @name anthonyPowellcomApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the anthonyPowellcomApp
 */
angular.module('anthonyPowellcomApp')
  .controller('MainCtrl', function () {
    var projectTop = $('.project').offset().top;
    //var projectBottom = $('.project').offset().top + $('.project').height();
    //var windowTop = $(window).scrollTop();
    //var windowBottom = $(window).scrollTop() + $(window).height();


    $(window).scroll(function () {
      var windowScroll = $(this).scrollTop();
      var windowTop = $(this).scrollTop();
      var windowBottom = $(this).scrollTop() + $(this).height();

      var animationEnd = ('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend');


      //console.log('Top: ' + projectTop + '  Bottom: ' + projectBottom);
      console.log('Window Top: ' + windowTop + '  Window Bottom: ' + windowBottom);
      if (windowBottom > projectTop) {

        console.log('Window Scroll: ' + windowScroll);

        //jQuery css manipulation version of project animation
        //$('#BIT-mockup').css({
        //  'transform': 'translate(-' + windowScroll / 35 + '%, 0px)'
        //});
        //$('#PF-mockup').css({
        //  'transform': 'translate(' + windowScroll / 35 + '%, 0px)'
        //});

        //jQuery version of project animation
        //$('#PF-mockup').animate({left: '750px'}, 800);
        //$('#BIT-mockup').animate({right: '750px'}, 800, 'ease-out');


        //Animation.css version of project animation
        $('#PF-mockup').addClass('animated zoomInLeft').one(animationEnd,function(){
          //$('#PF2-mockup').addClass('animated bounce');
        });
        $('#BIT-mockup').addClass('animated zoomInRight').one(animationEnd,function(){
          //$(this).removeClass('animated zoomInRight');
        });
        setTimeout($('#PF2-mockup').addClass('animated bounce'),1000);

      }else{
        $('#PF-mockup').removeClass('animated zoomInLeft');
        $('#BIT-mockup').removeClass('animated zoomInRight');
      }



    });

  });
