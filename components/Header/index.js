// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {
  const headerDiv = document.createElement("div");
  headerDiv.classList.add("header");

  const dateSpan = document.createElement("span");
  dateSpan.classList.add("date");
  dateSpan.textContent = "SMARCH 28, 2019";

  const titleH1 = document.createElement("h1");
  titleH1.textContent = "Lambda Times";

  const tempSpan = document.createElement("span");
  tempSpan.classList.add("temp");
  tempSpan.textContent = "98°";

  headerDiv.append(dateSpan, titleH1, tempSpan);

  return headerDiv;
}

const headerContainer = document.querySelector(".header-container");
headerContainer.append(Header());
