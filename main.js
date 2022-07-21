img =  "";
objects = [];
Status = "";

function preload(){

}

function setup(){
    canvas = createCanvas(380,380);
    canvas.center;
    video= createCapture(VIDEO);
    video.size(380,380);
    video.hide();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML="Status= Detecting Object";
}

function modelLoaded(){
    console.log("Model Loaded");
    Status = true;
}

function gotResult(error, results){
    if(error){
        console.log(error);
    }
    console.log(results);
    objects = results;
    console.log(objects);
}

function draw(){
    image(video, 0, 0, 380, 380);
    if (Status != "") {
        objectDetector.detect(video, gotResult);
    for(i <= 0;i++;){
        document.getElementById("status").innerHTML="Status: Object Detected"
        document.getElementById("babystatus").innerHTML="Baby Not Found";
        fill("#FF000");
        percent = floor ((objects[i].confidence) * 100);
        text (objects[i].label+ "" + percent + "%", objects[i].x +15, objects[i].y +15, objects[i].width +15, objects[i].height +15)
        noFill();
        stroke("#FF000");
    rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
    }
    }
}