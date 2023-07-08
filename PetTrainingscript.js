//===================================== EMAIL ME THE DETAILS OF CUSTOMER =========================

// FREE TRAINING SESSION OF DOG

function SendMail(){
  // FETCHING THE COMPONENTS VIA ID's
  var name = document.getElementById("parentName");
  var phoneNo = document.getElementById("parentNumber");
  var address = document.getElementById("parentAddress");

  var wait = document.getElementById("wait-msg");
  var danger = document.getElementById("danger-msg");

  // FIELDS CAN'T BE EMPTY MESSAGE
  if(name.value === '' || phoneNo.value === '' || address.value === ''){
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
  var param = {
    from_name : document.getElementById("parentName").value,
    full_name : document.getElementById("parentName").value,
    phone_no : document.getElementById("parentNumber").value,
    address : document.getElementById("parentAddress").value
  }
    emailjs.send("service_ymsxwme","template_avh6k3a", param).then(function(res) {
      alert("Your Free Dog Training Session is Booked..")
    })
    // .catch((err)=> console.log(err));
  }
}
