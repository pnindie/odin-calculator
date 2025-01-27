function cal(stringTxt){
    let [num1, op, num2] = stringTxt.match(/[^\d()]+|[\d.]+/g);
    console.log(num1, op, num2)
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    switch(op){
        case '+':
            return num1+num2;
            break;
        case '-':
            return num1-num2;
            break;
        case '*':
            return num1*num2;
            break;
        case '/':
            if(num2 !== 0){
            return num1/num2;
            }else{ return "Infinity"}
            break;

    }
    return "WIP"
    
}