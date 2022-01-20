var questionOn = "Options and Bias";

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
//         setAnswerText("A4");var questionOn = "Credibility";
//
// // function questionChange(questionNum) {
// //     var questionName = document.getElementById("currentQuestionName");
// //     var questionAsked = document.getElementById("question");
// //     questionOn = questionNum;
// //     //============================================= Question  ==============================================//
// //     if (questionNum == "Credibility") {
// //
// //         questionName.textContent = "Credibility ";
// //         questionAsked.textContent =
// //             "HI";
// //
// //         setAnswerText("A1");
// //         setAnswerText("A2");
// //         setAnswerText("A3");
// //         setAnswerText("A4");
// //         setAnswerVisibility(true, "A");
// //         setAnswerVisibility(false, "A")
// //
// //         enableImage(false);
// //     }
// //
// //     if (questionNum == "Soureces") {
// //
// //         questionName.textContent = "Soureces ";
// //         questionAsked.textContent =
// //             "Hello world";
// //
// //         setAnswerText("A1");
// //         setAnswerText("A2");
// //         setAnswerText("A3");
// //         setAnswerText("A4");
// //         setAnswerVisibility(true, "B");
// //         setAnswerVisibility(false, "B")
// //
// //         enableImage(false);
// //     }
// // }
// // function setAnswerVisibility(visible,answerNum){
// //     var answer = document.getElementById(answerNum);
// //
// //     if(visible == false) {
// //         answer.textContent = "";
// //         answer.style.border = "none";
// //         answer.style.visibility = "hidden";
// //     }
// //     if(visible == true) {
// //         answer.style.border = "";
// //         answer.style.borderColor = "#A34B9D";
// //         answer.style.visibility = "visible";
// //     }
// // }
// //
// // function setAnswerText(answerNum){
// //     var answer = document.getElementById(answerNum);
// //     if(questionOn == "Credibility"){
// //         if(answerNum == "A1") {answer.textContent="111"}
// //         if(answerNum == "A2") {answer.textContent="222"}
// //         if(answerNum == "A3") {answer.textContent="333"}
// //         if(answerNum == "A4") {answer.textContent="444"}
// //         clearAnswerColor();
// //
// //     }
// //
// // }
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
// function showAnswer(answer,currentQuestion) {
//     // var explainButton = document.getElementById("explain")
//     var answerBar = document.getElementById("Answer")
//     var nextButton = document.getElementById("nextQuestion")
//     var explanation = document.getElementById("explanation");
//     if (answer == 0) {
//         if (currentQuestion == "Credibility") {
//             answerBar.textContent = "Taking the title of an article at face value can be risky, as you can be missing out on vital context\n" +
//                 "or information. Just reading the title of an article is not enough to understand what the article is\n" +
//                 "truly about.\n"
//             setQuestionCorrect(false, "Credibility", "A1");
//         }
//     }
//
//     if (answer == 1) {
//         if (currentQuestion == "Credibility") {
//             answerBar.textContent = "Skimming an article is better than simply reading the title, but it’s easy to miss important\n" +
//                 "information if you only read a small portion of the article. You might miss the fact that the study\n" +
//                 "said that chocolate might reduce the risk of cancer.\n"
//             setQuestionCorrect(false, "Credibility", "A2")
//         }
//     }
//     if (answer == 2) {
//         if (currentQuestion == "Credibility") {
//             answerBar.textContent = "Reading the whole article is the best way to make sure you have all the information you need to\n" +
//                 "understand the situation. By doing this, you can find any important context that would help\n" +
//                 "explain the title or show how the title might be misleading. In this example, you would find that\n" +
//                 "the article would claim that eating chocolate might decrease your chance of getting a specific\n" +
//                 "type of cancer, but that’s far from concrete proof.\n"
//             setQuestionCorrect(false, "Credibility", "A3")
//         }
//     }
//     if (answer == 3) {
//         if (currentQuestion == "Credibility") {
//             answerBar.textContent = "Answer 4"
//             setAnswerVisibility(false)
//
//             setQuestionCorrect(false, "Credibility", "A4")
//         }
//     }
// }
//
//
//
//
// function showExplanation(questionNum){
//     var explanation = document.getElementById("explanation");
//     if(questionNum == "Credibility") {
//         explanation.textContent = "this is a explanation"
//     }
//     }
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
        if (currentQuestion == "Options and Bias") {
            answerBar.textContent = "Asking yourself questions such as “Does the author have any " +
                "personal opinions or is swayed to one side or the other?” is a great way to tell if " +
                "the article is more opinion-based. Checking if the author is biased towards one side " +
                "or another can be seen by looking at any other articles they have written or if they" +
                " are attached to a side politically or financially. However, in this example, the " +
                "author has no personal bias. "

            setQuestionCorrect(false, "Options and Bias", "A1");
        }
    }

    if (answer == 1) {
        if (currentQuestion == "Options and Bias") {
            answerBar.textContent = "Correct: This is a great way to see if a claim from a survey " +
                "is factual or not. Looking at a survey conducted with more scrutiny can tell you " +
                "more about how and why the survey happened, as well as any biases that were apart" +
                " of said survey. In this example one huge bias was that out of all the participants," +
                " a vast majority of them were wearing purple."
            setQuestionCorrect(false, "options and Bias", "A2")
        }
    }
    if (answer == 2) {
        if (currentQuestion == "Options and Bias") {
            answerBar.textContent = "Reading the whole article is the best way to make sure you have all the information you need to\n" +
                "understand the situation. By doing this, you can find any important context that would help\n" +
                "explain the title or show how the title might be misleading. In this example, you would find that\n" +
                "the article would claim that eating chocolate might decrease your chance of getting a specific\n" +
                "type of cancer, but that’s far from concrete proof.\n"
            setQuestionCorrect(false, "Credibility", "A3")
        }
    }
    if (answer == 3) {
        if (currentQuestion == "Credibility") {
            answerBar.textContent = "Answer 4"
            setAnswerVisibility(false,"A4")

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