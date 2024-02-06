function handleButtonClick() {
  alert("Yay! You said yes! 😍");
}

counter = 0

document.addEventListener("DOMContentLoaded", function () {
  const questionContainer = document.getElementById("question-container");
  const warningContainer = document.getElementById("warning-container");
  const happyContainer = document.getElementById("happy-container");
  const noButton = document.getElementById("no-button");

  noButton.addEventListener("mouseover", function (event) {
    const top = getRandomNumber((questionContainer.offsetHeight - noButton.offsetHeight)*0.3);
    const left = getRandomNumber((questionContainer.offsetWidth - noButton.offsetWidth)*0.3);

    noButton.style.top = top+"px"
    noButton.style.left = left+"px"

    counter++

    if (counter % 10 == 0){
      $("#question-container").fadeOut('fast').delay(5000);
      $("#warning-container").fadeIn('slow').animate({left: '250px'});;
    }

    console.log(counter)
  });

  const getRandomNumber = (num) => {
    const ranNum = Math.random();
    const posNeg = ranNum < 0.5 ? -ranNum : ranNum;
    const val = Math.floor(posNeg * num);
    return val;
  };
});

