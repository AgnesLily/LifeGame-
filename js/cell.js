var canvas = document.getElementById('map'),
    context = canvas.getContext('2d');
    guid = document.getElementById('guid');
    
//绘制网格线
function drawGuid(){
    context.save();
    for(var i=10+0.5;i<canvas.width;i+=10){
        context.beginPath();
        context.lineWidth = 0.5;
        context.strokeStyle = "#333";
        context.moveTo(i,0);
        context.lineTo(i,canvas.height);
        context.closePath();
        context.stroke();
    }
    for(var i=10+0.5;i<canvas.height;i+=10){
        context.beginPath();
        context.lineWidth = 0.5;
        context.strokeStyle = "#333";
        context.moveTo(0,i);
        context.lineTo(canvas.width,i);
        context.closePath();
        context.stroke();
    }
}

drawGuid();
