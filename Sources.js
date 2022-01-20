var questionOn = "Sources";

// function questionChange(questionNum) {
//     var questionName = document.getElementById("currentQuestionName");
//     var questionAsked = document.getElementById("question");
//     questionOn = questionNum;
//     //============================================= Question  ==============================================//
//     if (questionNum == "Credibility") {
//
//         questionName.textContent = "Credibility ";
//         questionAsked.textContent =
//             "HI";
//
//         setAnswerText("A1");
//         setAnswerText("A2");
//         setAnswerText("A3");
//         setAnswerText("A4");
//         setAnswerVisibility(true, "A");
//         setAnswerVisibility(false, "A")
//
//         enableImage(false);
//     }
//
//     if (questionNum == "Soureces") {
//
//         questionName.textContent = "Soureces ";
//         questionAsked.textContent =
//             "Hello world";
//
//         setAnswerText("A1");
//         setAnswerText("A2");
//         setAnswerText("A3");
//         setAnswerText("A4");
//         setAnswerVisibility(true, "B");
//         setAnswerVisibility(false, "B")
//
//         enableImage(false);
//     }
// }
// function setAnswerVisibility(visible,answerNum){
//     var answer = document.getElementById(answerNum);
//
//     if(visible == false) {
//         answer.textContent = "";
//         answer.style.border = "none";
//         answer.style.visibility = "hidden";
//     }
//     if(visible == true) {
//         answer.style.border = "";
//         answer.style.borderColor = "#A34B9D";
//         answer.style.visibility = "visible";
//     }
// }
//
// function setAnswerText(answerNum){
//     var answer = document.getElementById(answerNum);
//     if(questionOn == "Credibility"){
//         if(answerNum == "A1") {answer.textContent="111"}
//         if(answerNum == "A2") {answer.textContent="222"}
//         if(answerNum == "A3") {answer.textContent="333"}
//         if(answerNum == "A4") {answer.textContent="444"}
//         clearAnswerColor();
//
//     }
//
// }
function setAnswerVisibility(visible,answerNum){
    var answer = document.getElementById(answerNum);

    if(visible == false) {
        answer.textContent = "";
        answer.style.border = "none";
        answer.style.visibility = "hidden";
    }
    if(visible == true) {
        answer.style.border = "";
        answer.style.borderColor = "#A34B9D";
        answer.style.visibility = "visible";
    }
}
function showAnswer(answer,currentQuestion) {
    // var explainButton = document.getElementById("explain")
    var answerBar = document.getElementById("Answer")
    var nextButton = document.getElementById("nextQuestion")
    var explanation = document.getElementById("explanation");
    if (answer == 0) {
        if (currentQuestion == "Sources") {
            answerBar.textContent = "It is a true article.\n"
            setQuestionCorrect(false, "Sources", "A1");
        }
    }

    if (answer == 1) {
        if (currentQuestion == "Sources") {
            answerBar.textContent = "It is a fake article\n"
            setQuestionCorrect(false, "Sources", "A2")
        }
    }
    if (answer == 2) {
        if (currentQuestion == "Credibility") {
            answerBar.textContent = "Reading the whole article is the best way to make sure you have all the information you need to\n" +
                "understand the situation. By doing this, you can find any important context that would help\n" +
                "explain the title or show how the title might be misleading. In this example, you would find that\n" +
                "the article would claim that eating chocolate might decrease your chance of getting a specific\n" +
                "type of cancer, but that’s far from concrete proof.\n"
            setQuestionCorrect(false, "Sources", "A3")
        }
    }
    if (answer == 3) {
        if (currentQuestion == "Credibility") {
            answerBar.textContent = "Answer 4"
            setAnswerVisibility(false)

            setQuestionCorrect(false, "Credibility", "A4")
        }
    }
}




function showExplanation(questionNum){
    var explanation = document.getElementById("explanation");
    if(questionNum == "Credibility") {
        explanation.textContent = "this is a explanation"
    }
}