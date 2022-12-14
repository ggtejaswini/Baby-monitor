alarm="";
objects=[];

function preload(){
    alarm = loadsSound("alarm.mp3");
}

function setup(){
    canvas = createCanvas(380,380);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(380,380);
    video.hide();
}

function draw(){
    image(video ,0,0,380,380);

    if(objects.legnth = "person"){
        for(i = 0; i < objects.legnth; i++){
            document.getElementById("status").innerHTML = "Baby Detected";
        }
    }
    else if(objects.legnth = ""){
        play(alarm);
        document.getElementById("status").innerHTML = "Baby Not Detected";
    }
    else{
        document.getElementById("status").innerHTML = "Webcam not Detected";
        play(alarm);
    }
}