window.onload=function(){
    new CanvasIndicator(document.getElementById("loader"),{
        bars:14,
        innerRadius:50,
        size:[10,100],
        rgb:[255,255,255],
        fps:10
    });
}