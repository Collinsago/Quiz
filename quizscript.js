
const start = document.getElementById("start");
const quiz = document.getElementById("quiz"); 
const question = document.getElementById("question");
const qImg = document.getElementById("qImg");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const choiceD = document.getElementById("D");
const counter = document.getElementById("counter");
const timeGuage = document.getElementById("timeGuage");
const progress = document.getElementById("progress");
const scoreDiv = document.getElementById("scoreContainer");

//create questions
let questions = [
    {
        question: "Who is collins babe?",
        imgSrc: "html.png",
        choiceA: "flora",
        choiceB: "stella",
        choiceC: "precious",
        choiceD: "tina",
        correct: "C"
    },
    {
        question : "Who is collins babe?",
        imgSrc : "css.png",
        choiceA : "anita",
        choiceB : "stella",
        choiceC : "precious",
        choiceD: "fumi",
        correct : "D"
    },
    {
        question : "what is Cold?",
        imgSrc : "css.png",
        choiceA : "Unsual feeling",
        choiceB : "Happiness",
        choiceC : "sickness",
        choiceD: "sleeping",
        correct : "A"
    },
    {
        question : "Who is collins babe?",
        imgSrc : "js.png",
        choiceA : "flora",
        choiceB : "stella",
        choiceC : "precious",
        choiceD: "fumi",
        correct : "B"
    },
    {
        question : "Who is collins babe?",
        imgSrc : "css.png",
        choiceA : "anita",
        choiceB : "stella",
        choiceC : "precious",
        choiceD: "joy",
        correct : "A"
    },
];

// create some variable

const lastQuestion = questions.length - 1;
let runningQuestion = 0;

let count = 0;
const questionTime = 10; //10s
const gaugeWidth = 150; //150px
const gaugeUnit = gaugeWidth / questionTime;
let TIMER;
let score = 0;



//render a question
function renderQuestion() {
    let q = questions[runningQuestion];

    question.innerHTML = "<p>"+ q.question +"</p>";
    
    choiceA.innerHTML = q.choiceA
    choiceB.innerHTML = q.choiceB
    choiceC.innerHTML = q.choiceC
    choiceD.innerHTML = q.choiceD
    
}

start.addEventListener("click", startQuiz);

// start quiz
    function startQuiz(){
    start.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
    renderProgress();
    renderCounter();
    TIMER = setInterval(renderCounter,1000); // 1000ms = 1s
}

//render progress
function renderProgress(){
    
}

//counter render
function renderCounter(){
    if (count <= questionTime){
        counter.innerHTML = count;
        timeGuage.style.width = count * gaugeUnit + "px";
        count++;
    }else{
        count = 0;
    
    if(runningQuestion < lastQuestion){
        runningQuestion++;
        renderQuestion();
    }else{
        //end the quiz and show the score
        clearInterval(TIMER);
        scoreRender();
        }
 
    }
}

// check Answer
function checkAnswer(answer){
    if( answer == questions[runningQuestion].correct){
        score++
        //answer is correct
         
    }else{
        // answer is wrong
    }
    
    count = 0;
    if(runningQuestion < lastQuestion){
        runningQuestion++;
        renderQuestion();
    }else{
        //end the quiz and show the score
        clearInterval(TIMER);
        scoreRender();
    }

}



// score render
function scoreRender(){
    scoreDiv.style.display = "block";

    // calculate amount of question percent answeed by the user
    const scorePerCent = Math.round(100 * score/questions.length);

    //choose an images
    let img = (scorePerCent >= 80) ? "5.png" :
              (scorePerCent >= 60) ? "4.png" :
              (scorePerCent >= 40) ? "3.png" :
              (scorePerCent >= 20) ? "2.png" :
              "1.png";

    scoreDiv.innerHTML = "<img src="+ img +">";
    scoreDiv.innerHTML +="<p>" + scorePerCent +"%</p>";
}
