const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay))

const getRandomNumber = (num) => {
  const ranNum = Math.random();
  const posNeg = ranNum < 0.5 ? -ranNum : ranNum;
  const val = Math.floor(posNeg * num);
  return val;
};

function getNumberFromDimension(dimension){
  return parseInt(dimension.split("px")[0])
}

let counter = 0
const countdownDate = new Date("February 17, 2024 00:00:00").getTime();

document.addEventListener("DOMContentLoaded", function () {
  const questionContainer = $("#question-container");
  const noButton = $("#no-button")
  const yesButton = $("#yes-button");
  const noContainer = $("#no-container");
  const tryAgainButton = $("#try-again-button");
  const yesContainer = $("#yes-container");
  const countdown = $("#countdown")

  noButton.on('mouseover click', function () {
    let top = getRandomNumber((window.innerHeight - (getNumberFromDimension(questionContainer.css("height"))))/2)*0.5;
    if (getNumberFromDimension(noButton.css("top")) < 0){
      top = Math.abs(top) + getNumberFromDimension(questionContainer.css("height"))/2
    } else {
      top = -Math.abs(top) - getNumberFromDimension(questionContainer.css("height"))/2
    }
    let left = getRandomNumber((window.innerWidth - (getNumberFromDimension(questionContainer.css("width"))))/2)*0.5;
    if (getNumberFromDimension(noButton.css("left")) < 0){
      left = Math.abs(left) + getNumberFromDimension(questionContainer.css("width"))/2
    } else {
      left = -Math.abs(left) - getNumberFromDimension(questionContainer.css("width"))/2
    }

    noButton.css({"top": top+"px", "left": left+"px"})
    yesButton.css({"height": (getNumberFromDimension(yesButton.css("height"))*1.1)+"px", "width": (getNumberFromDimension(yesButton.css("width"))*1.1)+"px"})

    counter++

    if (counter % 5 == 0) {
      questionContainer.hide();
      $("#no-container h1").html(
        "How many times are we going to do this?" + "<br>" +
        "You've tried clicking it " + counter + " times already" + "<br>" +
        "It's not going to work my love! You can't say no to me :)")
      noContainer.delay(500).show();
    }

    console.log(counter)
  });

  tryAgainButton.on("click", function () {
    noContainer.hide();
    questionContainer.delay(500).show();
  });

  yesButton.on("click", function () {
    console.log("yes clicked");
    questionContainer.hide();
    yesContainer.show();

    const x = setInterval(function () {
      const now = new Date().getTime();
      const timeLeft = countdownDate - now;

      const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

     countdown.html(days + "d " + hours + "h " + minutes + "m " + seconds + "s ");

      if (timeLeft < 0) {
        clearInterval(x);
       countdown.html("THE VALENTINE GETAWAY IS TODAY!");
      }
    }, 1000);
  });
});