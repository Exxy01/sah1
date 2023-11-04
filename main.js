function setup(){
canvas = createCanvas(300, 300);
canvas.center();
video = createCapture(VIDEO);
video.hide;
classifier = ml5.imageClassifier("MobileNet", modelLoaded);

}
function draw(){
    image(video,0,0,300,300);
    classifier.classify(gotResults);
}
previous_result = "";
function modelLoaded(){
    console.log("Model is loaded");
}
function gotResults(error, results){
    if(error){
        console.error(error);
    }
    else if(results[0] > 0.5 && previous_result != results[0].label){
        console.log(results);
         previous_result = results[0].label;
         sus = window.speechSynthesis();
         recede = "Object detected is " + results[0].label;
         utterThisTastyGoldfish = speechSynthesisUtterance();
         sus.speak(utterThisTastyGoldfish);
         document.getElementById("slaps").innerHTML = results[0].label;
    }
}