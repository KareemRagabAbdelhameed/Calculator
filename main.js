
let myDisplay = document.querySelector(".display");
let resultDisplayed =false;
function appendToScreen(input){
    if(resultDisplayed){
        myDisplay.value = "";
        resultDisplayed=false;
    }
    myDisplay.value +=input;
    myDisplay.style.fontSize="30px";
    myDisplay.style.padding="10px";
}
function clearDispaly(){
    myDisplay.value = "";
    resultDisplayed=false;
}

function calculate(){
    try{
        myDisplay.value = eval(myDisplay.value);
        resultDisplayed=true;
    }
    catch(error){
        myDisplay.value= "Error";
        resultDisplayed=true;
    }
}
