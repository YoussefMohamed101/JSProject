var quizContainer = document.getElementById("quiz");
var resultsContainer = document.getElementById("results");
var submitButton = document.getElementById("submit");
var selected = document.getElementById("choice");
// ----------------------------------------
//--------------------------------------
var myQuestionsMath = [
  {
    question: "1)  What is 10/2?",
    answers: {
      a: "3",
      b: "5",
      c: "115",
    },
    correctAnswer: "b",
  },
  {
    question: "2)  What is 30/3?",
    answers: {
      a: "3",
      b: "5",
      c: "10",
    },
    correctAnswer: "c",
  },
  {
    question: "3)  2 + 2=___",
    answers: {
      a: "4",
      b: "8",
      c: "10",
    },
    correctAnswer: "a",
  },
  {
    question: "4)  What is the sum of 5+7",
    answers: {
      a: "2",
      b: "5",
      c: "12",
    },
    correctAnswer: "c",
  },
  {
    question: "5)  Which adds up to 12?",
    answers: {
      a: "6+6",
      b: "5+10",
      c: "10+3",
    },
    correctAnswer: "a",
  },
  {
    question: "6)  How much is 5 tens and 3 ones?",
    answers: {
      a: "35",
      b: "53",
      c: "350",
    },
    correctAnswer: "b",
  },
  {
    question: "7)  What is the symbol of plus?",
    answers: {
      a: "+",
      b: "-",
      c: "x",
    },
    correctAnswer: "a",
  },
  {
    question: "9)  38 + 20 = _",
    answers: {
      a: "382",
      b: "58",
      c: "80",
    },
    correctAnswer: "b",
  },
  {
    question: "10)  10 - 7 = _",
    answers: {
      a: "3",
      b: "5",
      c: "10",
    },
    correctAnswer: "a",
  },
];
//----------------------------
//-----------------------------
var myQuestionsImages = [
  {
    question: '<img src="images/dog.png">',
    answers: {
      a: "dog",
      b: "frog",
      c: "elephant",
    },
    correctAnswer: "a",
  },
  {
    question: '<img src="images/duck.png">',
    answers: {
      a: "dog",
      b: "duck",
      c: "monkey",
    },
    correctAnswer: "b",
  },
  {
    question: '<img src="images/frog.png">',
    answers: {
      a: "frog",
      b: "sheep",
      c: "elephant",
    },
    correctAnswer: "a",
  },
  {
    question: '<img src="images/elephant.png">',
    answers: {
      a: "dog",
      b: "sheep",
      c: "elephant",
    },
    correctAnswer: "c",
  },
  {
    question: '<img src="images/monkey.png">',
    answers: {
      a: "panda",
      b: "rabbit",
      c: "monkey",
    },
    correctAnswer: "c",
  },
  {
    question: '<img src="images/sheep.png">',
    answers: {
      a: "sheep",
      b: "rabbit",
      c: "elephant",
    },
    correctAnswer: "a",
  },
  {
    question: '<img src="images/panda.png">',
    answers: {
      a: "dog",
      b: "panda",
      c: "rabbit",
    },
    correctAnswer: "b",
  },
  {
    question: '<img src="images/pig.png">',
    answers: {
      a: "dog",
      b: "rabbit",
      c: "pig",
    },
    correctAnswer: "c",
  },
  {
    question: '<img src="images/penguin.png">',
    answers: {
      a: "penguin",
      b: "pig",
      c: "panda",
    },
    correctAnswer: "a",
  },
  {
    question: '<img src="images/sheep.png">',
    answers: {
      a: "rabbit",
      b: "sheep",
      c: "elephant",
    },
    correctAnswer: "b",
  },
];
//-------------------------------------------
//----------------------------------------------
var myQuestionsEnglish = [
  {
    question: "How many letters are there in the English alphabet?",
    answers: {
      a: "26",
      b: "28",
      c: "27",
    },
    correctAnswer: "a",
  },
  {
    question: "Which is the first letter in English alphabets?",
    answers: {
      a: "b",
      b: "z",
      c: "a",
    },
    correctAnswer: "c",
  },
  {
    question: "Arrange the letters (C, B, A, C) in alphabetical order.",
    answers: {
      a: "A,B,C,D",
      b: "D,B,A,C",
      c: "B,A,D,C",
    },
    correctAnswer: "a",
  },
  {
    question: "How many sides are there in a triangle?",
    answers: {
      a: "three",
      b: "two",
      c: "five",
    },
    correctAnswer: "a",
  },
  {
    question: "I teach you in your school. Who am I?",
    answers: {
      a: "student",
      b: "teacher",
      c: "driver",
    },
    correctAnswer: "b",
  },
  {
    question: "A place where all kinds of animals are found ___",
    answers: {
      a: "market",
      b: "hospital",
      c: "zoo",
    },
    correctAnswer: "c",
  },
  {
    question: "Which letter comes after b?",
    answers: {
      a: "a",
      b: "c",
      c: "d",
    },
    correctAnswer: "b",
  },
  {
    question: "Which letter comes before z?",
    answers: {
      a: "x",
      b: "y",
      c: "w",
    },
    correctAnswer: "b",
  },
  {
    question: "One student – four ____",
    answers: {
      a: "students",
      b: "studentes",
      c: "studentss",
    },
    correctAnswer: "a",
  },
];
function category() {
  var selectedValue = selected.options[selected.selectedIndex].value;
  console.log(selectedValue);
  localStorage.setItem("subj", selectedValue);
  location.href = "EnglishQuestions.html";
}
function generate() {
  var loadedselectedValue = localStorage.getItem("subj");
  if (loadedselectedValue == "Math") {
    generateQuiz(
      myQuestionsMath,
      quizContainer,
      resultsContainer,
      submitButton
    );
  } else if (loadedselectedValue == "English") {
    generateQuiz(
      myQuestionsEnglish,
      quizContainer,
      resultsContainer,
      submitButton
    );
  } else {
    generateQuiz(
      myQuestionsImages,
      quizContainer,
      resultsContainer,
      submitButton
    );
  }
}

function generateQuiz(
  questions,
  quizContainer,
  resultsContainer,
  submitButton
) {
  function showQuestions(questions, quizContainer) {
    // we'll need a place to store the output and the answer choices
    var output = [];
    var answers;

    // for each question...
    for (var i = 0; i < questions.length; i++) {
      // first reset the list of answers
      answers = [];

      // for each available answer...
      for (letter in questions[i].answers) {
        // ...add an html radio button
        answers.push(
          "<label> " +
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

      // add this question and its answers to the output
      output.push(
        '<div class="question" >' +
          questions[i].question +
          "</div>" +
          '<div class="answers" >' +
          answers.join("") +
          "</div>"
      );
    }

    // finally combine our output list into one string of html and put it on the page
    quizContainer.innerHTML = output.join("");
  }

  function showResults(questions, quizContainer, resultsContainer) {
    // gather answer containers from our quiz
    var answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    var userAnswer = "";
    var numCorrect = 0;

    // for each question...
    for (var i = 0; i < questions.length; i++) {
      // find selected answer
      userAnswer = (
        answerContainers[i].querySelector(
          "input[name=question" + i + "]:checked"
        ) || {}
      ).value;

      // if answer is correct
      if (userAnswer === questions[i].correctAnswer) {
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        answerContainers[i].style.color = "lightgreen";
      }
      // if answer is wrong or blank
      else {
        // color the answers red
        answerContainers[i].style.color = "red";
      }
    }

    // show number of correct answers out of total
    resultsContainer.innerHTML = numCorrect + " out of " + questions.length;
  }

  // show questions right away
  showQuestions(questions, quizContainer);

  // on submit, show results
  submitButton.onclick = function () {
    showResults(questions, quizContainer, resultsContainer);
  };
}



function openNav() {
  document.getElementById("mySidenav").style.width = "100%";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}