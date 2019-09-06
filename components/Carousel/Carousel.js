/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/
let visibleIndex = 0;
const carouselImages = [
  "./assets/carousel/mountains.jpeg",
  "./assets/carousel/computer.jpeg",
  "./assets/carousel/trees.jpeg",
  "./assets/carousel/turntable.jpeg"
];

function CarouselCard(data) {
  const carouselDiv = document.createElement("div");
  carouselDiv.classList.add("carousel");

  const leftDiv = document.createElement("div");
  leftDiv.textContent = "<";
  leftDiv.classList.add("left-button");

  const rightDiv = document.createElement("div");
  rightDiv.textContent = ">";
  rightDiv.classList.add("right-button");

  carouselDiv.append(leftDiv);

  //Creating img, with index as a data attribute
  let count = 0;
  data.forEach(img => {
    let carouselImg = document.createElement("img");
    carouselImg.src = img;
    carouselImg.classList.add("image");
    carouselImg.dataset.indexNumber = count++;
    carouselDiv.append(carouselImg);
  });

  carouselDiv.append(rightDiv);

  //EventListeners
  leftDiv.addEventListener("click", e => {
    let newIndex = updateIndex(false, visibleIndex);
    displayImg(visibleIndex, newIndex);
    visibleIndex = newIndex;
  });

  rightDiv.addEventListener("click", e => {
    let newIndex = updateIndex(true, visibleIndex);
    displayImg(visibleIndex, newIndex);
    visibleIndex = newIndex;
  });

  return carouselDiv;
}

const carouselContainer = document.querySelector(".carousel-container");
carouselContainer.appendChild(CarouselCard(carouselImages));
document.querySelector(".image").style.display = "block";

function getIndexes() {
  const totalImages = document.querySelectorAll(".image");
  totalImagesArr = [...totalImages];
  let indexArr = totalImagesArr.map(img => img.dataset.indexNumber);

  return indexArr;
}

function displayImg(lastIndex, currentIndex) {
  const totalImages = document.querySelectorAll(".image");
  totalImages[lastIndex].style.display = "none";
  totalImages[currentIndex].style.display = "block";
}

function updateIndex(bool, currentIndex) {
  let indexes = getIndexes();
  let result = currentIndex;

  if (bool) {
    if (currentIndex == indexes.length - 1) {
      result = 0;
    } else {
      result += 1;
    }
  } else {
    if (currentIndex == 0) {
      result = indexes.length - 1;
    } else {
      result -= 1;
    }
  }

  return result;
}
