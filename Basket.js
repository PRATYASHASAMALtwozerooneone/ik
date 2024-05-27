status5 = "";
img4 = "";


function preload(){
    img4 = loadImage('Basket.jpg');
}

function setup() {
    canvas = createCanvas(640, 350);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
    
}

function draw() {
    image(img4, 0, 0, 640, 420);
 
}

function modelLoaded() {
    console.log("Model Loaded!")
    status4 = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results) {
    if (error) {
        console.log(error);
    }
    console.log(results);
}