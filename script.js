function checkGrade(){
    var grade = document.getElementById('grade').value;

    if(grade >= 0 && grade < 40){
        display.innerHTML = "F - Fail🥴";
        display.style.color = "#FF004D";
        audio1.play();
    }
    else if(grade >= 40 && grade < 45){
        display.innerHTML = "E - Pass😞"
        display.style.color = "#FF004D";
        audio2.play();
    }
    else if(grade >= 45 && grade < 50){
        display.innerHTML = "D - Average😬"
        display.style.color = "#FFC459";
        audio3.play();
    }
    else if(grade >= 50 && grade < 60){
        display.innerHTML = "C - Credit🤔"
        display.style.color = "#FFF00";
        audio4.play();
    }
    else if(grade >= 60 && grade < 75){
        display.innerHTML = "B - Good🙂"
        display.style.color = "#008000";
        audio5.play();
    }
    else if(grade >= 75 && grade <= 100){
        display.innerHTML = "A - Excellent😀";
        display.style.color = "#008000";
        audio6.play();
    } 
    else{
        display.innerHTML = "Not recognised";
        display.style.color = "#000000";
        audio7.play();
    }

    if(grade == ""){
        display.innerHTML = "Not recognised";
           display.style.color = "#000000";
           audio7.play();
   }
   
}

function play() {
  var audio7 = document.getElementById("audio7");
  var audio6 = document.getElementById("audio6");
  var audio5 = document.getElementById("audio5");
  var audio4 = document.getElementById("audio4");
  var audio3 = document.getElementById("audio3");
  var audio2 = document.getElementById("audio2");
  var audio1 = document.getElementById("audio1");
}
