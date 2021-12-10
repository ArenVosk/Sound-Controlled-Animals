function startClassification(){
  navigator.mediaDevices.getUserMedia({audio: true});
  classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/MLd1JMAX7/model.json',modelReady);
}

function modelReady(){
  classifier.classify(gotResults);
}

function gotResults(error, results){
console.log("Got results");
}

function gotResults(error, results) {
  if (error) {
      console.log(error); 
  } else {
      console.log(results);
      random_number_r = Math.floor(Math.random() * 255) + 1;
      random_number_g = Math.floor(Math.random() * 255) + 1; 
      random_number_b = Math.floor(Math.random() * 255) + 1; 

      document.getElementById("result_label").innerHTML = 'I can hear - '+results[0].label;
      document.getElementById("result_confidence").innerHTML = 'Accuracy - '+(results[0].confidence*100).toFixed(2)+" %";
      document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
      document.getElementById("result_confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
  
      img = document.getElementById("dog");
      img1 = document.getElementById("cat");
      img2 = document.getElementById("wolf");

      if(results[0].label == "Dog"){
          img.src = 'dog gif for code.gif';
          img1.src = 'cat image for project.png';
          img2.src = 'wolf image for project.jpg';
      } else if (results[0].label == "Cat"){
          img.src = 'dog image for project.jpg';
          img1.src = 'Cat gif for code.gif';
          img2.src = 'wolf image for project.jpg';  
      } else if (results[0].label == "Wolf") {
          img.src = 'dog image for project.jpg';
          img1.src = 'cat image for project.png';
          img2.src = 'wolf gif for code.gif';
      }else{
          img.src = 'dog image for project.jpg';
          img1.src = 'cat image for project.png';
          img2.src = 'wolf image for project.jpg';
      }
  }
}