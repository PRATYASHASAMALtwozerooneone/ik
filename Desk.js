status4 = "";
img3 = "";


function preload(){
    img3 = loadImage('Desk.webp');
}

function setup() {
    canvas = createCanvas(640, 350);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
    
}

function draw() {
    image(img3, 0, 0, 640, 420);
 
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