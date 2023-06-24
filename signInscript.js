

//===================================== EMAIL ME THE DETAILS OF CUSTOMER =========================

function SendMail(){
  // FETCHING THE COMPONENTS VIA ID's
  var name = document.getElementById("fullname");
  var phoneNo = document.getElementById("phone_no");
  var trialDate = document.getElementById("trial_date");
  var address = document.getElementById("address");

  const wait = document.getElementById("wait-msg");
  const danger = document.getElementById("danger-msg");

  // FIELDS CAN'T BE EMPTY MESSAGE
  if(name.value === '' || phoneNo.value === '' || trialDate.value === '' || address.value === ''){
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
  var params = {
    from_name : document.getElementById("fullname").value,
    full_name : document.getElementById("fullname").value,
    phone_no : document.getElementById("phone_no").value,
    trial_date : document.getElementById("trial_date").value,
    address : document.getElementById("address").value
  }
    emailjs.send("service_ymsxwme","template_abhgthz", params).then(function(res) {
      alert("Your Free Session is Booked..")
    })
    // .catch((err)=> console.log(err));
  }
}
