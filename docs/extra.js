$(document).ready(function(){
    var t1 = window.location.pathname
    if (t1=='/downloads/downloadvaizrdemobox/'){
        DownloadVaizrDemoBox();
    }   
})
function DownloadVaizrDemoBox() {
  alert('nanne');
  var str = window.location.href
  var n = str.indexOf("/downloads/downloadvaizrdemobox/")
  var m = "/downloads/downloadvaizrdemobox/".length;
  alert(str.substr(n+m));
  window.location = "https://mega.nz/#!yp9QVLQR!TZ8L4qwLyAfdu4GPIEZPYFq3lSGwNeQBemQ9cReRfyI"
}