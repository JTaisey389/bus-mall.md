"use strict";

var totalClicks = 0;
var arrayImages = [];
var indexPictures = [];

function getMystuffFromStorage() {
  var productFromStorage = localStorage.getItem('productArray');
  console.log(productFromStorage);
  if (productFromStorage===null) {
    return null;
  }
  var parsedstoredTreasure = JSON.parse(productFromStorage);
  return parsedstoredTreasure;
}


// Constructing the function for all the images on the SeriesImage Constructor
function SeriesImage(image, name) {
  this.timesClicked = 0;
  this.timesShown = 0;
  this.image = image;
  this.name = name;
  
  SeriesImage.allImages.push(this);
}
SeriesImage.allImages = [];
var storageResults = getMystuffFromStorage();
console.log(storageResults, 'storageResults');
if (storageResults === null) {
  // here i create the functions that makes all of my products.
  makeProducts();
  
  
}
else  {
  // my storage results are going to be SeriesImage.allImages array
  SeriesImage.allImages = storageResults;
}

// select elements from my HTML to render the images


// creates the createImage, and runs the operations within the constructor
// This is creating the products ie = products
function getMystuffFromStorage() {
  var productFromStorage = localStorage.getItem('productArray');
  console.log(productFromStorage);
  if (productFromStorage===null) {
    return null;
  }
  var parsedstoredTreasure = JSON.parse(productFromStorage);
  return parsedstoredTreasure;
}

function makeProducts() {
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
}

var imageContainer = document.getElementById("image-container");
var leftImageDOM = document.getElementById("left-image");
var centerImageDOM = document.getElementById("center-image");
var rightImageDOM = document.getElementById("right-image");
var roundsOfVoting = 25;
// generates three random images and compares the random images to check and see if they are the same, if they happen to be it will change the image. Uses a while loop to check
function generateRandomImages() {
  var leftIndex = Math.floor(Math.random() * SeriesImage.allImages.length);
  var centerIndex = Math.floor(Math.random() * SeriesImage.allImages.length);
  var rightIndex = Math.floor(Math.random() * SeriesImage.allImages.length);
  
  while (rightIndex === leftIndex) {
    rightIndex = Math.floor(Math.random() * SeriesImage.allImages.length);
  }
  while (centerIndex === rightIndex || centerIndex === leftIndex) { centerIndex = Math.floor(Math.random() * SeriesImage.allImages.length);
  }
var leftImage = SeriesImage.allImages[leftIndex];
var centerImage = SeriesImage.allImages[centerIndex];
var rightImage = SeriesImage.allImages[rightIndex];

return [leftImage, centerImage, rightImage];
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
    let productsToBeStored = JSON.stringify(SeriesImage.allImages);
    localStorage.setItem('productArray', productsToBeStored);
    
  }
  var images = generateRandomImages();
  renderImages(images[0], images[1], images[2]);
}

var images = generateRandomImages();
  renderImages(images[0], images[1], images[2]);


// Add the local storage possibly in here

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

// let productFromStorage = localStorage.getItem('productArray');
// console.log(productFromStorage);

// let parsedstoredTreasure = JSON.parse(productFromStorage);
// let productsToBeStored = JSON.stringify(SeriesImage.allImages);

// localStorage.setItem('productArray', productsToBeStored);


