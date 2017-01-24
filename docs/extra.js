$(document).ready(function(){
    var pathname = window.location.pathname
    if (pathname.indexOf("downloads/downloadvaizrdemobox/") > 0){
        DownloadVaizrDemoBox();
    }   
})
function DownloadVaizrDemoBox() {
  var str = window.location.href
  var n = str.indexOf("/downloads/downloadvaizrdemobox/")
  var m = "/downloads/downloadvaizrdemobox/".length;
  if (str.substr(n+m).length > 0 ) {
     alert("Your Download with id : " + str.substr(n+m));
     window.location = "https://mega.nz/#!yp9QVLQR!TZ8L4qwLyAfdu4GPIEZPYFq3lSGwNeQBemQ9cReRfyI"
  } else {
     alert("not a valid download id");
     window.location = "/";
  }
}