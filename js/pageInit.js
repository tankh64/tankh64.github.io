// this must be located before including jquery.mobile-1.1.0.min.js
$(document).bind("mobileinit", function(){
  $.mobile.hashListeningEnabled = false;
  $.mobile.ignoreContentEnabled = true;
  $.mobile.ajaxEnabled = false;
//$.mobile.pushStateEnabled = false;
//$.mobile.metaViewportContent = 'width=device-width';  
});
//var dataSourceUrl = "http://meitikeji.appspot.com/";