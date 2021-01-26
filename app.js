'use strict';
// Empty array to pass through random images and to check and make sure the same images do not pull up 
var indexPictures = [];
var arrayImages = [];


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
new SeriesImage('images/bag.jpg', 'bag');
new SeriesImage('images/banana.jpg', 'bannana');
new SeriesImage('images/bathroom.jpg', 'bathroom');
new SeriesImage('images/boots.jpg', 'boots');
new SeriesImage('images/breakfast.jpg', 'breakfast');
new SeriesImage('images/bubblegum.jpg', 'bubblegum');
new SeriesImage('images/chair.jpg', 'chair');
new SeriesImage('images/cthulhu.jpg', 'chtulhu');
new SeriesImage('images/dog-duck.jpg', 'dog-duck');
new SeriesImage('images/dragon.jpg', 'dragon');
new SeriesImage('images/pen.jpg', 'pen');
new SeriesImage('images/pet-sweep.jpg', 'pet-sweep');
new SeriesImage('images/scissors.jpg', 'scissors');
new SeriesImage('images/shark.jpg', 'shark');
new SeriesImage('images/sweep.jpg', 'sweep');
new SeriesImage('images/tautaun.jpg', 'tautaun');
new SeriesImage('images/unicorn.jpg', 'unicorn');
new SeriesImage('images/usb.gif', 'usb');
new SeriesImage('images/water-can.jpg', 'water-can');
new SeriesImage('images/wine-glass.jpg', 'wine-glass');
console.log(SeriesImage.allImages);


// select elements from my HTML to render goat stuff
var imageContainer = document.getElementById('image-container');
var leftImageDOM = document.getElementById('left-image');
var centerImageDOM = document.getElementById('center-image');
var rightImageDOM = document.getElementById('right-image');

// generates three random images and compares the random images to check and see if they are the same, if they happen to be 
function generateRandomImages() {
  // randomIndex 
  for (var i = 0; i < 3; i++) {
    var randomIndex = Math.random(Math.random() * SeriesImage.allImages.lenth);
    while (indexPictures.includes(randomIndex)) {Math.random(Math.random() * SeriesImage.allImages.lenth);
    }
    // console.log(randomIndex);
    arrayImages[i] = SeriesImage.allImages[randomIndex];
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
// function renderImages(leftImage, centerImage, rightImage) {
//   leftImageDOM.src = leftImage.image;
//   leftImage.timesShown++;

//   centerImageDOM.src = centerImage.image;
//   centerImage.timesShown++;

//   rightImageDOM.src = rightImage.image;
//   rightImage.timesShown++;
// }
// Pulls the random image generator from 53 and ties in with the random index
var randomIndex = generateRandomImages();
renderImages(randomIndex[0], randomIndex[1], randomIndex[2]);

imageContainer.addEventListener('click', function(event) {
  console.log(event.target.id);
  for (var i = 0; i < SeriesImage.allImages.length; i++) {
    if (event.target.src.includes(SeriesImage.allImages[i].image)) {
      SeriesImage.allImages[i].timesClicked++;
      console.log(SeriesImage,allImages[i]);
    }
  }
  var newImages = generateRandomImages();
  renderImages(newImages [0],newImages [1], newImages [2]);
});
