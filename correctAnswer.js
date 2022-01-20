/**
 * currently working on
 *
 */
const correct = "rgb(143, 177, 62)";

function setAnswerCorrect(questionID){
    question = document.getElementById(questionID);

    if(question.style.color.toString() == "rgb(143, 177, 62)"){
        // if(questionID =="q1"){
        //     document.getElementById("A1").style.color = "#ff0000";
        //     document.getElementById().style.color = "#ff0000";
        //     document.getElementById().style.color = "#ff0000";
        //     document.getElementById().style.color = "#8FB13E";
        //
        // }
        question.textContent="Correct";
    }


}


