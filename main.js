// we design an (object for questions) {each question }contain an {array for answers} each answer is an object with two keys and the correct answer carry (true value) on (correct keyy) all in an array for all questions 

const questions = [
    {
        question:"which is the largest animal in the world ",
        answer:[
            {text:"shark",correct:"false"},
            {text:"blue whale",correct:"true"},
            {text:"elephant",correct:"false"},
            {text:"giraffe",correct:"false"}, 
        ]
    },
    {
        question:"which is the smallest country in the world ",
        answer:[
            {text:"vatican",correct:"true"},
            {text:"bhutan",correct:"false"},
            {text:"nepal",correct:"false"},
            {text:"shri lanka",correct:"false"}, 
        ]
    },
    {
        question:"which is the largest desert in the world ",
        answer:[
            {text:"kalahari",correct:"false"},
            {text:"gobi",correct:"false"},
            {text:"sahara",correct:"false"},
            {text:"antrctica",correct:"true"}, 
        ]
    },
    {
        question:"which is the smallest continent in the world ",
        answer:[
            {text:"asia",correct:"false"},
            {text:"australlia",correct:"true"},
            {text:"arctic",correct:"false"},
            {text:"africa",correct:"false"}, 
        ]
    },
]
// define html element 
let question = document.getElementById('question');
let answers = document.querySelector('.amswers');
let nextBtn = document.getElementById('btn');
// intiallize current question index (fe el array el large elly fo2)
// intiallize the score 
let currentQuestionIndex = 0;
let score = 0;
// function 1
function startQuiz() {
    resetState();
    currentQuestionIndex = 0;    // reset the index to 0
    score = 0;                  // reset the score to 0
    nextBtn.innerHTML="next";   // making button ready & w ben8ayaro fe el 2a5er 
    showQuestion();             // firing function elly ha tezherlly el question asln
};
// function 2
function showQuestion(){         //before this we have to reset all questions and answers appearing on html !
   resetState();
    let currentQuestion = questions[currentQuestionIndex];          
    let questionNumber = currentQuestionIndex +1;
    question.innerHTML= questionNumber + ". " + currentQuestion.question;  // understoooodd
    
    currentQuestion.answer.forEach(answer =>{
        const p = document.createElement("p");
        p.innerHTML=answer.text;
        p.classList.add("any");
        answers.appendChild(p);
        
            p.dataset.correct = answer.correct;              // dataset????????

        
        p.addEventListener("click", selectAnswer);
    })
}
function resetState(){
    nextBtn.style.display = "none";
    while(answers.firstChild){               // ha n loop goa el div elly el class bta3ha amswers w n delete kol mara child l7d m ytmes7o kplhom
        answers.removeChild(answers.firstChild);
    }
}                  // 3amalna el reset
function selectAnswer(e){
    const ans = e.target;
    if ( ans.dataset.correct === "true"){
        ans.classList.add("correct");
        score++;

    }else{
        ans.classList.add("incorrect");
    }                              //after that we should disable clicking and highlighting the correct answer automatically
    Array.from(answers.children).forEach(p =>{    // lazem p cuz dah elchildren
        if ( p.dataset.correct === "true"){
            p.classList.add("correct");
        }
        p.style.pointerEvents = "none";
        
       
    });
    nextBtn.style.display="block";

}
// cancelling hover effect by css :hover:not([disabled])  // mesh ha ye4ta8l 8er law el p not disabled

// el nextBtn hay3ml ehhh??
nextBtn.addEventListener("click",()=>{
    if(currentQuestionIndex < questions.length){
        handleNextBtn();
    }else{
        startQuiz();
    }
})

function handleNextBtn(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}
function showScore(){
    resetState();
    question.innerHTML = ` you scored ${score} out of ${questions.length} !`;
    nextBtn.innerHTML="start again ";
    nextBtn.style.display="block";     // cuz lma 3amlnaha block fo2 kanet fe function and it is not happening now
}
startQuiz();