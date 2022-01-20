
var questionOn = "q1";
var answersCorrect = 0;

function questionChange(questionNum) {
    var questionName = document.getElementById("currentQuestionName");
    var questionAsked = document.getElementById("question");
    var answerBar = document.getElementById("Answer")
    questionOn = questionNum;
    //============================================= ==============================================//
    if (questionNum == "q1") {
        questionName.textContent = "Question One";
        questionAsked.textContent =
            "Smart Home Security Camera Conspires With Burglars In Exchange For Half The Loot";

        setAnswerText("A1");
        setAnswerText("A2");
        setAnswerText("A3");
        setAnswerText("A4");
        setAnswerVisibility(false, "A4");
        setAnswerVisibility(false, "A3");
        setAnswerVisibility(false, "nextQuestion")
        answerBar.textContent="";
        showResponsePNG("hide");


        // clearAnswerColor();

    }
    //============================================= ==============================================//
    if (questionNum == "q2") {
        // let questionNum = "Is it a fake news? \n 3 REASONS WHY YOU SHOULD STOP EATING PEANUT BUTTER " +
        //     "CUPS!";
        // let result = questionNum.link("https://www.davidwolfe.com/3-reasons-stop-eating-peanut-butter-cups/");
        // docment.getElementById("link").innerHTML = result;

        questionName.textContent = "Question Two ";
        questionAsked.textContent = ("Is it a fake news? \n 3 REASONS WHY YOU SHOULD STOP EATING PEANUT BUTTER " +
            "CUPS!"); //"https://www.davidwolfe.com/3-reasons-stop-eating-peanut-butter-cups/"


        setAnswerText("A1");
        setAnswerText("A2");
        setAnswerText("A3");
        setAnswerText("A4");
        let text = "Is it a fake news? \n 3 REASONS WHY YOU SHOULD STOP EATING PEANUT BUTTER \" +\n" +
            "             \"CUPS!\"";
        let result = text.link("https://www.davidwolfe.com/3-reasons-stop-eating-peanut-butter-cups/")
        document.getElementById("question").innerHTML = result;
        setAnswerVisibility(false, "A4")
        setAnswerVisibility(false, "A3");
        setAnswerVisibility(false, "nextQuestion")
        answerBar.textContent="";
        showResponsePNG("hide");
        // answerBar.textContent = (" ");
        // enableImage(true);


    }

    //============================================= ==============================================//
    if (questionNum == "q3") {
        questionName.textContent = "Question Three";
        questionAsked.textContent =
            "Article Gardening: A fun hobby that’s good for your health\n" +
            "Is the article real or fake";
        let text = "Is it a fake news? \n Article Gardening: A fun hobby that’s good for your " +
            "health";
        let result = text.link("https://www.thenationshealth.org/content/47/5/17/")
        document.getElementById("question").innerHTML = result;
        setAnswerText("A1");
        setAnswerText("A2");
        setAnswerText("A3");
        setAnswerText("A4");
        setAnswerVisibility(false, "A4");
        setAnswerVisibility(false, "A3");
        setAnswerVisibility(false, "nextQuestion")
        answerBar.textContent="";
        showResponsePNG("hide");

        // clearAnswerColor();

    }
    if (questionNum == "q4") {
        questionName.textContent = "Question Four";
        questionAsked.textContent =
            "The Pacific Northwest Tree Octopus\n" +
            "Is the article real or fake";
        let text = "Is it a fake news? The Pacific Northwest Tree Octopus\n ";
        let result = text.link("https://zapatopi.net/treeoctopus/")
        document.getElementById("question").innerHTML = result;

        setAnswerText("A1");
        setAnswerText("A2");
        setAnswerText("A3");
        setAnswerText("A4");
        setAnswerVisibility(false, "A4");
        setAnswerVisibility(false, "A3");
        setAnswerVisibility(false, "nextQuestion")
        answerBar.textContent="";
        showResponsePNG("hide");

    }
    if (questionNum == "q5") {
        questionName.textContent = "Question Five";
        questionAsked.textContent =
            "Baby octopuses grow hundreds of temporary organs, then lose them without a trace\n" +
            "Is the article real or fake";
        let text = "Is it a fake news? Baby octopuses grow hundreds of temporary organs, then lose them without a trace\n ";
        let result = text.link("https://www.livescience.com/hatchling-octopus-kollikers-organs-microscopy")
        document.getElementById("question").innerHTML = result;

        setAnswerText("A1");
        setAnswerText("A2");
        setAnswerText("A3");
        setAnswerText("A4");
        setAnswerVisibility(false, "A4");
        setAnswerVisibility(false, "A3");
        setAnswerVisibility(false, "nextQuestion")
        answerBar.textContent="";

        showResponsePNG("hide");

    }


    }

    function setAnswerVisibility(visible, answerNum) {
        var answer = document.getElementById(answerNum);

        if (visible == false) {
            answer.textContent = "";
            answer.style.border = "none";
            answer.style.visibility = "hidden";
        }
        if (visible == true) {
            answer.style.border = "";
            answer.style.borderColor = "#A34B9D";
            answer.style.visibility = "visible";
        }
    }

    function showResponsePNG(symbol){
        if(symbol == "stopSign"){
            document.getElementById("imageOne").src="stopSign.png"
            document.getElementById("imageOne").style.visibility="visible"
        }
        if(symbol == "smileyFace"){
            document.getElementById("imageOne").src="smileFace.png"
            document.getElementById("imageOne").style.visibility="visible"
        }
        if(symbol == "hide"){
            document.getElementById("imageOne").src=""
            document.getElementById("imageOne").style.visibility="hidden";
        }
    }

    /**
     * @param {string} answerNum id of the answer button
     *
     */
    function setAnswerText(answerNum) {
        var answer = document.getElementById(answerNum);
        //============================================= Question One =============================================//
        if (questionOn == "q1") {
            if (answerNum == "A1") {
                answer.textContent = "It’s a real article"
            }
            if (answerNum == "A2") {
                answer.textContent = "It’s a fake article"
            }
            if (answerNum == "A3") {
                answer.textContent = ""
            }
            if (answerNum == "A4") {
                answer.textContent = ""
            }
            clearAnswerColor();
        }
        //============================================= Question Two =============================================//
        if (questionOn == "q2") {
            if (answerNum == "A1") {
                answer.textContent = "Yes they are"
            }
            if (answerNum == "A2") {
                answer.textContent = "No they aren't"
            }
            if (answerNum == "A3") {
                answer.textContent = ""
            }
            if (answerNum == "A4") {
                answer.textContent = ""
            }
            clearAnswerColor();

        }
        if (questionOn == "q3") {
            if (answerNum == "A1") {
                answer.textContent = " It's a real article."
            }
            if (answerNum == "A2") {
                answer.textContent = " It's not a real article."
            }
            if (answerNum == "A3") {
                answer.textContent = ""
            }
            if (answerNum == "A4") {
                answer.textContent = ""
            }
            clearAnswerColor();

        }
        if (questionOn == "q4") {
            if (answerNum == "A1") {
                answer.textContent = " It's not a real article."
            }
            if (answerNum == "A2") {
                answer.textContent = " It's a real article."
            }
            if (answerNum == "A3") {
                answer.textContent = ""
            }
            if (answerNum == "A4") {
                answer.textContent = ""
            }
            clearAnswerColor();
        }
        if (questionOn == "q5") {
            if (answerNum == "A1") {
                answer.textContent = " It's not a real article."
            }
            if (answerNum == "A2") {
                answer.textContent = " It's a real article."
            }
            if (answerNum == "A3") {
                answer.textContent = ""
            }
            if (answerNum == "A4") {
                answer.textContent = ""
            }
            clearAnswerColor();
        }


    }

    function showAnswer(answer, currentQuestion) {
        // var explainButton = document.getElementById("explain")
        var answerBar = document.getElementById("Answer")
        var nextButton = document.getElementById("nextQuestion")


        //============================================= Answer One =============================================//
        if (answer == 0) {
            if (currentQuestion == "q1") {
                answerBar.textContent = "No, unfortunately fake news can be made to look real at first glance";
                setQuestionCorrect(false, "q1", "A1");
                showResponsePNG("stopSign");

            }
            if (currentQuestion == "q2") {
                answerBar.textContent = "Good Job!"

                nextButton.style.visibility = "visible";
                nextButton.textContent = "Next Question";
                nextButton.style.border = "";
                setQuestionCorrect(true, "q2", "A1");
                showResponsePNG("smileyFace");

                answersCorrect += 1;

            }
            if (currentQuestion == "q3") {
                answerBar.textContent = "Aha，you are right!"

                nextButton.style.visibility = "visible";
                nextButton.textContent = "Next Question";
                nextButton.style.border = "";
                setQuestionCorrect(true, "q3", "A1");
                showResponsePNG("smileyFace");
                answersCorrect += 1;
            }
            if (currentQuestion == "q4") {
                answerBar.textContent = "Aha，you are right!"

                nextButton.style.visibility = "visible";
                nextButton.textContent = "Next Question";
                nextButton.style.border = "";
                setQuestionCorrect(true, "q4", "A1");
                showResponsePNG("smileyFace");
                answersCorrect += 1;
            }
            if (currentQuestion == "q5") {
                answerBar.textContent = "Aha，you are right!"

                nextButton.style.visibility = "visible";
                nextButton.textContent = "Next Question";
                nextButton.style.border = "";
                setQuestionCorrect(true, "q5", "A1");
                showResponsePNG("smileyFace");
                answersCorrect += 1;
            }
        }
        //============================================= Answer Two =============================================//
        if (answer == 1) {
            if (currentQuestion == "q1") {
                answerBar.textContent = "Good job!";
                setQuestionCorrect(true, "q1", "A2");
                showResponsePNG("smileyFace");
                answersCorrect += 1;
                nextButton.style.visibility = "visible";
                nextButton.textContent = "Next Question";
                nextButton.style.border = "";

            }
            if (currentQuestion == "q2") {
                answerBar.textContent = "No, unfortunately fake news can be made to look real at first glance";
                setQuestionCorrect(false, "q2", "A2");
                showResponsePNG("stopSign");


            }
            if (currentQuestion == "q3") {
                answerBar.textContent = "Opps, the answer is not correct"
                setQuestionCorrect(false, "q3", "A2")
                showResponsePNG("stopSign");
            }
            if (currentQuestion == "q4") {
                answerBar.textContent = "Opps, the answer is not correct"
                setQuestionCorrect(false, "q4", "A2")
                showResponsePNG("stopSign");
            }
            if (currentQuestion == "q5") {
                answerBar.textContent = "Opps, the answer is not correct"
                setQuestionCorrect(false, "q5", "A2")
                showResponsePNG("stopSign");
            }

        }

    }
function clearText(){
    var explanation = document.getElementById("Answer");
    explanation.textContent=""
}

    function nextQuestion() {

        if (answersCorrect == 1) {
            questionChange("q2");

        }
        if (answersCorrect == 2) {
            questionChange("q3");

        }
        if (answersCorrect == 3) {
            questionChange("q4");

        }
        if (answersCorrect == 4) {
            questionChange("q5");

        }
        //if(answersCorrect == 5){questionChange("q6"); clearText()}
        //if(answersCorrect == 6){questionChange("q7"); clearText()}
        //if(answersCorrect == 7){questionChange("q8"); clearText()}
        //if(answersCorrect ==){questionChange("q"); clearText()}

}
