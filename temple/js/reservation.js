//reservation information from home page to reservation page
var hashParams = window.location.search.substr(1).split('&'); // substr(1) to remove the `#`
for(var i = 0; i < hashParams.length; i++){
    var p = hashParams[i].split('=');
    if (p[1].includes("+")){
        p[1].replace("%2B", "%20");
    }
    document.getElementById(p[0]).value = decodeURIComponent(p[1]);;
}