// DETAILS FIRST PAGE NAME AND PHONE NUMBER , SERVICE

function nextProceed(){
  var pg1boxContent = document.getElementById("boxContent");
  var pg1boxContent2 = document.getElementById("boxContent2");
  pg1boxContent.style.display = "none";
  pg1boxContent2.style.display = "block";
}






















function goPrevgrooming(){
  var pggrooming2_21 = document.getElementById("pggrooming2_21");
  var pggrooming2_22 = document.getElementById("pggrooming2_22");
  var pggrooming2_23 = document.getElementById("pggrooming2_23");
  var pggrooming2_24 = document.getElementById("pggrooming2_24");
  var pggrooming2_25 = document.getElementById("pggrooming2_25");

  // PAGE GROOMING Instructions-------------
  if(pggrooming2_23.style.display === "block"){
    pggrooming2_21.style.display = "none";
    pggrooming2_22.style.display = "block";
    pggrooming2_23.style.display = "none";
    pggrooming2_24.style.display = "none";
    pggrooming2_25.style.display = "none";
  }
  else if(pggrooming2_22.style.display === "block"){
    pggrooming2_21.style.display = "block";
    pggrooming2_22.style.display = "none";
    pggrooming2_23.style.display = "none";
    pggrooming2_24.style.display = "none";
    pggrooming2_25.style.display = "none";
  }
  else if(pggrooming2_24.style.display === "block"){
    pggrooming2_21.style.display = "none";
    pggrooming2_22.style.display = "none";
    pggrooming2_23.style.display = "block";
    pggrooming2_24.style.display = "none";
    pggrooming2_25.style.display = "none";
  }
  else if(pggrooming2_25.style.display === "block"){
    pggrooming2_21.style.display = "none";
    pggrooming2_22.style.display = "none";
    pggrooming2_23.style.display = "none";
    pggrooming2_24.style.display = "block";
    pggrooming2_25.style.display = "none";
  }
  else {
    pggrooming2_21.style.display = "block";
    pggrooming2_22.style.display = "none";
    pggrooming2_23.style.display = "none";
    pggrooming2_24.style.display = "none";
    pggrooming2_25.style.display = "none";
    // pg2_2.style.height = "930px";
  }
}

function goNextgrooming(){
  // PAGE 2.2 ---------
  var pggrooming2_21 = document.getElementById("pggrooming2_21");
  var pggrooming2_22 = document.getElementById("pggrooming2_22");
  var pggrooming2_23 = document.getElementById("pggrooming2_23");
  var pggrooming2_24 = document.getElementById("pggrooming2_24");
  var pggrooming2_25 = document.getElementById("pggrooming2_25");

  // PAGE GROOMING Instructions-------------
  if(pggrooming2_22.style.display === "block"){
    pggrooming2_21.style.display = "none";
    pggrooming2_22.style.display = "none";
    pggrooming2_23.style.display = "block";
    pggrooming2_24.style.display = "none";
    pggrooming2_25.style.display = "none";
  }
  else if(pggrooming2_23.style.display === "block"){
    pggrooming2_21.style.display = "none";
    pggrooming2_22.style.display = "none";
    pggrooming2_23.style.display = "none";
    pggrooming2_24.style.display = "block";
    pggrooming2_25.style.display = "none";
  }
  else if(pggrooming2_24.style.display === "block"){
    pggrooming2_21.style.display = "none";
    pggrooming2_22.style.display = "none";
    pggrooming2_23.style.display = "none";
    pggrooming2_24.style.display = "none";
    pggrooming2_25.style.display = "block";
  }
  else if(pggrooming2_25.style.display === "block"){
    pggrooming2_21.style.display = "none";
    pggrooming2_22.style.display = "none";
    pggrooming2_23.style.display = "none";
    pggrooming2_24.style.display = "none";
    pggrooming2_25.style.display = "block";
  }
  else {
    pggrooming2_21.style.display = "none";
    pggrooming2_22.style.display = "block";
    pggrooming2_23.style.display = "none";
    pggrooming2_24.style.display = "none";
    pggrooming2_25.style.display = "none";

  }

}
