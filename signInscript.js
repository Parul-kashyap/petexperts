
//===================================== EMAIL ME THE DETAILS OF CUSTOMER =========================

function SendMail(){
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
