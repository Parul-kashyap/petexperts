//===================================== EMAIL ME THE DETAILS OF CUSTOMER =========================

// FREE TRAINING SESSION OF DOG

// 26 Session============================================================================================================

function SendMailWalking1(){
  // FETCHING THE COMPONENTS VIA ID's
  var name = document.getElementById("nameWalking1");
  var date = document.getElementById("dateWalking1");
  var address = document.getElementById("addressWalking1");
  // TIME SLOTS FOR 26 session
  var morning = document.getElementById("morningWalking1");
  var evening = document.getElementById("eveningWalking1");


  var wait = document.getElementById("wait-msg");
  var danger = document.getElementById("danger-msg");

  // FIELDS CAN'T BE EMPTY MESSAGE
  if(name.value === '' || address.value === '' || date.value === '' || morning.value === '' || evening.value === ''){
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
  var paramWalking = {
    from_name : document.getElementById("nameWalking1").value,
    nameWalking1 : document.getElementById("nameWalking1").value,
    dateWalking1 : document.getElementById("dateWalking1").value,
    addressWalking1 : document.getElementById("addressWalking1").value,

    timeSlot : document.querySelector("input[name='time']:checked").value,

  }
    emailjs.send("service_ymsxwme","template_abhgthz", paramWalking).then(function(res) {
      alert("Your Dog Walking Session is Booked..")
    })
    // .catch((err)=> console.log(err));
  }
}


// 52 Session ========================================================================================================

function SendMailWalking2(){
  // FETCHING THE COMPONENTS VIA ID's
  var name2 = document.getElementById("nameWalking2");
  var date2 = document.getElementById("dateWalking2");
  var address2 = document.getElementById("addressWalking2");


  var wait2 = document.getElementById("wait-msg2");
  var danger2 = document.getElementById("danger-msg2");

  // FIELDS CAN'T BE EMPTY MESSAGE
  if(name2.value === '' || date2.value === '' || address2.value === ''){
     danger2.style.display = "block";
     }
     else{
       danger2.style.display = "none";
        wait2.style.display = "block";

        setTimeout(() =>{
            danger2.style.display = "none";
            wait2.style.display = 'none';
          }, 4000);

// CODE FOR EMAIL VIA EMAIL.JS (please don't make any change)
  var paramWalking2 = {
    from_name : document.getElementById("nameWalking2").value,
    nameWalking2 : document.getElementById("nameWalking2").value,
    dateWalking2 : document.getElementById("dateWalking2").value,
    addressWalking2 : document.getElementById("addressWalking2").value
  }
    emailjs.send("service_ymsxwme","template_abhgthz", paramWalking2).then(function(res) {
      alert("Your Dog Walking Session is Booked..")
    })
    // .catch((err)=> console.log(err));
  }
}



// 78 Session ========================================================================================================

function SendMailWalking3(){
  // FETCHING THE COMPONENTS VIA ID's
  var name3 = document.getElementById("nameWalking3");
  var date3 = document.getElementById("dateWalking3");
  var address3 = document.getElementById("addressWalking3");


  var wait3 = document.getElementById("wait-msg3");
  var danger3 = document.getElementById("danger-msg3");

  // FIELDS CAN'T BE EMPTY MESSAGE
  if(name3.value === '' || address3.value === '' || date3.value === ''){
     danger3.style.display = "block";
     }
     else{
       danger3.style.display = "none";
        wait3.style.display = "block";

        setTimeout(() =>{
            danger3.style.display = "none";
            wait3.style.display = 'none';
          }, 4000);

// CODE FOR EMAIL VIA EMAIL.JS (please don't make any change)
  var paramWalking3 = {
    from_name : document.getElementById("nameWalking3").value,
    nameWalking3 : document.getElementById("nameWalking3").value,
    dateWalking3 : document.getElementById("dateWalking3").value,
    addressWalking3 : document.getElementById("addressWalking3").value
  }
    emailjs.send("service_ymsxwme","template_abhgthz", paramWalking3).then(function(res) {
      alert("Your Dog Walking Session is Booked..")
    })
    // .catch((err)=> console.log(err));
  }
}
