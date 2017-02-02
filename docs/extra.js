$(document).ready(function(){
    var pathname = window.location.pathname
    if (pathname.indexOf("downloads/downloadvaizrdemobox/") > 0){
        DownloadVaizrDemoBox();
    }   
})
function DownloadVaizrDemoBox() {
  var downloadurl = "https://www.dropbox.com/sh/3kz90bvytsm0e5l/AABpDP0KQYmzFgo5X_ezX5Epa?dl=0"
  var str = window.location.href
  var n = str.indexOf("/downloads/downloadvaizrdemobox/")
  var m = "/downloads/downloadvaizrdemobox/".length;
// Todo make call to webservice for giving valid id
  if ((str.substr(n+m).length > 0) && (str.substr(n+m) == "#tbcqa4gjnyvneg1mbzzn" )) {
//     alert("Your Download with id : " + str.substr(n+m));
     window.location = downloadurl
  } else {
     alert("not a valid download id");
     window.location = "/";
  }
}