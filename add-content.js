var today = new Date();
var hourNow = today.getHours();
var greeting = ['Good evening', 'Good afternoon', 'Good morning' , 'Welcome']
var choice;
if (hourNow > 18) {
    choice = greeting[0];
} else if (hourNow > 12) {
    choice = greeting[1];
} else if (hourNow > 0) {
    choice = greeting[2];
} else {
    choice = greeting[3];
}

document.write('<h1 style = \"text-align: center;\">' + choice +'!'  + '</h1>');