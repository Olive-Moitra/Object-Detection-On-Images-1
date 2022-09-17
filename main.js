Status="";
img="";
function setup()
{
    canvas=createCanvas(650,400);
    canvas.center();

    objectDetector = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML="Status : Detecting Objects";
}

function modelLoaded()
{
    console.log("Model Loaded Successfully");
    Status=true;
    objectDetector.detect(img, gotResults);
}

function gotResults(error , results)
{
    if(error)
    {
        console.log(error);
    }
    console.log(results);
}

function preload()
{
    img=loadImage("dog_cat.jpg");
}

function draw()
{
    image(img,0,0,650,400);
    fill("#FF0000");
    text("dog",60,80);
    noFill();
    stroke("#FF0000");
    rect(40,60,450,350);
    fill("blue");
    text("cat",300,80);
    noFill();
    stroke("blue");
    rect(280,70,300,300);
}