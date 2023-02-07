const frontCard = document.querySelector(".front_card");
const signUpBtn = document.querySelector(".signup_msg_btn");
const loginBtn = document.querySelector(".login_msg_btn");
const userEmailInp = document.querySelector(".user_email");
const userFNameInp = document.querySelector(".user_full_name");

signUpBtn.addEventListener("click", () => {
  frontCard.classList.add("front_card_signup");
  userFNameInp.focus();
});

loginBtn.addEventListener("click", () => {
  frontCard.classList.remove("front_card_signup");
  userEmailInp.focus();
});

function runSpeechRecognition() {
  // get output div reference
  var output = document.getElementById("output");
  // get action element reference
  var action = document.getElementById("action");
  // new speech recognition object
  var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
  var recognition = new SpeechRecognition();

  // This runs when the speech recognition service starts
  recognition.onstart = function() {
    action.innerHTML = "<small>listening, please speak...</small>";
  };

  recognition.onspeechend = function() {
    action.innerHTML = "<small>stopped listening, hope you are done...</small>";
    recognition.stop();
  }

  // This runs when the speech recognition service returns result
  recognition.onresult = function(event) {
    var transcript = event.results[0][0].transcript;
    output.innerHTML = transcript;
    output.classList.remove("hide");
  };

  // start recognition
  recognition.start();
}