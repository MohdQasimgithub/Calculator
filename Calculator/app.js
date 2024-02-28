let currentDisplay='';
let currentNumber = '';
document.querySelector("#display").innerText=currentDisplay;
document.querySelector("#C").addEventListener("click",()=>{
    currentDisplay='';
    document.querySelector("#display").innerText=currentDisplay;
})
document.querySelector("#btn1").addEventListener("click",()=>{
    currentDisplay=currentDisplay +'1';
    document.querySelector("#display").innerText=currentDisplay;
})
document.querySelector("#btn2").addEventListener("click",()=>{
    currentDisplay=currentDisplay + '2';
    document.querySelector("#display").innerText=currentDisplay;
})
document.querySelector("#btn3").addEventListener("click",()=>{
    currentDisplay=currentDisplay + '3';
    document.querySelector("#display").innerText=currentDisplay;
})
document.querySelector("#btn4").addEventListener("click",()=>{
    currentDisplay=currentDisplay + '4';
    document.querySelector("#display").innerText=currentDisplay;
})
document.querySelector("#btn5").addEventListener("click",()=>{
    currentDisplay=currentDisplay + '5';
    document.querySelector("#display").innerText=currentDisplay;
})
document.querySelector("#btn6").addEventListener("click",()=>{
    currentDisplay=currentDisplay + '6';
    document.querySelector("#display").innerText=currentDisplay;
})
document.querySelector("#btn7").addEventListener("click",()=>{
    currentDisplay=currentDisplay + '7';
    document.querySelector("#display").innerText=currentDisplay;
})
document.querySelector("#btn8").addEventListener("click",()=>{
    currentDisplay=currentDisplay + '8';
    document.querySelector("#display").innerText=currentDisplay;
})
document.querySelector("#btn9").addEventListener("click",()=>{
    currentDisplay=currentDisplay + '9';
    document.querySelector("#display").innerText=currentDisplay;
})
document.querySelector("#btn0").addEventListener("click",()=>{
    currentDisplay=currentDisplay + '0';
    document.querySelector("#display").innerText=currentDisplay;
})
document.querySelector("#btnPlus").addEventListener("click",()=>{
    currentDisplay=(currentDisplay) + '+';
    document.querySelector("#display").innerText=currentDisplay;
})
document.querySelector("#btnMinus").addEventListener("click",()=>{
    currentDisplay=(currentDisplay) + '-';
    document.querySelector("#display").innerText=currentDisplay;
})
document.querySelector("#btnMultiply").addEventListener("click",()=>{
    currentDisplay=(currentDisplay) + '*';
    document.querySelector("#display").innerText=currentDisplay;
})
document.querySelector("#btnDivide").addEventListener("click",()=>{
    currentDisplay=(currentDisplay) + '/';
    document.querySelector("#display").innerText=currentDisplay;
})
document.querySelector("#btnEqual").addEventListener("click",()=>{
    currentDisplay=eval(currentDisplay);
    document.querySelector("#display").innerText=currentDisplay;
})
document.querySelector("#btnDot").addEventListener("click",()=>{
   
    currentDisplay=currentDisplay + '.';
    document.querySelector("#display").innerText=currentDisplay;
})
document.querySelector("#btnDel").addEventListener("click",()=>{
    let x=currentDisplay.length;
    currentDisplay=currentDisplay.substring(0,x-1);
    document.querySelector("#display").innerText=currentDisplay;
})
document.querySelector("#btnPercentage").addEventListener("click",()=>{
    currentDisplay=currentDisplay + '%';
    document.querySelector("#display").innerText=currentDisplay;
})
document.querySelector("#btnDoubleZero").addEventListener("click",()=>{
    currentDisplay=currentDisplay + '00';
    document.querySelector("#display").innerText=currentDisplay;
})

