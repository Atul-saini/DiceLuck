var ran = Math.floor(Math.random() * 6 )+ 1;
var img = "images/"+ "dice" + ran + ".png";

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", img);
var ran2 = Math.floor(Math.random() * 6 )+ 1;
var img2= "images/" + "dice"+ ran2+ ".png";
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",img2);

if(ran > ran2){
  document.getElementById("change").innerHTML = "Ananya "
}
else if(ran < ran2){
  document.getElementById("change").innerHTML = "Atul "
}
else {
  document.getElementById("change").innerHTML = "Draw"

}
