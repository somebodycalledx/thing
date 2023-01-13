function Start_Classification() {
    navigator.mediaDevices.getUserMedia({ audio: true });
    classifier - ml5.soundClassifier("", modelReady);
}

function modelReady() {
    //classifier.classify(gotResults);
    console.log("Model Is Ready")
}

function gotResults(error, results) {
    if (error) {
        console.error(error);
    }
    else {
        console.log(results)
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("results_label").innerHTML = "I can Hear - "+results[0].label;
        document.getElementById("results_confidence").innerHTML = "Acuuracy - "+(results[0].confidence*100).toFixed(2)+"%";
        document.getElementById("results_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("results_confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";

    }
}
