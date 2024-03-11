let monitor = document.getElementById("answer");
 let var1 = 0;
 let var2 = 0;
 let oper = "";

function handleIt (str) {
    if(/[0-9]/.test(str)){
     monitor.textContent = monitor.textContent + str;
    
    }
else if (/[+*-/%]/.test(str)){
    var1 = parseFloat(monitor.textContent);
    monitor.textContent = "";
    oper = str;

}
else if (/=/.test(str)){
    var2= parseFloat(monitor.textContent);
    let result = calculate(var1,oper,var2);
    monitor.textContent = formatResult(result);
}
else if(str === 'C'){
    monitor.textContent = "";
    
}
else if (str === 'coma'){
        // Check if there's already a comma or period in the monitor content
        if (!monitor.textContent.includes(',') && !monitor.textContent.includes('.')) {
            monitor.textContent += ".";
        }

}
else if (str === 'Sqr'){
    var1 = parseInt(monitor.textContent);
    oper = str;
    monitor.textContent = calculate(var1,oper,1);
}

}
function calculate (num1, opp , num2) {
switch(opp) {
    case '+':
        return num1 + num2;
    case '-':
        return num1 - num2;
    case '/':
        return num1 / num2;
    case '*':
        return num1 * num2;
    case 'Sqr':
        return Math.sqrt(num1);
    case '%':
        return num1*num2/100;
 default:
    console.error("Not found", opp)
    return "";
}
}
let crtstyle = 1;
function styleIt(){
    crtstyle = 3 - crtstyle;
    if (crtstyle === 2){
   //document.getElementById("calculator1").disabled = true
    document.getElementById("calculator1").disabled = true
    document.getElementById('calculator2').disabled = false;
    } else {
        document.getElementById("calculator2").disabled = true
        document.getElementById('calculator1').disabled = false;
    }

}
function formatResult(result) {
    let strng = result.toString();
    if (strng.includes('.')){
        let comaNumber = strng.split('.')[1].length;
        let thePress = Math.min(comaNumber, 6);
        return result.toFixed(thePress);
    }else {
      return result.toString();
    }
}