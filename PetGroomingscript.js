// DETAILS FIRST PAGE NAME AND PHONE NUMBER , SERVICE

function nextProceed(){
  var pg1boxContent = document.getElementById("boxContent");
  var pg1boxContent2 = document.getElementById("boxContent2");
  pg1boxContent.style.display = "none";
  pg1boxContent2.style.display = "block";
}


// BACK BUTTON FOR GROOMING

function backGrooming(){
  var pg1boxContent =  document.getElementById("boxContent");
  var pg1boxContent2 = document.getElementById("boxContent2");
  pg1boxContent.style.display = "block";
  pg1boxContent2.style.display = "none";
}

//===================================== EMAIL ME THE DETAILS OF CUSTOMER =========================

// FREE TRAINING SESSION OF DOG


function SendMailGrooming(){
  // FETCHING THE COMPONENTS VIA ID's
  var name = document.getElementById("nameGrooming");
  var phoneNo = document.getElementById("numberGrooming");
  var address = document.getElementById("addressGrooming");
  var date = document.getElementById("dateGrooming");
  // TIME SLOTS FOR GROOMING
  var morning = document.getElementById("morningGrooming");
  var afternoon = document.getElementById("afternoonGrooming");
  var evening = document.getElementById("eveningGrooming");

  // WHICH PET
  var dog = document.getElementById("dog");
  var cat = document.getElementById("cat");

  // SERVICES
  var service1 = document.getElementById("service1");
  var service2 = document.getElementById("service2");
  var service3 = document.getElementById("service3");
  var service4 = document.getElementById("service4");
  var service5 = document.getElementById("service5");

  // MESSAGES AFTER CLICKING BOOK NOW BUTTON
  var wait = document.getElementById("wait-msg");
  var danger = document.getElementById("danger-msg");




  // FIELDS CAN'T BE EMPTY MESSAGE
  if(name.value === '' || phoneNo.value === '' || address.value === '' || date.value === '' || morning.value === '' || afternoon.value ==='' || evening.value === ''){
     danger.style.display = "block";
     }
     else{
       danger.style.display = "none";
        wait.style.display = "block";

        setTimeout(() =>{
            danger.style.display = "none";
            wait.style.display = 'none';
          }, 4000);

// CODE FOR EMAIL VIA EMAIL.JS (please don't make any change)
  var paramGrooming = {
    from_name : document.getElementById("nameGrooming").value,
    nameGrooming : document.getElementById("nameGrooming").value,
    phoneGrooming : document.getElementById("numberGrooming").value,
    addressGrooming : document.getElementById("addressGrooming").value,
    dateGrooming : document.getElementById("dateGrooming").value,
    petGrooming : document.querySelector("input[name='pet']:checked").value,
    serviceGrooming : document.querySelector("input[name='service']:checked").value,
    timeSlot : document.querySelector("input[name='timeSlot']:checked").value
  }
    emailjs.send("service_ymsxwme","template_avh6k3a", paramGrooming).then(function(res) {
      alert("Your Pet Grooming Session is Booked..")
    })
    // .catch((err)=> console.log(err));
  }
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
