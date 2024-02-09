function zoom(){
    w = document.documentElement.clientWidth || document.body.clientWidth || window.innerWidth;
    var targetWidth = 1366;
    if ( w <= targetWidth) {
        document.body.style.zoom = "90%" 
    }
    else {
        document.body.style.zoom = "100%" 
    }
    };
