const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay))

const getRandomNumber = (num) => {
  const ranNum = Math.random();
  const posNeg = ranNum < 0.5 ? -ranNum : ranNum;
  const val = Math.floor(posNeg * num);
  return val;
};

function getNumberFromDimension(dimension) {
  return parseInt(dimension.split("px")[0])
}

let counter = 0

document.addEventListener("DOMContentLoaded", function () {
  const questionContainer = $("#question-container");
  const noButton = $("#no-button")
  const yesButton = $("#yes-button");
  const noContainer = $("#no-container");
  const tryAgainButton = $("#no-container #try-again-button");

  const yesContainer = $("#yes-container");
  const countdown = $("#yes-container #countdown")
  const congrats = $("#yes-container #congratulations")
  const congrats2 = $("#yes-container #congratulations2")
  const wait = $("#yes-container #wait")
  const heartbeat = $("#yes-container svg")
  const door = $("#yes-container .door")
  const doorTop = $("#yes-container .door-top")
  const doorBottom = $("#yes-container .door-bottom")
  const knob = $("#yes-container .knob")
  const doorClosedSound = $("#doorlockedsound")[0]
  const doorKnockSound = $("#doorknocksound")[0]
  const doorKickSound = $("#doorkicksound")[0]
  const doorOpenSound = $("#dooropensound")[0]

  noButton.on('mouseover click', function () {
    let top = getRandomNumber((window.innerHeight - (getNumberFromDimension(questionContainer.css("height")))) / 2) * 0.5;
    if (getNumberFromDimension(noButton.css("top")) < 0) {
      top = Math.abs(top) + getNumberFromDimension(questionContainer.css("height")) / 2
    } else {
      top = -Math.abs(top) - getNumberFromDimension(questionContainer.css("height")) / 2
    }
    let left = getRandomNumber((window.innerWidth - (getNumberFromDimension(questionContainer.css("width")))) / 2) * 0.5;
    if (getNumberFromDimension(noButton.css("left")) < 0) {
      left = Math.abs(left) + getNumberFromDimension(questionContainer.css("width")) / 2
    } else {
      left = -Math.abs(left) - getNumberFromDimension(questionContainer.css("width")) / 2
    }

    noButton.css({ "top": top + "px", "left": left + "px" })
    yesButton.css({ "height": (getNumberFromDimension(yesButton.css("height")) * 1.1) + "px", "width": (getNumberFromDimension(yesButton.css("width")) * 1.1) + "px" })

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

  const countdownDate = new Date("February 19, 2024 00:00:00").getTime();

  yesButton.on("click", function () {
    counter = 0
    const now = new Date().getTime();
    const timeLeft = countdownDate - now;

    console.log("yes clicked");
    questionContainer.hide();

    yesContainer.show();

    congrats.hide();
    congrats2.hide();
    wait.hide();
    door.hide();
    countdown.hide();
    heartbeat.hide();

    if (timeLeft < 0) {
      congrats2.show();
      setTimeout(function () {
        congrats2.hide()
        countdown.html("You may now enter the world of magic");
        door.show()

        doorTop.click(function () {
          doorKnockSound.play()
          doorKnockSound.currentTime = 0;

          setTimeout(function () {
            doorOpenSound.play();
            doorOpenSound.currentTime = 0;
            $(".door-front").css({ "transform": "rotateY(-160deg)" });
          }, 2000)

        })

        doorBottom.click(function () {
          doorKickSound.play()
          doorKickSound.currentTime = 0;

          setTimeout(function () {
            doorOpenSound.play();
            doorOpenSound.currentTime = 0;
            $(".door-front").css({ "transform": "rotateY(-160deg)" });
          }, 4000)

        })

        knob.click(function () {
          doorOpenSound.play();
          doorOpenSound.currentTime = 0;
          $(".door-front").css({ "transform": "rotateY(-160deg)" });
        })

        door.mouseleave(function () {
          $(".door-front").css({ "transform": "rotateY(0)" });
        })
      }, 3000)
    } else {
      congrats.show()
      setTimeout(function () {
        congrats.html("let's tell you where we're going then...")

        setTimeout(function () {
          congrats.html("but would that be much of a surprise my love?")

          setTimeout(function () {
            congrats.html("but i love you too much to not tell you so...")

            setTimeout(function () {
              congrats.html("are you excited?")

              setTimeout(function () {
                congrats.html("okay enough mwah, I love you x")

                setTimeout(function () {
                  congrats.hide()

                  setTimeout(function () {
                    door.show()

                    doorTop.click(function () {
                      doorKnockSound.play()
                      doorKnockSound.currentTime = 0;
                      counter++

                      if (counter == 3) {
                        setTimeout(function () {
                          countdown.html("sike");
                          countdown.show()

                          setTimeout(function () {
                            setInterval(function () {
                              const now = new Date().getTime();
                              const timeLeft = countdownDate - now;

                              const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
                              const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                              const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
                              const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
                              countdown.html(days + "d " + hours + "h " + minutes + "m " + seconds + "s ");
                            }, 1000)
                          }, 3000)
                        }, 1000)
                      }
                    })

                    doorBottom.click(function () {
                      doorKickSound.play()
                      doorKickSound.currentTime = 0;
                      counter++

                      if (counter == 3) {
                        setTimeout(function () {
                          countdown.html("sike");
                          countdown.show()

                          setTimeout(function () {
                            setInterval(function () {
                              const now = new Date().getTime();
                              const timeLeft = countdownDate - now;

                              const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
                              const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                              const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
                              const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
                              countdown.html(days + "d " + hours + "h " + minutes + "m " + seconds + "s ");
                            }, 1000)
                          }, 3000)
                        }, 1000)
                      }
                    })

                    knob.click(function () {
                      doorClosedSound.play()
                      doorClosedSound.currentTime = 0;
                      counter++

                      if (counter == 3) {
                        setTimeout(function () {
                          countdown.html("sike");
                          countdown.show()

                          setTimeout(function () {
                            setInterval(function () {
                              const now = new Date().getTime();
                              const timeLeft = countdownDate - now;

                              const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
                              const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                              const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
                              const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
                              countdown.html(days + "d " + hours + "h " + minutes + "m " + seconds + "s ");
                            }, 1000)
                          }, 3000)
                        }, 1000)
                      }
                    })
                  }, 3000);
                }, 4000)
              }, 3000)
            }, 3000)
          }, 3000)
        }, 3000)
      }, 3000)
    }










  });
});