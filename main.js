nosey=0
nosex=0
function preload(){
lip=loadImage("Li.png")
}
function setup(){
    canvas=createCanvas(300,300)
    canvas.center()
    video=createCapture(VIDEO)
    video.size(300,300)
    video.hide()

    poseNet=ml5.poseNet(video,modelLoaded)
    poseNet.on('pose',gotPoses)
}
function modelLoaded(){
    console.log('PoseNet Is Initialized')
}
function gotPoses(results){
    if(results.length>0){
        console.log(results)
        nosex=results[0].pose.nose.x
        nosey=results[0].pose.nose.y
        console.log("nose x ="+results[0].pose.nose.x)
        console.log("nose y ="+results[0].pose.nose.y)
    }
}
function draw(){
    image(video,0,0,300,300)
    image(lip,nosex-15,nosey+15,35,35)
}
function photo(){
    save('Lip.png')
}