const carDoorBubble = document.getElementById("car-door-bubble");
const carBubble = document.getElementById("car-bubble");

carDoorBubble.addEventListener("click", function () {
  alert("You have clicked on the car door");
});
carBubble.addEventListener("click", function () {
  alert("you have clicked on the car");
});

const carDoorCapture = document.getElementById("car-door-capture");
const carCapture = document.getElementById("car-capture");

carDoorCapture.addEventListener(
  "click",
  function () {
    alert("You have clicked on the car door");
  },
  true
);
carCapture.addEventListener(
  "click",
  function () {
    alert("You have clicked on the car");
  },
  true
);
