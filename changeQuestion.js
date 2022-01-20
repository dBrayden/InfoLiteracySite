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

    questionOn = questionNum;
    //============================================= ==============================================//
    if(questionNum == "q1"){
        questionName.textContent="Question One";
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

        questionName.textContent="Question Two";
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
        enableImage(true);
    }

    //============================================= ==============================================//
    if(questionNum == "q3"){

        questionName.textContent="Question Three";
        questionAsked.textContent =
            "While checking out various websites, you come across an article with the title “Eating " +
            "Chocolate Every Day Reduces Risk of Cancer, Canadian Study Finds”. As a chocolate lover " +
            "yourself, this is information you’re interested in. Should you:\n";

        setAnswerText("A1");
        setAnswerText("A2");
        setAnswerText("A3");
        setAnswerText("A4");
        setAnswerVisibility(true,"A3");
        setAnswerVisibility(false,"A4")

        enableImage(false);
    }
    //============================================= ==============================================//
    if(questionNum == "q4"){

        questionName.textContent="Question Four";
        questionAsked.textContent =
            "Scrolling through social media, you see an article that says “This Shocking Footage Changes " +
            "Everything.” You click on the article. There is no footage, just a story about a cleaning product " +
            "you haven’t heard of. There’s also a link that claims to take you to a site where you can buy " +
            "that product. You click on the link and find that it takes you to a bizarre website that you have " +
            "difficulty closing. All in all, you’re feeling rightly annoyed by this clickbait article. What is the " +
            "best way to avoid this in the future?\n";

        setAnswerText("A1");
        setAnswerText("A2");
        setAnswerText("A3");
        setAnswerText("A4");
        setAnswerVisibility(true,"A1");
        setAnswerVisibility(true,"A2");
        setAnswerVisibility(false,"A3");
        setAnswerVisibility(false,"A4")

        enableImage(false);
    }

    //copy for new questions

    //============================================= Question  ==============================================//
    if(questionNum == "q5"){

        questionName.textContent="Question Five";
        questionAsked.textContent =
            "The prime minister made a big decision yesterday and there are a lot of articles about it on " +
            "the internet. You see one titled, “Prime Minister Makes Huge Mistake”, one titled “Prime " +
            "Minister Makes a Bold Decision”, and another titled “The Arguments For and Against the " +
            "Prime Minister’s Decision”. How should you figure out what’s going on?\n";

        setAnswerText("A1");
        setAnswerText("A2");
        setAnswerText("A3");
        setAnswerText("A4");
        setAnswerVisibility(true,"A1");
        setAnswerVisibility(true,"A2");
        setAnswerVisibility(true,"A3");
        setAnswerVisibility(true,"A4");
        // setAnswerVisibility(false,"A");

        enableImage(false);
    }
    //============================================= Question  ==============================================//
    if(questionNum == "Credibility"){

        questionName.textContent="Credibility ";
        questionAsked.textContent =
            "";

        setAnswerText("A1");
        setAnswerText("A2");
        setAnswerText("A3");
        setAnswerText("A4");
        setAnswerVisibility(true,"A");
        setAnswerVisibility(false,"A")

        enableImage(false);
    }

    if(questionNum == "Soureces"){

        questionName.textContent="Soureces ";
        questionAsked.textContent =
            "Hello world";

        setAnswerText("A1");
        setAnswerText("A2");
        setAnswerText("A3");
        setAnswerText("A4");
        setAnswerVisibility(true,"A");
        setAnswerVisibility(false,"A")
        enableImage(false);
    }


    //============================================= Question  ==============================================//
    if(questionNum == ""){

        questionName.textContent="Question ";
        questionAsked.textContent =
            "";

        setAnswerText("A1");
        setAnswerText("A2");
        setAnswerText("A3");
        setAnswerText("A4");
        setAnswerVisibility(true,"A");
        setAnswerVisibility(false,"A")

        enableImage(false);
    }

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
        if(answerNum == "A1") {answer.textContent="Take this article title as 100% true without reading the article itself"}
        if(answerNum == "A2") {answer.textContent="Skim the article and then decide if the title is true"}
        if(answerNum == "A3") {answer.textContent="Read the whole article and then decide if the title is true"}
        if(answerNum == "A4") {answer.textContent=""}
        clearAnswerColor();

    }
    //============================================= Question Four =============================================//
    if(questionOn == "q4"){
        if(answerNum == "A1") {answer.textContent="You should not click on articles like this"}
        if(answerNum == "A2") {answer.textContent="You should click on the article, just don’t click on the link"}
        if(answerNum == "A3") {answer.textContent=""}
        if(answerNum == "A4") {answer.textContent=""}
        clearAnswerColor();

    }
    //============================================= Question Five =============================================//
    if(questionOn == "q5"){
        if(answerNum == "A1") {answer.textContent="Read Multiple Articles"}
        if(answerNum == "A2") {answer.textContent="Be critical of where articles come from"}
        if(answerNum == "A3") {answer.textContent="Use strong sources"}
        if(answerNum == "A4") {answer.textContent="All of the Above"}
        clearAnswerColor();

    }
    if(questionOn == "Credibility"){
        if(answerNum == "A1") {answer.textContent="111"}
        if(answerNum == "A2") {answer.textContent="222"}
        if(answerNum == "A3") {answer.textContent="333"}
        if(answerNum == "A4") {answer.textContent="444"}
        clearAnswerColor();

    }
    //copy for more questions
    //============================================= Question Name =============================================//
    if(questionOn == "q"){
        if(answerNum == "A1") {answer.textContent=""}
        if(answerNum == "A2") {answer.textContent=""}
        if(answerNum == "A3") {answer.textContent=""}
        if(answerNum == "A4") {answer.textContent=""}
        clearAnswerColor();

    }

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

// function changeQuestion2(questionNum){
//     var questionName = document.getElementById("currentQuestionName");
//     var questionAsked = document.getElementById("question");
//     var answerOne = document.getElementById("A1");
//     var answerTwo = document.getElementById("A2");
//     var answerThree = document.getElementById("A3");
//     var answerFour = document.getElementById("A4");
//     var imageOne = document.getElementById("imageOne");
//     var imageTwo = document.getElementById("imageTwo");
//     var answerQuestion = document.getElementById("questionType");
//     var explainButton = document.getElementById("explain");
//     var explanation = document.getElementById("explanation");
//     var answerBar = document.getElementById("Answer")
//     var nextButton = document.getElementById("nextQuestion")
//
//
//     if(questionNum == "q1"){
//         questionName.textContent="Question One";
//         questionAsked.textContent =
//             "For this example imagine you are a baseball fan and your favorite team, the\n" +
//             "    Yellow Canaries, recently lost your favorite player Homer Un. This has been the\n" +
//             "    main focus of your searches on the internet for a while now and one day on\n" +
//             "    social media you come across a brand-new article titled “Homer Un Makes a\n" +
//             "    Big Return to the Yellow Canaries”. You go to this article and find it’s from a\n" +
//             "    unofficial website you’ve never seen before. The article looks as though it could be real though."
//         // answerThree.style.visibility = "visible";
//         // answerThree.style.borderColor="#A34B9D";
//
//
//         //button hiding/showing
//         // answerOne.textContent = "It’s real because the article information looks trustworthy";
//         //
//         // answerTwo.textContent = "It’s real because it is brand new";
//
//         // answerThree.textContent = "It’s fake because this contradicts facts you already know";
//         // answerThree.style.border = ""
//
//         // answerFour.textContent = "It’s fake because the source is unreliable";
//         answerFour.style.border="";
//
//         // answerThree.style.borderColor="#A34B9D";
//         // answerThree.style.visibility = "visible";
//
//         // setAnswerVisiblity(true,"A3");
//         // setAnswerText("A1");
//         // setAnswerText("A2");
//         // setAnswerText("A3");
//         // setAnswerText("A4");
//
//
//         answerFour.style.borderColor="#A34B9D";
//         answerFour.style.visibility = "visible";
//
//         explainButton.textContent = " ";
//         explainButton.style.border="none";
//         explainButton.style.visibility = "hidden";
//
//         nextButton.style.border="none"
//         nextButton.style.visibility="hidden";
//         nextButton.textContent = "";
//
//         //image visibility
//         imageOne.style.visibility = "hidden";
//         imageTwo.style.visibility = "hidden";
//
//         //setting question tags
//         questionOn = "q1"
//
//         //changing answer text
//         // answerOne.textContent = "Yes they are";
//         // answerTwo.textContent = "No they aren't";
//         explanation.textContent = "";
//         answerBar.textContent = "";
//
//
//     }
//     if(questionNum == "q2"){
//         answerQuestion.textContent="Does this article attempt to mislead you?"
//         questionName.textContent="Question Two";
//         questionAsked.textContent = "A new pizza place in your city recently released an article stating that " +
//                                     "they’ve seen their sales massively increase. The images below however tell a " +
//             "conflicting story. The top graph is the one the pizza place published while the one on the bottom " +
//             " was published by a reputable third party survey corporation. Could the pizza place be trying to lie to you?";
//
//
//         //button hiding
//         // answerThree.textContent = "";
//         // answerThree.style.border="none";
//         answerFour.textContent = "";
//         answerFour.style.border="none";
//         // answerThree.style.borderColor="white";
//         // answerThree.style.visibility = "hidden";
//
//
//         answerFour.style.visibility = "hidden";
//
//
//         explainButton.textContent = " ";
//         explainButton.style.border="none";
//         explainButton.style.visibility = "hidden";
//
//         nextButton.style.border="none"
//         nextButton.style.visibility="hidden";
//         nextButton.textContent = "";
//
//         //image visibility
//         imageOne.style.visibility = "visible";
//         imageTwo.style.visibility = "visible"
//
//         //changing answer text
//         answerOne.textContent = "Yes they are";
//         answerTwo.textContent = "No they aren't";
//         explanation.textContent = "";
//         answerBar.textContent = "";
//
//
//         //setting question tags
//         // questionOn = "q2"
//
//
//
//
//     }
//     if(questionNum == "q3"){
//         questionName.textContent="Question Three";
//         questionAsked.textContent = "";
//         imageOne.style.visibility = "hidden";
//         imageTwo.style.visibility = "hidden"
//
//
//         //button hiding/showing
//         answerOne.textContent = " ";
//         answerTwo.textContent = " ";
//         answerThree.textContent = " ";
//         answerFour.textContent = " ";
//
//         answerThree.style.borderColor="#A34B9D";
//         answerThree.style.visibility = "visible";
//         answerFour.style.borderColor="#A34B9D";
//         answerFour.style.visibility = "visible";
//
//         // answerOne.style.border="none";
//         // answerTwo.style.border="none";
//         // answerThree.style.border="none";
//         // answerFour.style.border="none";
//
//         // answerThree.style.borderColor="#ffffff";
//         // answerThree.style.visibility = "hidden";
//         // answerFour.style.borderColor="#ffffff";
//         // answerFour.style.visibility = "hidden";
//
//         explainButton.textContent = "";
//         explainButton.style.border="none";
//         explainButton.style.visibility = "hidden";
//
//         nextButton.style.border="none"
//         nextButton.style.visibility="hidden";
//         nextButton.textContent = "";
//
//         //image visibility
//         imageOne.style.visibility = "hidden";
//         imageTwo.style.visibility = "hidden";
//
//         //setting question tags
//         questionOn = "q3"
//
//         //changing answer text
//         // answerOne.textContent = "Yes they are";
//         // answerTwo.textContent = "No they aren't";
//         explanation.textContent = "";
//         answerBar.textContent = "";
//
//
//
//
//     }
//     if(questionNum == "q4"){
//         questionName.textContent="Question Four";
//         questionAsked.textContent = "";
//         imageOne.style.visibility = "hidden";
//
//     }
//
// }

function showAnswer(answer,currentQuestion){
    // var explainButton = document.getElementById("explain")
    var answerBar = document.getElementById("Answer")
    var nextButton = document.getElementById("nextQuestion")
    // var explanation = document.getElementById("explanation");

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

            answersCorrect +=1;

        }
        if(currentQuestion =="q3"){
            answerBar.textContent=
                "-Taking the title of an article at face value can be risky, as you can be missing out on" +
                "vital context or information. Just reading the title of an article is not enough to " +
                "understand what the article is truly about."
            setQuestionCorrect(false,"q3","A1");


        }
        if (currentQuestion =="Credibility"){
            answerBar.textContent= "Answer comes here"
            setQuestionCorrect(false,"Credibility","A1");
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
                "-Skimming an article is better than simply reading the title, but it’s easy to miss " +
                "important information if you only read a small portion of the article. You might miss " +
                "the fact that the study said that chocolate might reduce the risk of cancer."
                setQuestionCorrect(false,"q3","A2");
        }
        if(currentQuestion =="Credibility"){
            answerBar.textContent = "Answer two"
            setQuestionCorrect(false,"Credibility","A2")
        }
    }
    //============================================= Answer Three =============================================//
    if(answer == 2) {
        if(currentQuestion == "q1"){
            answerBar.style.color="#ff0000"
            answerBar.textContent = "It could potentially still be real and just covering new information";
            setQuestionCorrect(false,"q1","A3");
        }
        if(currentQuestion == "q2"){

        }
        if(currentQuestion == "q3"){
            //need to find out how to italicise "might" in the textContent
            answerBar.textContent=
                "-reading the whole article is the best way to make sure you have all the information " +
                "you need to understand the situation. By doing this, you can find any important " +
                "context that would help explain the title or show how the title might be misleading.  " +
                "In this example, you would find that the article would claim that eating chocolate " +
                "might decrease your chance of getting a specific type of cancer, but that’s far from " +
                "concrete proof."
            setQuestionCorrect(true,"q3","A3");
            answersCorrect += 1;
            nextButton.style.visibility="visible";
            nextButton.textContent = "Next Question";
            nextButton.style.border="";

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
            answerBar.style.color = "white"


            nextButton.style.visibility="visible";
            nextButton.textContent = "Next Question";
            nextButton.style.border="";
            setQuestionCorrect(true,"q1","A4");
            answersCorrect += 1;
        }
        if(currentQuestion == "q2"){

        }
        if(questionOn == "q3"){

        }
        if(questionOn == "q5"){
            answerBar.textContent =
                "Yes! Using all three of these suggestions together makes for the best approach for getting your news.  "
            answerBar.style.color = "white"
            nextButton.style.visibility="visible";
            nextButton.textContent = "Next Question";
            nextButton.style.border="";
            setQuestionCorrect(true,"q1","A4");
            answersCorrect += 1;

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
    if(questionNum == "Credibility"){
        explanation.textContent = "this is a explanation"
    }

}
function nextQuestion(){

    if(answersCorrect == 1){questionChange("q2"); clearText()}
    if(answersCorrect == 2){questionChange("q3"); clearText()}
    if(answersCorrect == 3){questionChange("q4"); clearText()}
    if(answersCorrect == 4){questionChange("q5"); clearText()}
    //if(answersCorrect == 5){questionChange("q6"); clearText()}
    //if(answersCorrect == 6){questionChange("q7"); clearText()}
    //if(answersCorrect == 7){questionChange("q8"); clearText()}





    //if(answersCorrect ==){questionChange("q"); clearText()}
}