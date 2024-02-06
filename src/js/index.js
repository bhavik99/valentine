function handleButtonClick() {
  
  alert("Yay! You said yes! 😍");
}

const getRandomNumber = (num) => {
    const ranNum = Math.random();
    const posNeg = ranNum < 0.5 ? -ranNum : ranNum;
    const val = Math.floor(posNeg * num);
    return val;
  };

counter = 0


document.addEventListener("DOMContentLoaded", function () {
  const questionContainer = document.getElementById("question-container");
  const noContainer = document.getElementById("no-container");
  const yesContainer = document.getElementById("happy-container");
  const noButton = document.getElementById("no-button");
  const yesButton = document.getElementById("yes-button");

  noButton.addEventListener("mouseover", function (event) {
    const top = getRandomNumber((questionContainer.offsetHeight - noButton.offsetHeight)*0.3);
    const left = getRandomNumber((questionContainer.offsetWidth - noButton.offsetWidth)*0.3);

    noButton.style.top = top+"px"
    noButton.style.left = left+"px"

    counter++

    if (counter % 2 == 0){
      $("#question-container").hide().delay(50000);
      $("#no-container").fadeIn('slow');;
    }

    console.log(counter)
  });

  noButton.addEventListener("click", function (event) {
    console.log("no clicked")
  });

  yesButton.addEventListener("click", function (event) {
    console.log("yes clicked")
  });
  
});
