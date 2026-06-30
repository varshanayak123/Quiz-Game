let question = document.querySelector("#question");
let quest_num = document.querySelector("#question-number");
let option = document.querySelectorAll(".option");
let nxtbtn = document.querySelector("#nextBtn");
let startgame = document.querySelector("#Start-game");
let quizbox = document.querySelector(".quiz-box");
let playagain = document.querySelector("#play-again");
let displayscore = document.querySelector("#score");
let scorebox = document.querySelector(".score-box");
let resultmesgae = document.querySelector("#result-mesage");

startgame.addEventListener("click" , function(){

    startgame.style.display = "none";

    quizbox.style.display = "block";

    showData();

})

const questions = [
  {
    question: "What is JavaScript?",
    options: [
      "Programming Language",
      "Database",
      "Operating System",
      "Web Browser"
    ],
    answer: 0
  },

  {
    question: "Which keyword is used to declare a variable?",
    options: [
      "let",
      "loop",
      "print",
      "class"
    ],
    answer: 0 
  },

  {
    question: "Which company created JavaScript?",
    options: [
      "Google",
      "Microsoft",
      "Netscape",
      "Apple"
    ],
    answer: 2
  },

  {
    question: "Which symbol is used for comments in JavaScript?",
    options: [
      "//",
      "##",
      "**",
      "<!-- -->"
    ],
    answer: 0
  },

  {
    question: "Which function prints output to the console?",
    options: [
      "console.log()",
      "print()",
      "echo()",
      "write()"
    ],
    answer: 0
  },

  {
    question: "Which method selects an element by its ID?",
    options: [
      "getElementById()",
      "queryAll()",
      "getElements()",
      "findElement()"
    ],
    answer: 0
  },

  {
    question: "Which operator is used for strict equality?",
    options: [
      "===",
      "==",
      "=",
      "!="
    ],
    answer: 0
  },

  {
    question: "Which loop is best when the number of iterations is known?",
    options: [
      "for",
      "while",
      "switch",
      "if"
    ],
    answer: 0
  },

  {
    question: "Which keyword is used to define a function?",
    options: [
      "func",
      "method",
      "define",
      "function"
    ],
    answer: 3
  },

  {
    question: "Which data type is used for true or false values?",
    options: [
      "Number",
      "String",
      "Boolean",
      "Object"
    ],
    answer: 2
  },

  {
    question: "Which method adds an element at the end of an array?",
    options: [
      "shift()",
      "pop()",
      "push()",
      "slice()"
    ],
    answer: 2
  },

  {
    question: "Which method removes the last element of an array?",
    options: [
      "pop()",
      "push()",
      "shift()",
      "splice()"
    ],
    answer: 0
  },

  {
    question: "What does DOM stand for?",
    options: [
      "Data Object Method",
      "Document Object Model",
      "Document Order Method",
      "Digital Object Model"
    ],
    answer: 1
  },

  {
    question: "Which event occurs when a button is clicked?",
    options: [
      "change",
      "hover",
      "click",
      "submit"
    ],
    answer: 2
  },

  {
    question: "Which keyword stops a loop?",
    options: [
      "break",
      "stop",
      "exit",
      "return"
    ],
    answer: 0
  }
];

let currentQuestion = 0;
let selectedAns = null;
let score = 0;

function showData(){

  const current = questions[currentQuestion];

  quest_num.textContent = `Q.${currentQuestion + 1}`;

  question.textContent = current.question
    option.forEach((btn, index) => {
        btn.textContent = current.options[index];

        btn.classList.remove("selected");

        btn.disabled = false;
    });
    
    selectedAns = null;
}

option.forEach((btn, index) => {

    btn.addEventListener("click", function () {

        option.forEach((b) => {
            b.classList.remove("selected");
        });

        btn.classList.add("selected");

        selectedAns = index;

    });

});

nxtbtn.addEventListener("click", function () {

    if (selectedAns === null) {
        alert("Please select an option!");
        return;
    }

    const current = questions[currentQuestion];

    if (selectedAns === current.answer) {
        score++;
    }

    if (currentQuestion < questions.length - 1) {

        currentQuestion++;
        selectedAns = null;

        option.forEach((btn) => {
            btn.classList.remove("selected");
        });

        showData();

    } else {

        quizbox.style.display = "none";

        scorebox.style.display = "block";

        let percentage = ( score / questions.length) * 100;
        if(percentage >= 90){
          resultmesgae.textContent = "Outstanding !";
        }else if (percentage >=70){
          resultmesgae.textContent = "Great Job !";
        }else if (percentage >=50){
          resultmesgae.textContent = "well done !";
        }else{
          resultmesgae.textContent = "Keep practicing !";
        }
        displayscore.textContent = `Your Score : ${score}/${questions.length}`;
      }
});
playagain.addEventListener("click", function(){

       currentQuestion = 0;
       selectedAns = null;
       score = 0;

       questions.sort(() => Math.random() - 0.5);

        scorebox.style.display = "none";

        quizbox.style.display = "block";

        showData();

});