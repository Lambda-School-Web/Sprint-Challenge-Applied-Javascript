// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

const topicsContainer = document.querySelector(".topics");
axios
  .get("https://lambda-times-backend.herokuapp.com/topics")
  .then(res => {
    let topicsArr = ["All", ...res.data.topics];

    topicsArr.forEach(topic => {
      topicsContainer.append(Topic(topic));
    });
  })
  .catch(err => console.error(err));

function Topic(data) {
  const topicDiv = document.createElement("div");
  topicDiv.classList.add("tab");
  topicDiv.textContent = data;

  return topicDiv;
}

topicsContainer.append(Topic());
