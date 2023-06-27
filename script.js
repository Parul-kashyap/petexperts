// Questions aur Answers ke link
var faq1 = document.getElementById("pg3Q1");
var faq2 = document.getElementById("pg3Q2");
var faq3 = document.getElementById("pg3Q3");
var faq4 = document.getElementById("pg3Q4");
var faqA1 = document.getElementById("pg3Ans1");
var faqA2 = document.getElementById("pg3Ans2");
var faqA3 = document.getElementById("pg3Ans3");
var faqA4 = document.getElementById("pg3Ans4");

var pg3height = document.getElementById('pg3');

// var gototop = document.getElementById("gotop");

function faqQ1(){
  if(faqA1.style.display==="block"){
    faqA1.style.display="none";
    faq1.style.backgroundColor="black";
    pg3height.style.height="700px";
  }
  else{
    faqA1.style.display="block";
    faq1.style.backgroundColor="#9800ff";
    pg3height.style.height="1050px";
  }
}

function faqQ2(){
  if(faqA2.style.display==="block"){
    faqA2.style.display="none";
    faq2.style.backgroundColor="black";
    pg3height.style.height="700px";
  }
  else{
    faqA2.style.display="block";
    faq2.style.backgroundColor="#9800ff";
    pg3height.style.height="1050px";
  }
}
function faqQ3(){
  if(faqA3.style.display==="block"){
    faqA3.style.display="none";
    faq3.style.backgroundColor="black";
    pg3height.style.height="700px";
  }
  else{
    faqA3.style.display="block";
    faq3.style.backgroundColor="#9800ff";
    pg3height.style.height="1050px";
  }
}
function faqQ4(){
  if(faqA4.style.display==="block"){
    faqA4.style.display="none";
    faq4.style.backgroundColor="black";
    pg3height.style.height="700px";
  }
  else{
    faqA4.style.display="block";
    faq4.style.backgroundColor="#9800ff";
    pg3height.style.height="1050px";
  }
}


//=================================== GO ON TOP BUTTON CODE ================================
window.onscroll = function() { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
    document.getElementById("gotopbtn").style.display = "block";
  } else {
    document.getElementById("gotopbtn").style.display = "none";
  }
}

function goToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// BOOK NOW CLICK DETAILS FILL krne ke liyea NExt PAGE OPen

var pg2_1displayNone = document.getElementsByClassName("pg2_1displayNone");
var pg2_1details = document.getElementById("pg2_1details");

function detailfill(){
  pg2_1displayNone[0].style.display = "none";
  pg2_1displayNone[1].style.display = "none";
  pg2_1displayNone[2].style.display = "none";
  pg2_1displayNone[3].style.display = "none";
  pg2_1displayNone[4].style.display = "none";
  pg2_1displayNone[5].style.display = "none";
  pg2_1details.style.display = "block";
}

// TIME SLOT DROP DOWN

var slot7_8 = document.getElementById("slot7_8");

function dropdown(){
  if(slot7_8.style.display === "block"){
    slot7_8.style.display = "none";
  }
  else{
    slot7_8.style.display = "block";
  }
}
