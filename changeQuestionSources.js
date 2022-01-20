/**This file controls what is shown on the quiz page based on which question
 * is selected and which answer button is pressed.
 **/




var questionOn = "q1";
var answersCorrect = 0;
/**
 * @param {string} questionNum id of the question
 * Handles the changing of the content shown based on which question is selected
 * for changing the answers shown, if a button has to appear or disappear, first make sure to
 */
function questionChange(questionNum){
    var questionName = document.getElementById("currentQuestionName");
    var questionAsked = document.getElementById("question");
    var answerBar = document.getElementById("Answer")

    questionOn = questionNum;
    //============================================= ==============================================//
    if(questionNum == "q1"){
        questionName.textContent="Sources: Example One";
        questionAsked.textContent =
            " In the past it was stated in this Those Three Clever Dogs Trained To Drive A Car Provide Valuable Lessons\n" +
            "            For AI Self-Driving Cars Forbes article that ” …it would potentially be feasible to train a " +
            "dog to drive\n" +
            "            a car…”. Well as surprising as that is it’s true and with modern technology seeing eye dogs " +
            "will soon\n" +
            "            be driving around their owners."

        setAnswerText("A1");
        setAnswerText("A2");
        setAnswerText("A3");
        setAnswerText("A4");
        setAnswerVisibility(false,"A4");
        setAnswerVisibility(false,"A3");
        enableImage(false);
        setAnswerCorrect("q1");
        // clearAnswerColor();

    }
    //============================================= ==============================================//

    //============================================= ==============================================//

    //============================================= ==============================================//

    //copy for new questions

    //============================================= Question  ==============================================//

    //============================================= Question  ==============================================//

}
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

/**
 * @param {string} answerNum id of the answer button
 *
 */
function setAnswerText(answerNum){
    var answer = document.getElementById(answerNum);
    //============================================= Question One =============================================//
    if(questionOn == "q1"){
        if(answerNum == "A1") {answer.textContent="Reak"}
        if(answerNum == "A2") {answer.textContent="Fake"}
        if(answerNum == "A3") {answer.textContent=""}
        if(answerNum == "A4") {answer.textContent=""}
        clearAnswerColor();
    }
    //============================================= Question Two =============================================//
    if(questionOn == "q2"){
        if(answerNum == "A1") {answer.textContent=""}
        if(answerNum == "A2") {answer.textContent=""}
        if(answerNum == "A3") {answer.textContent=""}
        if(answerNum == "A4") {answer.textContent=""}
        clearAnswerColor();

    }
    //============================================= Question Three =============================================//
    if(questionOn == "q3"){
        if(answerNum == "A1") {answer.textContent=""}
        if(answerNum == "A2") {answer.textContent=""}
        if(answerNum == "A3") {answer.textContent=""}
        if(answerNum == "A4") {answer.textContent=""}
        clearAnswerColor();

    }
    //============================================= Question Four =============================================//

    //============================================= Question Five =============================================//

    //copy for more questions
    //============================================= Question Name =============================================//


}
function enableImage(enabled){
    var imageOne = document.getElementById("imageOne");
    var imageTwo = document.getElementById("imageTwo");
    //============================================= Enabled =============================================//
    if(enabled == true){
        imageOne.style.visibility="visible";
        imageTwo.style.visibility="visible";
        imageOne.src="SkewedGraph.PNG"
        imageOne.src="UnSkewedGraph.PNG";
    }
    //============================================= Disabled =============================================//
    if(enabled == false){
        imageOne.style.visibility="hidden";
        imageTwo.style.visibility="hidden";
        imageOne.src = "";
        imageTwo.src="";
    }

}
function setAnswerExplanation(questionNum){
    if(questionNum == "q1"){



    }

}
function showAnswer(answer,currentQuestion){
    // var explainButton = document.getElementById("explain")
    var answerBar = document.getElementById("Answer")
    var nextButton = document.getElementById("nextQuestion")
    var explanation = document.getElementById("explanation");
    var nextTopic = document.getElementById("nextTopic");
    var nextTopicButton = document.getElementById("nextTopicButton");
    var progressBar = document.getElementById("progressBar")

    //============================================= Answer One =============================================//
    if(answer == 0) {
        if(currentQuestion == "q1") {
           answerBar.textContent= "Even if the quote is from a trustworthy source the article could be misusing" +
               " the information."
            setQuestionCorrect(false ,"q1","A1");

        }

    }
    //============================================= Answer Two =============================================//
    if(answer == 1) {
        if (currentQuestion == "q1") {
            answerBar.textContent = "Correct, This article is false. Notice how the quote omits the start and end of " +
                "this sentence?  The article on Forbes does say this, but this article purposely leaves out the part " +
                "about all of the conditions that were met to accomplish this feat. Watch out for real quotes that are " +
                "taken out of context.";
            answerBar.style.color = "white";
            setQuestionCorrect(true,"q1","A2");
            fillBarPercentage();
            setAnswerVisibility(false, "nextQuestion");
            nextTopic.style.visibility = "visible";
            nextTopicButton.style.visibility = "visible";

        }

    }
    //============================================= Answer Three =============================================//
    if(answer == 2) {
        if(currentQuestion == "q1"){

        }
        if(currentQuestion == "q2"){

        }

    }
    //============================================= Answer Four =============================================//
    if(answer == 3) {
        //answer four correct
        if(currentQuestion == "q1"){

        }
        if(currentQuestion == "q2"){

        }
    }
}
function showExplanation(questionNum){
    var explanation = document.getElementById("explanation");
    if(questionNum == "q1"){
        explanation.textContent =" End Summary and Lesson: " +
            "Many sites and social media can gather information about you. " +
            "This can unfortunately be used to manipulate you into reading " +
            "articles that will appeal to you regardless of if those articles " +
            "are true or not. Always be mindful that your newsfeed could be filtered to " +
            "appeal to you instead of showing you only the truth."
    }
    if(questionNum == "q2"){
        explanation.textContent = "While the pizza place did not lie about the increase. choosing to zoom into the " +
            "graph allows the graph at a glace to give the impression that their sales had a greater increase then " +
            "they actually had."
    }

}
function nextQuestion(){


}

function fillBarPercentage(){
    fillBar(1000);
}
