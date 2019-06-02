function calc() {
    // parseInt is a method that convert string into integer
    var a = parseInt(document.querySelector('#value1').value);
    var b = parseInt(document.querySelector('#value1').value);
    var op = document.querySelector('#operator').value;
    // ** Declare the variable and then add the values to it afterwards
    var calculate;

    if (op == "add") {
        // See ** adding the values afterwards
        calculate =  a + b; 
    } else if (op == "min") {
        //If the calculate where given a global value, then everything here will be conflicted
        calculate = a - b;
    } else if (op == "div") {
        calculate = a / b;
    } else if (op == "mul") {
        calculate = a * b;
    }
    //innerHTML insert a value between a pair of HTML tags 
    //This allow us to display the result onto the HTML
    document.querySelector('#result').innerHTML = calculate;
}

