img="";
status1="";
i = "";
function preload(){
   img= loadImage("tv.jpg");
}

function setup(){
    canvas = createCanvas(640,420);
    canvas.center();

    objectDetector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="detecting pbject";
}

function modelLoaded(){
    console.log("model initialized");
     status1=true;
     objectDetector.detect(img,gotResult);
}

function gotResult(error,result)
{
    if(error){
        console.log(error);
    }       
    else{
        console.log(result);
        i = result;
    }
}

function draw(){
    image(img,0,0,640,420);
    if(status1 != ""){
    for(k=0;k <i.length; k++){
    
    
    fill("#d90429");
    percent = floor(i[k].confidence*100);
    text(i[k].label,i[k].x+15,i[k].y+15);
    noFill();
    stroke("#d90429");
    rect(i[k].x,i[k].y,i[k].width,i[k].height);
    }
    }
}
