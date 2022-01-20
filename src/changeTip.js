
var currentTip = 0;





function changeTip(currentTip){

    // var prev = document.getElementById("prev");
    // var next = document.getElementById("next");
    var tips = document.getElementById("tips");
    if(currentTip == 0){
        tips.textContent=
            "Before clicking on a website immediately after looking up a piece of information, stop for " +
            "a moment and read. What primarily shows up? Are the links that appear leading to major " +
            "news sites or strange blogs? Make sure to read the sections below the links for more " +
            "information on what the sites talk about and also be aware that the top site is not " +
            "necessarily the most trustworthy."
    }
    if(currentTip == 1){
        tips.textContent=
            "When using a search engine for researching some information you came across, don't " +
            "just look at the first page of results, delve into the pages and look at the ones that aren't " +
            "at the forefront. You might find something you didn't expect."

    }
    if(currentTip == 2){
        tips.textContent=
            "When presented with a link first inspect the link. Is it a site that you know? Is it from a " +
            "reputable news site or social media account that you trust? Or does it link to a site that " +
            "you have never heard of? If it's from a site you don't know it is recommended to check" +
            "the site's validity and sources."

    }
    if(currentTip == 3){
        tips.textContent=
            "When presented with a photo that seems outlandish, always look into where the photo " +
            "came from. This can be done by following the source provided by a post or article. Or by " +
            "using reverse search technology that most modern browsers have in some capacity."

    }
    if(currentTip == 4){
        tips.textContent=
            "The emergence of deep fakes in recent years is allowing nefarious individuals to make " +
            "fake videos showing people of interest saying and doing things that might be false, " +
            "hateful and damaging to their careers. When you come across a video that goes against " +
            "someone's normal behavior, it might be a deep fake. To be on the safe side you should " +
            "consult deep fake experts online to see if the video is legit or not."

    }
    // if(currentTip == 5){
    //
    // }




}
function nextTip(){

    var tip = document.getElementById("tips");

    // tip.textContent = "Testing";

    if(currentTip == 4){
        currentTip = 0;
        changeTip(0);
    }
    else{
        currentTip+=1;
        changeTip(currentTip);
    }

}
function prevTip(){
    if(currentTip == 0){
        currentTip = 4;
        changeTip(4);
    }
    else{
        currentTip-=1;
        changeTip(currentTip);
    }

}