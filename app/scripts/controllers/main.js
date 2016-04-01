'use strict';

/**
 * @ngdoc function
 * @name anthonyPowellcomApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the anthonyPowellcomApp
 */
angular.module('anthonyPowellcomApp')
  .controller('MainCtrl','$anchorScroll', function() {
    var ctx = $('#canvas').get(0).getContext('2d');

    //pie chart data
    var data = [{
      value: 144,
      color: '#FC4B26',
      highlight: '#FF6E4F',
      label: 'HTML/CSS/JS'
    }, {
      value: 72,
      color: '#BA783A',
      highlight: '#DD9F63',
      label: 'Photoshop/Illustrator'
    }, {
      value: 108,
      color: '#86AE36',
      highlight: '#AACE5D',
      label: 'Android',
    }, {
      value: 36,
      color: '#952F69',
      highlight: '#B15087',
      label: 'Swift'
    }];
    var options = {
      //Boolean - Whether we should show a stroke on each segment
      segmentShowStroke: true,

      //String - The colour of each segment stroke
      segmentStrokeColor: "#fff",

      //Number - The width of each segment stroke
      segmentStrokeWidth: 2,

      //Number - The percentage of the chart that we cut out of the middle
      percentageInnerCutout: 0, // This is 0 for Pie charts

      //Number - Amount of animation steps
      animationSteps: 100,

      //String - Animation easing effect
      animationEasing: "easeOutBounce",

      //Boolean - Whether we animate the rotation of the Doughnut
      animateRotate: true,

      //Boolean - Whether we animate scaling the Doughnut from the centre
      animateScale: false,

      //String - A legend template
      legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><li><span style=\"background-color:<%=segments[i].fillColor%>\"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>"
    };
    var skillchart = new Chart(ctx).Pie(data, options);

    $scope.gotoSkills=function(){
      $location.hash('skills')
    }
  });
