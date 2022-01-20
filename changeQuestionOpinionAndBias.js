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

    //============================================= ==============================================//
    if(questionNum == "q1"){
        questionName.textContent="Opinions and Bias: Example One";
        questionAsked.textContent = "The prime minister made a big decision yesterday and there are a " +
            "lot of articles about it on the internet.\n" +
            "You see one titled, “Prime Minister Makes Huge Mistake”, one titled “Prime Minister Makes a Bold\n" +
            "Decision”, and another titled “The Arguments For and Against the Prime Minister’s Decision”. How\n" +
            "should you figure out what’s going on?\n";

        setAnswerText("A1");
        setAnswerText("A2");
        setAnswerText("A3");
        setAnswerText("A4");
        enableImage(false);

    }
    if(questionNum == "q2"){
        questionName.textContent="Opinions and Bias: Example Two";
        questionAsked.textContent =
            "While scrolling through the internet on your phone, you come across an article titled “Given the Choice, " +
            "95% of People Would Choose the Color Purple Over Pink.” You’re a little skeptical of these numbers as " +
            "someone who has pink everything. Should you:  \t\n"

        setAnswerText("A1");
        setAnswerText("A2");
        setAnswerText("A3");
        setAnswerText("A4");
        setAnswerVisibility(false,"A4");
        answerBar.textContent=""
        setAnswerVisibility(false, "nextQuestion");
        enableImage(false);
        setAnswerCorrect("q1");
        // clearAnswerColor();
    }
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
        if(answerNum == "A1") {answer.textContent="Read Multiple Articles\n"}
        if(answerNum == "A2") {answer.textContent="Be critical of where articles come from\n"}
        if(answerNum == "A3") {answer.textContent="Use strong sources\n"}
        if(answerNum == "A4") {answer.textContent="All of the Above"}
        clearAnswerColor();

    }
    if(questionOn == "q2"){
        if(answerNum == "A1") {answer.textContent="Check to see if this is an opinion piece "}
        if(answerNum == "A2") {answer.textContent="Look into the survey that makes the claim"}
        if(answerNum == "A3") {answer.textContent=" Bush the article off as false information because you disagree"}
        if(answerNum == "A4") {answer.textContent=""}
        clearAnswerColor();
    }
    //============================================= Question Two =============================================//
    //============================================= Question Three =============================================//

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
            answerBar.textContent = "Using multiple sources is a great way to get a better picture of the situation as many\n" +
                "news sources have a political bias which can colour how the report on the news. Getting multiple\n" +
                "perspective helps determine the facts from the opinions. But, having more than one approach would be\n" +
                "a better answer in this situation.\n";
            setQuestionCorrect(false,"q1","A1");

        }
        if(currentQuestion == "q2"){
            answerBar.textContent = "Incorrect: \n Asking yourself questions such as “Does the author have any personal " +
                "opinions or is swayed to one side or the other?” is a great way to tell if the article is more opinion" +
                "-based. Checking if the author is biased towards one side or another can be seen by looking at any " +
                "other articles they have written or if they are attached to a side politically or financially. " +
                "However, in this example, the author has no personal bias. \n"

            setQuestionCorrect(false,"q2","A1");
        }

    }
    //============================================= Answer Two =============================================//
    if(answer == 1) {
        if (currentQuestion == "q1") {
            answerBar.textContent = "Asking yourself questions about an article such as “What does the author know about\n" +
                "the subject?” and “Where did the author get the information?” is a great way to determine if it has a\n" +
                "strong bias or not. But, having more than one approach would be a better answer in this situation.\n";
            setQuestionCorrect(false,"q1","A2");

        }
        if(currentQuestion == "q2"){
            answerBar.textContent="Correct: \n This is a great way to see if a claim from a survey is factual or not." +
                " Looking at a survey conducted with more scrutiny can tell you more about how and why the survey " +
                "happened, as well as any biases that were apart of said survey. In this example one huge bias was " +
                "that out of all the participants, a vast majority of them were wearing purple. ";
            nextButton.style.visibility="visible";
            nextButton.textContent = "Next Question";
            nextButton.style.border="";
            setQuestionCorrect(true,"q2","A2");
            answerBar.style.color = "white";
            fillBarPercentage();
            setAnswerVisibility(false, "nextQuestion")
           nextTopic.style.visibility = "visible";
            nextTopicButton.style.visibility = "visible";
            answerBar.style.color = "white";
        }

    }
    //============================================= Answer Three =============================================//
    if(answer == 2) {
        if(currentQuestion == "q1"){
            answerBar.textContent = "Using only vetted sources for your news helps decrease the change of bias. For\n" +
                "example, using Pulitzer Prize winning news sources. The Pulitzer Prize awards excellence in journalism\n" +
                "for U.S. newspapers, magazines or news sites that publishes regularly and that excellence translate to a\n" +
                "much lower likelihood of bias. Some examples include the New York Times, the Chicago Tribune, and the\n" +
                "Associated Press. But, having more than one approach would be a better answer in this situation.\n";
            setQuestionCorrect(false,"q1","A3");
        }
        if(currentQuestion == "q2"){
            answerBar.textContent = "This is never the answer. Just because information disagrees with what you already" +
                " know, it does not mean its false. Carefully checking to see if a claim is true or not can save you " +
                "making mistakes big and small. \n";
            setQuestionCorrect(false,"q2","A3");
        }

    }
    //============================================= Answer Four =============================================//
    if(answer == 3) {
        //answer four correct
        if(currentQuestion == "q1"){
            answerBar.textContent = "Yes! Using all three of these suggestions together makes for the best approach for\n" +
                "getting your news.\n"
            answerBar.style.color = "white"
            nextButton.style.visibility="visible";
            nextButton.textContent = "Next Question";
            nextButton.style.border="";
            setQuestionCorrect(true,"q1","A4");
            fillBarPercentage();
            answersCorrect += 1;
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
    if(answersCorrect == 1){questionChange("q2"); clearText()}
}
//if(answersCorrect == 5){questionChange("q6"); clearText()}
//if(answersCorrect == 6){questionChange("q7"); clearText()}
//if(answersCorrect == 7){questionChange("q8"); clearText()}
function fillBarPercentage(){
    fillBar(500);
}




//if(answersCorrect ==){questionChange("q"); clearText()}
