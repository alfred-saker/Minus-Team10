
function myFunction() {
  let check = document.getElementById("myLinks");
  if (check.style.display === "block") {
    check.style.display = "none";
  } else {
    check.style.display = "block";
  }
  }

var divUl = document.getElementsByClassName("blo1ul");
var titre = document.getElementsByClassName("titles1");
titre[0].addEventListener('click',afficheBlock0);
titre[1].addEventListener('click',afficheBlock1);
titre[2].addEventListener('click',afficheBlock2);


function afficheBlock0(){
    if (divUl[0].style.display === "block") 
    {
      divUl[0].style.display = "none";
    }else {
      divUl[0].style.display = "block";
   }
}
function afficheBlock1(){
    if (divUl[1].style.display === "block") 
    {
      divUl[1].style.display = "none";
    }else {
      divUl[1].style.display = "block";
   }
}
function afficheBlock2(){
    if (divUl[2].style.display === "block") 
    {
      divUl[2].style.display = "none";
    }else {
      divUl[2].style.display = "block";
   }
}




let popup = document.getElementById ("popup");

 function openPopup() {
    popup.classList.add("open-popup");
}
 function closePopup(){
    popup.classList.remove("open-popup");
}

