let interval;
let progressBar = document.querySelector(".progress-bar-inner");
var Obj;
var word = "";
var img;
var Answer = "";
var randomIndex = 0;
var showedletters = false;
var timer = 10;
var solved = 0;
var score = 0;
var checkedData = 0;

imagesAndNames = [
  {
    imagePath: "images/man.png",
    imageName: "man",
    checked: false,
  },
  {
    imagePath: "images/woman.png",
    imageName: "woman",
    checked: false,
  },
  {
    imagePath: "images/plane.png",
    imageName: "plane",
    checked: false,
  },
  {
    imagePath: "images/banana.png",
    imageName: "banana",
    checked: false,
  },
  {
    imagePath: "images/Apple.png",
    imageName: "Apple",
    checked: false,
  },
  {
    imagePath: "images/cat.png",
    imageName: "cat",
    checked: false,
  },
  {
    imagePath: "images/child.png",
    imageName: "child",
    checked: false,
  },
  {
    imagePath: "images/dog.png",
    imageName: "dog",
    checked: false,
  },
  {
    imagePath: "images/egg.png",
    imageName: "egg",
    checked: false,
  },
  {
    imagePath: "images/fish.png",
    imageName: "fish",
    checked: false,
  },
  {
    imagePath: "images/hat.png",
    imageName: "hat",
    checked: false,
  },
];

function showRandom() {
  image = document.getElementsByTagName("img");
  do {
    randomIndex = Math.floor(Math.random() * imagesAndNames.length);
    if (checkedData == imagesAndNames.length) {
      if (!alert("finish")) {
        window.location.reload();
      }
    }
    if (imagesAndNames[randomIndex].checked == true) {
      checkedData++;
    }
  } while (imagesAndNames[randomIndex].checked == true);
  image[0].src = imagesAndNames[randomIndex].imagePath;
  Answer = imagesAndNames[randomIndex].imageName;
  if (!showedletters) {
    showLetters();
    showedletters = true;
  }
  startTimer();
}

function startTimer() {
  let width = 100;

  if (!interval) {
    interval = setInterval(() => {
      if (width <= 0) {
        checkanswer();
      } else {
        if (width <= 20) {
          progressBar.style.backgroundColor = "red";
        }
        width -= 100 / 60;
        progressBar.style.width = `${width}%`;
      }
    }, 1000);
  } else {
    resetInterval();
  }
}

function resetInterval() {
  clearInterval(interval);
  interval = null;
  width = 100;
  progressBar.style.backgroundColor = "#4caf50";
  progressBar.style.width = `${width}%`;
  startTimer();
}
function showLetters() {
  for (var i = 65; i <= 90; i++) {
    element = document.getElementById("wordsContainer");
    const letter = document.createElement("div");
    letter.className = "letter";
    letter.draggable = true;
    letter.innerText = String.fromCharCode(i);
    letter.ondragstart = function () {
      GiveId(letter);
    };
    element.appendChild(letter);
  }
}

function GiveId(imgelem) {
  Obj = imgelem;
}

function DropElement(elem) {
  if (elem.children.length < 8) {
    img = Obj.cloneNode(true);
    img.setAttribute("draggable", "false");
    word += Obj.innerText;
    elem.appendChild(img);
  }
}

function removechar() {
  var data = document.getElementById("wordHolder");
  if (data.hasChildNodes()) {
    data.removeChild(data.lastChild);
    word = word.substring(0, word.length - 1);
  }
}

function readWord() {
  const Utterance = new SpeechSynthesisUtterance(Answer);
  Utterance.rate = 1;
  speechSynthesis.speak(Utterance);
}

function checkanswer() {
  console.log(word.toLowerCase());
  console.log(Answer);
  if (word.toLowerCase() == Answer) {
    if (!alert("correct")) {
      score += 100;
      document.querySelector("span").innerText = score;
      imagesAndNames[randomIndex].checked = true;
      while (word.length > 0) {
        removechar();
      }
      showRandom();
    }
  } else {
    if (!alert("Wrong")) {
      imagesAndNames[randomIndex].checked = true;
      while (word.length > 0) {
        removechar();
      }
      showRandom();
    }
  }
}

function openNav() {
  document.getElementById("mySidenav").style.width = "100%";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
