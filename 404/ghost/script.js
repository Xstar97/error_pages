//based on https://dribbble.com/shots/3913847-404-page

var pageX = $(document).width();
var pageY = $(document).height();
var mouseY=0;
var mouseX=0;

$(document).mousemove(function( event ) {
  //verticalAxis
  mouseY = event.pageY;
  yAxis = (pageY/2-mouseY)/pageY*300; 
  //horizontalAxis
  mouseX = event.pageX / -pageX;
  xAxis = -mouseX * 100 - 100;

  $('.box__ghost-eyes').css({ 'transform': 'translate('+ xAxis +'%,-'+ yAxis +'%)' }); 

  //console.log('X: ' + xAxis);

});
let hostname = location.hostname;
hostname = hostname.substring(hostname.indexOf(".") + 1);
window.addEventListener('load', (event) => {
        var a = document.getElementById('home'); 
        a.href = "https://" + hostname;
});