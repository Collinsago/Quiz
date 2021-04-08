
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

question: "1.………………… is a type of memory which the computer cannot function.",
choiceA: "Hard disk ",
choiceB: "Floppy diskette ",
choiceC: "Primary memory ",
choiceD: "Secondary memory ",
correct: "B",
},

{

question: "2.………………… may not be considered as a component of the systems unit.",
choiceA: "Ram",
choiceB: "Rom",
choiceC: "CPU",
choiceD: "Flash drive",
correct: "D",


},

{

question: "3.………………… perform all types of data processing operations, in a computer.",
choiceA: "CPU",
choiceB: "Control unit ",
choiceC: "Input Unit ",
choiceD: "Output Unit.",
correct: "B",
},
{

question: "4.Which component of the CPU does not process any data but directs the operations of the processor.",
choiceA: "Memory",
choiceB: "Control Unit ",
choiceC: "ALU",
choiceD: "All of above",
correct: "C",
},

{

question: "5.The component of the CPU used to hold the binary information that are being processed by the current instruction is …………",
choiceA: "Memory",
choiceB: "Control Unit ",
choiceC: "ALU ",
choiceD: "None of the Above",
correct: "C",
},

{

question: "6.The component of the CPU that thinks in bits is ………………",
choiceA: "Control Unit ",
choiceB: "Memory",
choiceC: "ALU",
choiceD: "None of the Above",
correct: "B",


},

{

question: "7.The computer main memory from where all instructions are processed is known as ………….",
choiceA: "ROM",
choiceB: "RAM",
choiceC: "Hard Disk ",
choiceD: "CD ROM",
correct: "C",
},

{

question: "8.The type of memory that loses its contents on power outage is",
choiceA: "RAM",
choiceB: "Hard Disk ",
choiceC: "CD ROM",
choiceD: "ROM",
correct: "A",


},

{

question: "9.The type of memory where the instructions that are required to start a computer is stored is ………",
choiceA: "ROM",
choiceB: "RAM",
choiceC: "Hard Disk ",
choiceD: "Floppy Disk",
correct: "A",
},

{

question: "10.The bootstrap function is always stored in ………….",
choiceA: "RAM",
choiceB: "Hard disk ",
choiceC: "ROM",
choiceD: "CD ROM",
correct: "C",


},

{

question: "11.The type of ROM where a user can modify the content only once is ……….",
choiceA: "EPROM",
choiceB: "MROM",
choiceC: "EEPROM",
choiceD: "PROM",
correct: "B",


},

{

question: "12.The type of ROM that cannot be programmed by the user is ……………",
choiceA: "PROM",
choiceB: "EPROM",
choiceC: "MROM",
choiceD: "EEPROM",
correct: "C",


},

{

question: "13.The ROM is an example of an ancillary storage device?",
choiceA: "True",
choiceB: "False",
choiceC: "None of the Above",
choiceD: "All of the above",
correct: "A",


},

{

question: "14.A hard disk is an example of an ancillary storage device?",
choiceA: "True",
choiceB: "False",
choiceC: "None of the Above ",
choiceD: "All of the above",
correct: "A",


},

{

question: "15.The type of disk drive that uses laser light or electromagnet wave for 

reading or writing data to or from optional discs is………… ",
choiceA: "magnetic tape ",
choiceB: "floppy diskette",
choiceC: "hard disk",
choiceD: "optical disc drive",
correct: "A",


},

{

question: "16.Which of the following is not an example of a computer peripheral ",
choiceA: "RAM",
choiceB: "Keyboard",
choiceC: "Scanner",
choiceD: "Printer",
correct: "A",

},

{

question: "17.Digital circuit are made with? ",
choiceA: "keyboard",
choiceB: "Integrated circuit",
choiceC: "monitor",
choiceD: "computer",
correct: "B",

},

{

question: "18.The type of integrated circuits that contain 10 to 200 logic gates 

is…………..",
choiceA: "SSI",
choiceB: "MSI",
choiceC: "VESI",
choiceD: "LSI",
correct: "D",

},

{

question: "19.The IC’s for circuits that need high component density are made 

from………….",
choiceA: "Metal Oxide Semi-conductor",
choiceB: "Complementary Metal Oxide Semi-conductor",
choiceC: "All of the above",
choiceD: "None of the above",
correct: "C",

},

{

question: "20.The IC’s for systems requiring low power consumption are made 

from…………",
choiceA: "Complementary Metal Oxide Semi-conductor",
choiceB: "Metal Oxide Semi-conductor",
choiceC: "All of the above",
choiceD: "None of the above",
correct: "A",

},

{

question: "21.…………is the starting material for the integrated circuit fabrication ",
choiceA: "Doping",
choiceB: "Ion implantation",
choiceC: "single crystal silicon water ",
choiceD: "Electroplating",
correct: "D",

},

{

question: "22.The set of manufacturing processes used to create semiconductor devices 

and circuit is ……….",
choiceA: "Doping",
choiceB: "Ion implantation",
choiceC: "Electroplating",
choiceD: "Water fabrication",
correct: "C",

},

{

question: "23.The hard copy that is then transferred on to the chip is referred to as 

",
choiceA: "Sputtering",
choiceB: "Reticle",
choiceC: "Electroplating",
choiceD: "Wafer",
correct: "D",

},

{

question: "24.The series of steps to selectively mask or expose portions of the wafer 

surface for deposition, doping, or etching is referred to as…………..",
choiceA: "Layering",
choiceB: "Heat treatment",
choiceC: "Patterning",
choiceD: "Doping",
correct: "C",

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
