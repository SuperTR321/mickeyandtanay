Webcam.attach("#web_camera");
camera = document.getElementById("web_camera");

Webcam.set({
    width:300,
    height:200,
    image_format: "png",
    png_quality:90
});

function take_snapshot(){
    Webcam.snap(function(data_uri)
    {
        document.getElementById("result").innerHTML = '<img id="ImgCapture" src="'+ data_uri +'">'
    });
}

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/w0oSJa-DL/model.json",modelLoaded)

function modelLoaded(){
    console.log("Model Is Loaded")
}

function identify_images(){
    img = document.getElementById("ImgCapture");
    classifier.classify(img,gotResult);
}
function gotResult(error, result){
    if(error){
        console.error(error);
    }
    else{console.log(result)
    document.getElementById('objectname').innerHTML = result[0].label
    document.getElementById('accurancyname').innerHTML = result[0].confidence.toFixed(5)};
}