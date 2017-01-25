$(document).ready(function(){
    var pathname = window.location.pathname
    if (pathname.indexOf("downloads/downloadvaizrdemobox/") > 0){
        DownloadVaizrDemoBox();
    }   
})
function DownloadVaizrDemoBox() {
  var downloadurl = "https://www.dropbox.com/s/mc2f40f411eqini/vaizrdemobox.ova?dl=0"
  var str = window.location.href
  var n = str.indexOf("/downloads/downloadvaizrdemobox/")
  var m = "/downloads/downloadvaizrdemobox/".length;
  if (str.substr(n+m).length > 0 ) {
     alert("Your Download with id : " + str.substr(n+m));
     window.location = downloadurl
  } else {
     alert("not a valid download id");
     window.location = "/";
  }
}