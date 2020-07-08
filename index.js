const imageArray = ["./images/image0.png", "./images/image1.png", "./images/image2.png", "./images/image3.png"]

var index = 0;

function leftButton() {
  index--;
  if (index < 0) {
    console.log(index)
    index = imageArray.length - 1;
  }
   document.querySelector(".image").style.backgroundImage = `url(${imageArray[index]})`;
}

function rightButton() {
  index++;
  if (index > imageArray.length - 1) {
    index = 0;
  }
  document.querySelector(".image").style.backgroundImage = `url(${imageArray[index]})`;
}
