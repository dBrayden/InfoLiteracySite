/**This file controls what is shown on the quiz page based on which question
 * is selected and which answer button is pressed.
 **/




var questionOn = "q1";
var answersCorrect = 0;
// var currentImage = 1;
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
        questionName.textContent="Clickbait: Example One";
        questionAsked.textContent =
            "For this example imagine you are a baseball fan and your favorite team, the\n" +
            "    Yellow Canaries, recently lost your favorite player Homer Un. This has been the\n" +
            "    main focus of your searches on the internet for a while now and one day on\n" +
            "    social media you come across a brand-new article titled “Homer Un Makes a\n" +
            "    Big Return to the Yellow Canaries”. You go to this article and find it’s from a\n" +
            "    unofficial website you’ve never seen before. The article looks as though it could be real though."

        setAnswerText("A1");
        setAnswerText("A2");
        setAnswerText("A3");
        setAnswerText("A4");
        setAnswerVisibility(true,"A4");
        setAnswerVisibility(true,"A3");
        enableImage(false);
        setAnswerCorrect("q1");
        // clearAnswerColor();

    }
    //============================================= ==============================================//
    if(questionNum == "q2"){
        questionName.textContent="Clickbait: Example Two";
        questionAsked.textContent = "A new pizza place in your city recently released an article stating that " +
            "they’ve seen their sales massively increase. The images below however tell a " +
            "conflicting story. The top graph is the one the pizza place published while the one on the bottom " +
            " was published by a reputable third party survey corporation. Could the pizza place be trying to " +
            "lie to you?";

        setAnswerText("A1");
        setAnswerText("A2");
        setAnswerText("A3");
        setAnswerText("A4");
        setAnswerVisibility(false,"A4")
        setAnswerVisibility(false,"A3");
        answerBar.textContent=""
        setAnswerVisibility(false, "nextQuestion");
        // document.getElementById("nextImg").style.visibility="visible";
        enableImage(true);

    }

    //============================================= ==============================================//
    if(questionNum == "q3"){
        questionName.textContent="Clickbait: Example Three";
        questionAsked.textContent =
            "Scrolling through social media, you see an article that says “This Shocking Footage Changes Everything.”\n" +
            "You click on the article. There is no footage, just a story about a cleaning product you haven’t heard of.\n" +
            "There’s also a link that claims to take you to a site where you can buy that product. You click on the link\n" +
            "and find that it takes you to a bizarre website that you have difficulty closing. All in all, you’re feeling\n" +
            "rightly annoyed by this clickbait article. What is the best way to avoid this in the future?\n";

        setAnswerText("A1");
        setAnswerText("A2");
        setAnswerText("A3");
        setAnswerText("A4");
        setAnswerVisibility(false,"A3");
        setAnswerVisibility(false,"A4")
        answerBar.textContent=""
        setAnswerVisibility(false, "nextQuestion");
        enableImage(false);
    }
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
        if(answerNum == "A1") {answer.textContent="It’s real because the article information looks trustworthy"}
        if(answerNum == "A2") {answer.textContent="It’s real because it is brand new"}
        if(answerNum == "A3") {answer.textContent="It’s fake because this contradicts facts you already know"}
        if(answerNum == "A4") {answer.textContent="It’s fake because the source is unreliable"}
        clearAnswerColor();
    }
    //============================================= Question Two =============================================//
    if(questionOn == "q2"){
        if(answerNum == "A1") {answer.textContent="Yes they are"}
        if(answerNum == "A2") {answer.textContent="No they aren't"}
        if(answerNum == "A3") {answer.textContent=""}
        if(answerNum == "A4") {answer.textContent=""}
        clearAnswerColor();

    }
    //============================================= Question Three =============================================//
    if(questionOn == "q3"){
        if(answerNum == "A1") {answer.textContent="You should not click on articles like this\n"}
        if(answerNum == "A2") {answer.textContent="You should click on the article, just don’t click on the link\n"}
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
        imageTwo.src="UnSkewedGraph.PNG";
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
            answerBar.textContent = "No, unfortunately fake news can be made to look real at first glance";
            setQuestionCorrect(false,"q1","A1");

        }
        if(currentQuestion == "q2"){
            answerBar.textContent = "Right again!"
            nextButton.style.visibility="visible";
            nextButton.textContent = "Next Question";
            nextButton.style.border="";
            setQuestionCorrect(true,"q2","A1");
            fillBarPercentage();
            answersCorrect +=1;

        }
        if(currentQuestion =="q3"){
            answerBar.textContent=
                "-Whenever something seems too shocking, sensational, or exclusive, don’t take the bait and\n" +
                "simply avoid clicking on the article. It will rarely lead to something true and helpful. It will\n" +
                "mostly just disappoint and mislead you. This is the best thing you can do to avoid clickbait\n" +
                "and its associated problems.\n"
            setQuestionCorrect(false,"q3","A1");
        }
    }
    //============================================= Answer Two =============================================//
    if(answer == 1) {
        if (currentQuestion == "q1") {
            answerBar.textContent = "While new does mean that it could be true and just the first source to report, " +
                "it also means there are little to no other sources to compare with";
            setQuestionCorrect(false,"q1","A2");

        }
        if(currentQuestion == "q2"){
            answerBar.textContent="Incorrect, look closer at the graphs";
            setQuestionCorrect(false,"q2","A2");

        }
        if(currentQuestion == "q3"){
            answerBar.textContent=
                "Correct: \n" +
                " This is the second best thing you can do. Clicking on unfamiliar links, especially in clickbait\n" +
                "articles, is not a good idea. This can cause you to get malware accidentally. " +
                "Avoiding unfamiliar links is\n" +
                "good, but clicking on the article title is still a problem as it will lead to disappointment.\n"
            setQuestionCorrect(true,"q3","A2");
            fillBarPercentage();
            setAnswerVisibility(false, "nextQuestion")
            nextTopic.style.visibility = "visible";
            nextTopicButton.style.visibility = "visible";
        }
    }
    //============================================= Answer Three =============================================//
    if(answer == 2) {
        if(currentQuestion == "q1"){
            answerBar.textContent = "It could potentially still be real and just covering new information";
            setQuestionCorrect(false,"q1","A3");
        }
        if(currentQuestion == "q2"){

        }

    }
    //============================================= Answer Four =============================================//
    if(answer == 3) {
        //answer four correct
        if(currentQuestion == "q1"){
            answerBar.textContent = "Correct: " +
                "Many sites and social media can gather information about you. " +
                "This can unfortunately be used to manipulate you into reading " +
                "articles that will appeal to you regardless of if those articles " +
                "are true or not. Always be mindful that your newsfeed could be filtered to " +
                "appeal to you instead of showing you only the truth."
            answerBar.style.color = "white";
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
    if(answersCorrect == 2){questionChange("q3"); clearText()}

    }
function fillBarPercentage(){
    fillBar(1000/3);
}