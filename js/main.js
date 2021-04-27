function data(val){
    
    if(calc.display.value[calc.display.value.length-1]=="+" &&( val=="+" || val=="*" || val=="/" || val=="-" || val=="%" )|| calc.display.value[calc.display.value.length-1]=="*" && ( val=="+" || val=="*" || val=="/" || val=="-" || val=="%" ) || calc.display.value[calc.display.value.length-1]=="/" && ( val=="+" || val=="*" || val=="/" || val=="-" || val=="%" ) || calc.display.value[calc.display.value.length-1]=="-" &&( val=="+" || val=="*" || val=="/" || val=="-" || val=="%" ) || calc.display.value[calc.display.value.length-1]=="%" &&( val=="+" || val=="*" || val=="/" || val=="-" || val=="%" )){

    }else
    calc.display.value += val;
}
function ac(){
    calc.display.value = "";
}
function c(){
    calc.display.value = calc.display.value.slice(0,-1);
}
function equal(){
    if(calc.display.value!= "")
    calc.display.value = eval(calc.display.value);
}