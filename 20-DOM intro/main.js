//Adding Font family

const body = document.getElementById("body");
body.style.fontFamily = "sans-serif";

//Finding Elements By Id

const elementById = document.getElementById("uniqueId");
elementById.innerHTML = "Welcome To My Website";
elementById.style.fontSize = "25px";
elementById.style.color = "red";

//Finding Element(s) By TagName

const elementsByTagName = document.getElementsByTagName("p");
elementsByTagName[0].innerHTML = "This is A test";
elementsByTagName[0].style.color = "brown";
elementsByTagName[0].style.fontSize = "25px";
elementsByTagName[1].innerHTML = "This is another test";
elementsByTagName[1].style.color = "green";
elementsByTagName[1].style.fontSize = "30px";

//Finiding Element(s) by className
const elementByClassName = document.getElementsByClassName("classExample");
elementByClassName[0].innerHTML = "This is the class No 1";
elementByClassName[0].style.color = "purple";
elementByClassName[0].style.fontSize = "20px";
elementByClassName[1].innerHTML = "This is the class No 2";
elementByClassName[1].style.color = "Orange";
elementByClassName[1].style.fontSize = "19px";
//Finding Elements by object collections
const objectCollectionsElements = document.forms;

const tesToShow = "I Can See YOU!"
const textToShow2 = "You are DEAD!"

for(let i = 0; i < tesToShow.length; i++){
    setTimeout(function(){
        objectCollectionsElements[0][0].value += tesToShow[i];
    }, i * 100)
}
for(let i = 0; i < textToShow2.length; i ++){
    setTimeout(function(){
        objectCollectionsElements[0][1].value += textToShow2[i];
    }, i * 100)

}