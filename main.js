song1="";
song2="";
leftWristY="0";
leftWristX="0";
rightWristY="0";
rightWristX="0";
results="0";

function preload(){
    song1 = loadSound("music.mp3");
    song2 = loadSound("music2.mp3");

}

function loadSound(){

}

function setup(){
    canvas =  createCanvas(600, 500);
	canvas.center();
    video = createCapture(VIDEO);
	video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on("poses",gotPoses);


}





function modelLoaded(){
    console.log("PoseNet is intiallized!");
}

function gotPoses(results)
{
  if(results.length > 0)
  {
	rightWristX = results[0].pose.rightWrist.x;
	rightWristY = results[0].pose.rightWrist.y;
	console.log("rightWristX = " + rightWristX +" rightWristY = "+ rightWristY);

	leftWristX = results[0].pose.leftWrist.x;
	leftWristY = results[0].pose.leftWrist.y;
	console.log("leftWristX = " + leftWristX +" leftWristY = "+ leftWristY);
		
  }
}

function draw(){
    image(video, 0, 0, 600, 500);
}
