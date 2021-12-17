Webcam.set({
    width: 350, height: 300, 
    image_format:'png',
    png_quality:90
    });
    camera= document.getElementById("camera");
    Webcam.attach('#camera');
    
    
    function clickimage(){
    Webcam.snap(function(data_uri){
    document.getElementById("cameraresult").innerHTML = '<img id="photo" src="'+data_uri+'"/>';
    
    });
    }
    console.log('ml5 version-',ml5.version);
    classifiyer=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/aMrN-wXdR/model.json',modelloded);
    function modeloaded(){
    console.log('modelloaded');
    }