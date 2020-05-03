//target input and get value

//push value into an array

let weightData = [];

document.querySelector(".btn-submit").addEventListener("click", getWeight());

function getWeight() {
    let userWeight = document.querySelector(".weight-input").value
    
    weightData.push(userWeight);
    console.log(weightData);
    document.querySelector(".form").reset();
    return false;
}


