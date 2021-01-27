"use strict";
// Empty array to pass through random images and to check and make sure the same images do not pull up
// Global Arrays
var arrayImages = [];
var indexPictures = [];

// select elements from my HTML to render the images/ Variables
var imageContainer = document.getElementById("image-container");
var leftImageDOM = document.getElementById("left-image");
var centerImageDOM = document.getElementById("center-image");
var rightImageDOM = document.getElementById("right-image");
var roundsOfVoting = 25;

// Constructing the function for all the images on the SeriesImage Constructor
function SeriesImage(image, name) {
  this.timesClicked = 0;
  this.timesShown = 0;
  this.image = image;
  this.name = name;

  SeriesImage.allImages.push(this);
}
SeriesImage.allImages = [];

// creates the createImage, and runs the operations within the constructor
new SeriesImage("images/bag.jpg", "bag");
new SeriesImage("images/banana.jpg", "banana");
new SeriesImage("images/bathroom.jpg", "bathroom");
new SeriesImage("images/boots.jpg", "boots");
new SeriesImage("images/breakfast.jpg", "breakfast");
new SeriesImage("images/bubblegum.jpg", "bubblegum");
new SeriesImage("images/chair.jpg", "chair");
new SeriesImage("images/cthulhu.jpg", "cthulhu");
new SeriesImage("images/dog-duck.jpg", "dog-duck");
new SeriesImage("images/dragon.jpg", "dragon");
new SeriesImage("images/pen.jpg", "pen");
new SeriesImage("images/pet-sweep.jpg", "pet-sweep");
new SeriesImage("images/scissors.jpg", "scissors");
new SeriesImage("images/shark.jpg", "shark");
new SeriesImage("images/sweep.png", "sweep");
new SeriesImage("images/tauntaun.jpg", "tauntaun");
new SeriesImage("images/unicorn.jpg", "unicorn");
new SeriesImage("images/usb.gif", "usb");
new SeriesImage("images/water-can.jpg", "water-can");
new SeriesImage("images/wine-glass.jpg", "wine-glass");
console.log(SeriesImage.allImages);

// generates three random images and compares the random images to check and see if they are the same, if they happen to be it will change the image
function generateRandomImages() {
  // randomIndex
  for (var i = 0; i < 3; i++) {
    var randomIndex = Math.floor(Math.random() * SeriesImage.allImages.length);
    while (indexPictures.includes(randomIndex)) {
      randomIndex = Math.floor(Math.random() * SeriesImage.allImages.length);
    }
    // console.log(randomIndex);
    arrayImages[i] = SeriesImage.allImages[randomIndex];
    console.log(randomIndex);
  }
  return arrayImages;
}

// renders the images to the HTML page
function renderImages(leftImage, centerImage, rightImage) {
  leftImageDOM.src = leftImage.image;

  leftImage.timesShown++;

  centerImageDOM.src = centerImage.image;
  centerImage.timesShown++;

  rightImageDOM.src = rightImage.image;
  rightImage.timesShown++;
}

// Click Event Listener and Event Listener removal
var totalClicks = 0;
imageContainer.addEventListener("click", addClickCount);

function addClickCount(event) {
  console.log(event.target.id);
  for (var i = 0; i < SeriesImage.allImages.length; i++) {
    if (event.target.src.includes(SeriesImage.allImages[i].image)) {
      SeriesImage.allImages[i].timesClicked++;
      totalClicks++;
      console.log(SeriesImage.allImages[i], totalClicks);
    }
  }
  console.log(totalClicks);
  if (totalClicks === 25) {
    imageContainer.removeEventListener("click", addClickCount);
    generateData();
  }
  generateRandomImages();
  renderImages(arrayImages[0], arrayImages[1], arrayImages[2]);
}

generateRandomImages();
renderImages(arrayImages[0], arrayImages[1], arrayImages[2]);

// Results list
function resultList() {
  var myList = document.getElementById("listResults");
  for (var i = 0; i < SeriesImage.allImages.length; i++) {
    var liEl = document.createElement("li");
    liEl.innerText =
      SeriesImage.allImages[i].name + SeriesImage.allImages[i].timesClicked;
    console.log(SeriesImage.allImages[i]);
    myList.appendChild(liEl);
    console.log(liEl.innerHTML);
  }
}

// the button on our HTML page needs to trigger an event listener, the event listener needs to push the vaules of our
var buttonClicked = document.getElementById("addButton");
buttonClicked.addEventListener("click", resultList);

// Chart Element
var ctx = document.getElementById("myChart").getContext("2d");
var timesClicked = [];
var timesShown = [];
var productName = [];

function generateData2() {
  for (var i = 0; i < SeriesImage.allImages.length; i++) {
    timesClicked.push(SeriesImage.allImages[i].timesClicked);
    timesShown.push(SeriesImage.allImages[i].timesShown);
    productName.push(SeriesImage.allImages[i].name);
  }
}

console.log(productName, "product name array");
console.log(timesShown, "times shown array");
console.log(timesClicked, "times click array");

function generateData() {
  generateData2();
  var myChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: productName,
      datasets: [
        {
          label: "Times Clicked",
          data: timesClicked,
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)",
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)",
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)",
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)",
            "rgba(255, 159, 64, 0.2)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)",
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)",
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)",
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)",
            "rgba(255, 159, 64, 0.2)",
          ],
          borderWidth: 1,
        },
        {
          label: "Times Shown",
          data: timesShown,
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)",
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)",
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)",
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)",
            "rgba(255, 159, 64, 0.2)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)",
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)",
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)",
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)",
            "rgba(255, 159, 64, 0.2)",
          ],
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
            },
          },
        ],
      },
    },
  });
}
