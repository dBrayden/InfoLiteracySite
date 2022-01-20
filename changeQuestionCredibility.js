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
        questionName.textContent="Credibility: Example One";
        questionAsked.textContent =
            "While checking out various websites, you come across an article with the title “Eating Chocolate Every\n" +
            "Day Reduces Risk of Cancer, Canadian Study Finds”. As a chocolate lover yourself, this is information\n" +
            "you’re interested in. Should you:\n"

        setAnswerText("A1");
        setAnswerText("A2");
        setAnswerText("A3");
        setAnswerText("A4");
        setAnswerVisibility(false,"A4");
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
        if(answerNum == "A1") {answer.textContent="Take this article title as 100% true without reading the article " +
            "itself"}
        if(answerNum == "A2") {answer.textContent="Skim the article and then decide if the title is true"}
        if(answerNum == "A3") {answer.textContent=" Read the whole article and then decide if the title is true "}
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

    //============================================= Answer One =============================================//
    if(answer == 0) {
        if(currentQuestion == "q1") {
            answerBar.textContent = "Taking the title of an article at face value can be risky, as you can be " +
                "missing out on vital context\n" +
                "or information. Just reading the title of an article is not enough to understand what the article is\n" +
                "truly about.\n";
            setQuestionCorrect(false,"q1","A1");
        }

    }
    //============================================= Answer Two =============================================//
    if(answer == 1) {
        if (currentQuestion == "q1") {
            answerBar.textContent = "Skimming an article is better than simply reading the title, but it’s easy to " +
                "miss important\n" +
                "information if you only read a small portion of the article. You might miss the fact that the study\n" +
                "said that chocolate might reduce the risk of cancer.\n";
            setQuestionCorrect(false,"q1","A2");
        }

    }
    //============================================= Answer Three =============================================//
    if(answer == 2) {
        if(currentQuestion == "q1"){
            answerBar.textContent = " Correct:   reading the whole article is the best way to make sure you have all the " +
                "information you need to\n" +
                "understand the situation. By doing this, you can find any important context that would help\n" +
                "explain the title or show how the title might be misleading. In this example, you would find that\n" +
                "the article would claim that eating chocolate might decrease your chance of getting a specific\n" +
                "type of cancer, but that’s far from concrete proof.\n";
            answerBar.style.color = "white";
            setQuestionCorrect(true,"q1","A3");
            fillBarPercentage("q1")
            setAnswerVisibility(false, "nextQuestion");
            nextTopic.style.visibility = "visible";
            nextTopicButton.style.visibility = "visible";
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
//if(answersCorrect == 5){questionChange("q6"); clearText()}
//if(answersCorrect == 6){questionChange("q7"); clearText()}
//if(answersCorrect == 7){questionChange("q8"); clearText()}





//if(answersCorrect ==){questionChange("q"); clearText()}
