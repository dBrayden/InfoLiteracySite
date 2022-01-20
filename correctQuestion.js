/**
 * Changes the color of the question in that navbar based on if the question is correct or not. Once its green cannot
 * show as red. This lets the user check the other answers without affecting their progress.
 */

function setQuestionCorrect(isCorrect,questionID,answerID){
    answer = document.getElementById(answerID);
    question = document.getElementById(questionID);
    if(isCorrect){
        question.style.color="#8FB13E"
        answer.style.color="#8FB13E"
    }
    else{
        if(question.style.color.toString() != "rgb(143, 177, 62)"){
            question.style.color="#ff0000"

        }
        answer.style.color="#ff0000";
    }
}

function clearAnswerColor(){
    document.getElementById("A1").style.color = "#000000";
    document.getElementById("A2").style.color = "#000000";
    document.getElementById("A3").style.color = "#000000";
    document.getElementById("A4").style.color = "#000000";

    // A1.style.color = "#000000"
    // A2.style.color = "#000000"
    // A3.style.color = "#000000"
    // A4.style.color = "#000000"

}
function clearText(){
    var explanation = document.getElementById("explanation");
    explanation.textContent=""
}