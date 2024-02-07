const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay))

const getRandomNumber = (num) => {
  const ranNum = Math.random();
  const posNeg = ranNum < 0.5 ? -ranNum : ranNum;
  const val = Math.floor(posNeg * num);
  return val;
};

function addListenerMulti(element, eventNames, listener) {
  var events = eventNames.split(' ');
  for (var i=0, iLen=events.length; i<iLen; i++) {
    element.addEventListener(events[i], listener, false);
  }
}

let counter = 0
const countdownDate = new Date("February 17, 2024 00:00:00").getTime();

document.addEventListener("DOMContentLoaded", function () {
  const body = document.body
  const questionContainer = document.getElementById("question-container");
  const noButton = document.getElementById("no-button");
  const tryAgainButton = document.getElementById("try-again-button");
  const yesButton = document.getElementById("yes-button");

  addListenerMulti(noButton, 'mouseover click', function () {
    let top = getRandomNumber((window.innerHeight - questionContainer.offsetHeight) * 0.5);
    if (parseInt(noButton.style.top.split("px")[0]) < 0){
      top = Math.abs(top)
    } else {
      top = -Math.abs(top)
    }
    let left = getRandomNumber((window.innerWidth - questionContainer.offsetWidth) * 0.5);
    if (parseInt(noButton.style.left.split("px")[0]) < 0){
      left = Math.abs(left)
    } else {
      left = -Math.abs(left)
    }

    console.log({"top": top+"px", "left": left+"px"})
    $("#no-button").css({"top": top+"px", "left": left+"px"})

    counter++

    if (counter % 200 == 0) {
      $("#question-container").hide();
      $("#no-container h1").html(
        "How many times are we going to do this?" + "<br>" +
        "You've tried clicking it " + counter + " times already" + "<br>" +
        "It's not going to work my love! You can't say no to me :)")
      $("#no-container").delay(500).show();
    }

    console.log(counter)
  });

  tryAgainButton.addEventListener("click", function () {
    $("#no-container").hide();
    $("#question-container").delay(500).show();
  });

  yesButton.addEventListener("click", function () {
    console.log("yes clicked");
    $("#question-container").hide();
    $("#yes-container").show();

    const x = setInterval(function () {
      const now = new Date().getTime();
      const timeLeft = countdownDate - now;

      const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

      $("#countdown").html(days + "d " + hours + "h " + minutes + "m " + seconds + "s ");

      if (timeLeft < 0) {
        clearInterval(x);
        $("#countdown").html("THE VALENTINE GETAWAY IS TODAY!");
      }
    }, 1000);
  });
});