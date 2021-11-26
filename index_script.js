var randomNumber1 = Math.floor(Math.random()*6)+1;
var sourceImg1 = "images/img"+randomNumber1+".png"
document.querySelectorAll("img")[0].setAttribute("src",sourceImg1)


var randomNumber2 = Math.floor(Math.random()*6)+1;
var sourceImg2 = "images/img"+randomNumber2+".png"
document.querySelectorAll("img")[1].setAttribute("src",sourceImg2)




if (randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="😁 Suraj Win!"
}
else if (randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="😉 Kiran Win!"
}
else{
    document.querySelector("h1").innerHTML="😝 Draw!"
}