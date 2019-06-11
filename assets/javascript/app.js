var number = 30;
var questions = [
  {
    question:
      "What is the name of Tom Cruise's wingman in the critically acclaimed film, 'Top Gun'",
    answers: {
      a: "Rabbit",
      b: "Goose",
      c: "Steve",
      d: "Ice Man"
    },
    correctAnswer: "b"
  },
  {
    question: "Which of the following is NOT  like the others?",
    answers: {
      a: "KISS",
      b: "Motley Crue",
      c: "Little River Band",
      d: "Poison"
    },
    correctAnswer: "c"
  },
  {
    question:
      "In which 80's cop drama did Don Johnson play the leading man, Detective Sonny Crockett?",
    answers: {
      a: "Miami Vice",
      b: "Hawaii Five-O",
      c: "CHiPs",
      d: "Starsky and Hutch"
    },
    correctAnswer: "a"
  },
  {
    question:
      "Who played Axel Foley in the super smash hit 'Beverly Hills Cop'",
    answers: {
      a: "Eddie Murphy",
      b: "Kevin Bacon",
      c: "Christian Slater",
      d: "Keanu Reaves"
    },
    correctAnswer: "a"
  },
  {
    question:
      "What was the first video game to feature the famous Italian plumber Mario?",
    answers: {
      a: "Duck Hunt",
      b: "Super Mario Brothers",
      c: "Donkey Kong",
      d: "Joust"
    },
    correctAnswer: "c"
  },
  {
    question:
      "The hit TV show 'Cheers' takes place in an iconic bar located in which city?",
    answers: {
      a: "New York",
      b: "Chicago",
      c: "Los Angeles",
      d: "Boston"
    },
    correctAnswer: "d"
  }
];
var countdown;
function clockStart() {
  clearInterval(countdown);
  showQuestions();
  countdown = setInterval(decrement, 1000);
}

function decrement() {
  $("#clock").html("<h2>" + number + "</h2>");
  if (number === 0) {
    reset();
    $("#clock").hide();
    alert("time's up");
  }
  number--;
}

function reset() {
  clearInterval(countdown);
  showQuestions();
}

function showQuestions() {
  var output = [];
  var answers;

  for (var i = 0; i < questions.length; i++) {
    answers = [];

    for (letter in questions[i].answers) {
      answers.push(
        "<label>" +
          '<input type="radio" name="question' +
          i +
          '" value="' +
          letter +
          '">' +
          letter +
          ": " +
          questions[i].answers[letter] +
          "</label>"
      );
    }
    output.push(
      '<div class="question">' +
        questions[i].question +
        "</div>" +
        '<div class="answers">' +
        answers.join("") +
        "</div>"
    );
  }

  $("#quizContainer").html(output);
}

function showResults() {
  var answerContainers = quizContainer.querySelectorAll(".answers");

  var userAnswer = "";
  var numCorrect = 0;

  for (var i = 0; i < questions.length; i++) {
    userAnswer = (
      answerContainers[i].querySelector(
        "input[name=question" + i + "]:checked"
      ) || {}
    ).value;

    if (userAnswer === questions[i].correctAnswer) {
      answerContainers[i].style.color = "purple";
      numCorrect++;
    } else {
      answerContainers[i].style.color = "red";
    }
  }

  alert(numCorrect + " out of " + questions.length + "correct");
}

$("#startButton").on("click", function() {
  clockStart();
  showQuestions();
});

$("#submitButton").on("click", function() {
  showResults(questions);
  reset();
  $("#clock").hide();
});
