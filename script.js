alert("SIMPLE CALCULATOR");

let num1 = parseFloat(prompt("Enter the first number: "));
let num2 = parseFloat(prompt("Enter the second number: "));

const option = parseInt(prompt(
    "What operation do you want to perform?\n"+
    "1. Addition\n"+
    "2. Subtraction\n"+
    "3. Multiplication\n"+
    "4. Division\n\n"+
    "Operation: "
));

let result

if(option == 1){
    result = num1 + num2
    alert("The result of your addition is: "+ result)
}
else if(option == 2){
    result = num1 - num2
    alert("The result of your subtraction is: "+ result)
}
else if(option == 3){
    result = num1 * num2
    alert("The result of your multiplicaton is: "+ result)
}
else if(option == 4){
    result = num1 / num2
    alert("The result of your division is: "+ result)
}
else{
    alert("Wrong input for operation") 
}