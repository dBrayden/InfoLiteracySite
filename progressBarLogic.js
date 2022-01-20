//Not used at the moment. might still have use

var currentPercent = 0;

function fillProgressBar(){
    if(currentPercent != 1000){
        currentPercent+=100;
    }
    else{
        currentPercent=0;
    }
    return currentPercent;
}

function setCurrentPercent(){
    currentPercent = 0;
}