//target input and get value

//push value into an array

let weightData = [];

function renderWeight() {
    let ul = document.querySelector(".week-container")
    
    ul.innerHTML = weightData.map(function(weight) {
        return "<li>" + weight + "</li>";
    }).join("");
    
}

function getWeight() {
  let userWeight = document.querySelector(".weight-input").value;

  weightData.push(userWeight);
  renderWeight()
  console.log(weightData);
  document.querySelector(".form").reset();

  return false;
}