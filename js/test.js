window.prompt("What is your name?");


function myFunction() {
    var txt;
    var person = prompt("Enter Name", "");
    if (person == null || person == "") {
        txt = "User chose not to enter their name.";
    } else {
        txt = "Welcome" + person + "!";
    }
} document.write(txt);
