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
var pg2_1details2 = document.getElementById("pg2_1details2");
var pg2_1details3 = document.getElementById("pg2_1details3");

function detailfill(){
  pg2_1displayNone[0].style.display = "none";
  pg2_1displayNone[1].style.display = "none";
  pg2_1displayNone[2].style.display = "none";
  pg2_1displayNone[3].style.display = "none";
  pg2_1displayNone[4].style.display = "none";
  pg2_1displayNone[5].style.display = "none";
  pg2_1displayNone[6].style.display = "none";
  pg2_1displayNone[7].style.display = "none";
  pg2_1displayNone[8].style.display = "none";
  pg2_1displayNone[9].style.display = "none";
  pg2_1displayNone[10].style.display = "none";
  pg2_1displayNone[11].style.display = "none";
  pg2_1displayNone[12].style.display = "none";
  pg2_1displayNone[13].style.display = "none";
  pg2_1displayNone[14].style.display = "none";
  pg2_1displayNone[15].style.display = "none";
  pg2_1displayNone[16].style.display = "none";
  pg2_1displayNone[17].style.display = "none";
  pg2_1details.style.display = "block";
  pg2_1details2.style.display = "block";
  pg2_1details3.style.display = "block";
}

// TIME SLOT DROP DOWN //////////////////////////////////////////////////

// var slot7_8 = document.getElementById("slot7_8");
//
// function dropdown(){
//   if(slot7_8.style.display === "block"){
//     slot7_8.style.display = "none";
//   }
//   else{
//     slot7_8.style.display = "block";
//   }
// }


// BACK BUTTON

function back() {
  var pg2_1displayNone = document.getElementsByClassName("pg2_1displayNone");
  var pg2_1details = document.getElementById("pg2_1details");
  var pg2_1details2 = document.getElementById("pg2_1details2");
  var pg2_1details3 = document.getElementById("pg2_1details3");
  pg2_1displayNone[0].style.display = "block";
  pg2_1displayNone[1].style.display = "block";
  pg2_1displayNone[2].style.display = "block";
  pg2_1displayNone[3].style.display = "block";
  pg2_1displayNone[4].style.display = "block";
  pg2_1displayNone[5].style.display = "block";
  pg2_1displayNone[6].style.display = "block";
  pg2_1displayNone[7].style.display = "block";
  pg2_1displayNone[8].style.display = "block";
  pg2_1displayNone[9].style.display = "block";
  pg2_1displayNone[10].style.display = "block";
  pg2_1displayNone[11].style.display = "block";
  pg2_1displayNone[12].style.display = "block";
  pg2_1displayNone[13].style.display = "block";
  pg2_1displayNone[14].style.display = "block";
  pg2_1displayNone[15].style.display = "block";
  pg2_1displayNone[16].style.display = "block";
  pg2_1displayNone[17].style.display = "block";
  pg2_1details.style.display = "none";
  pg2_1details2.style.display = "none";
  pg2_1details3.style.display = "none";
}

// SWIPER JS ////////////////////////////////////////////////
// var swiper = new Swiper(".swiper", {
//       slidesPerView: 1,
//       spaceBetween: 30,
//       loop: true,
//       pagination: {
//         el: ".swiper-pagination",
//         clickable: true,
//       },
//       navigation: {
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev",
//       },
//     });

// GO NEXT AND PREVIOUS BUTTON

function goPrev(){
  var pg2_11 = document.getElementById("pg2_11");
  var pg2_12 = document.getElementById("pg2_12");
  var pg2_13 = document.getElementById("pg2_13");
  if(pg2_11.style.display === "block"){
    pg2_11.style.display = "none";
    pg2_12.style.display = "none";
    pg2_13.style.display = "block";
  }
  else if(pg2_12.style.display === "block"){
    pg2_11.style.display = "block";
    pg2_12.style.display = "none";
    pg2_13.style.display = "none";
  }
  else {
    pg2_11.style.display = "none";
    pg2_12.style.display = "block";
    pg2_13.style.display = "none";
  }
}

function goNext(){
  var pg2_11 = document.getElementById("pg2_11");
  var pg2_12 = document.getElementById("pg2_12");
  var pg2_13 = document.getElementById("pg2_13");
  if(pg2_11.style.display === "block"){
    pg2_11.style.display = "none";
    pg2_12.style.display = "block";
    pg2_13.style.display = "none";
  }
  else if(pg2_12.style.display === "block"){
    pg2_11.style.display = "none";
    pg2_12.style.display = "none";
    pg2_13.style.display = "block";
  }
  else {
    pg2_11.style.display = "block";
    pg2_12.style.display = "none";
    pg2_13.style.display = "none";
  }

}
