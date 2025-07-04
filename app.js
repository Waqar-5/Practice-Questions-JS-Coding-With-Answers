// Chap 1 Alerts

// Q#1 
// 1. Write a script to greet your website visitor using JS alert box.
alert("Welcome to my website!")


// Q#2 => Write a script to display following message on your web page:
alert("Error! Please enter a valid password")

//  Q#3: Write a script to display following message on your web
// page: (Hint : Use line break)

alert("Welcome to JS Land...\n Happy Coding!")

// Q#4: Write a script to display following messages in sequence:

alert("Welcome to JS Land...")
alert("Happy Coding")


// Q#5: Generate the following message through browser’s
// developer console:
// I had run this in console browser!
alert("Hello... I can run JS through my web browser’s console");



document.write("************************************************************** <br>")




// Chap 2 VARIABLES FOR STRINGS
// Q#1: Declare a variable called username.
var username; 

// Q#2: Declare a variable called myName & assign to it a string
// that represents your Full Name.
var myName = "Waqar Ali"


// Q#3: Write script to
// a) Declare a JS variable, titled message.
// b) Assign “Hello World” to variable message
// c) Display the message in alert box.

// Declare a JS variable, titled message.
var message; 
// Assign “Hello World” to variable message
message =  "Hello World";
//  Display the message in alert box.
alert(message)


// Q#4: Write a script to save student’s bio data in JS variables and
// show the data in alert boxes.

// Saving student bio data
var StudentName = "Waqar Ali"
var age = 19;
var course = "Web & App Development"
var rollNumber = "WAD-231456"

// // Showing each piece of info in alert boxes
alert("Name: " +  StudentName)
alert("Age: " +  age)
alert("Course: " +  course)
alert("RollNumber: " +  rollNumber)


// Q#5: Write a script to display the following alert using one JS
// variable:
var oneline  = "PIZZA\nPIZZ\nPIZ\nPI\nP\n"
alert(oneline) 


// Q#6: Declare a variable called email and assign to it a string that
// represents your Email Address(e.g. example@example.com).
// Show the blow mentioned message in an alert box.(Hint: use
// string concatenation)

var email = "example@waqar.com"
alert("My email address is " + email);


// Q#7 Declare a variable called book & give it the value “A
// smarter way to learn JavaScript”. Display the following
// message in an alert box:
var book = "A smarter way to learn JavaScript"
alert("I am learning from the Book " + book)



// Q#8 Write a script to display this in browser through JS
document.write(" Yah! I can write HTML content through JavaScript <br>")


// Q#9 Store following string in a variable and show in alert and
// browser through JS
// “▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”

document.write("▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬ <br>")

document.write("**************************************************************<br>")




// Chap#3: VARIABLES FOR NUMBERS

// Q#1: Declare a variable called age & assign to it your age. Show
// your age in an alert box.
var age = 19;
alert(`I am ${age} years old.`)

// Q#2: Declare & initialize a variable to keep track of how many
// times a visitor has visited a web page. Show his/her
// number of visits on your web page. For example: “You
// // have visited this site N times”.
var visitedTimes = 12
alert("You have visisted this site " + visitedTimes + " times.")



//Q#3: Declare a variable called birthYear & assign to it your
// birth year. Show the following message in your browser:
var birthYear = 2006
document.write(`My birth year is ${birthYear}. <br> Data type of my declared variable is number <br>`)



// Q#4: A visitor visits an online clothing store
// www.xyzClothing.com . Write a script to store in variables
// the following information:
// a. Visitor’s name
// b. Product title
// c. Quantity i.e. how many products a visitor wants to
// order
// Show the following message in your browser: “John
// Doe ordered 5 T-shirt(s) on XYZ Clothing store”.

  // Step 1: Declare and initialize variables
var visitorName = "Suhail";
var productTitle = "T-shirt(s)";
var quantity = 5;

//   // Step 2: Display the message in the browser
document.write(visitorName + " ordered " + quantity + " " + productTitle + " on XYZ Clothing. <br>");




document.write("**************************************************************")






// Chap#4: VARIABLE NAMES: LEGAL & ILLEGAL

// Q#1: 1. Declare 3 variables in one statement.
// var a, b, c; 



// Q#2: Declare 5 legal & 5 illegal variable names.
// legals
// var userName;
// var _age;
// var $price;
// var totalAount;
// var camelCaseVariable;

//  5 illegal
// var 1user; // Cannot start with a number
// var full-name //Hyphens are not allowed (use camelCase instead)
// var user name;  // Spaces are not used.
// var function; //'function' is a reserved keyword
// var @price   //Special characters (like @, &, #) are not allowed




// Q#3 Display this in your browser
// a) A heading stating “Rules for naming JS variables”
// b) Variable names can only contain ______, ______,
// ______ and ______.
// For example $my_1stVariable
// c) Variables must begin with a ______, ______ or
// _____. For example $name, _name or name
// d) Variable names are case _________
// e) Variable names should not be JS _________

// A) part
document.write("<h1>Rules for naming JS variables</h1>")
// // B) part
document.write("<p>Variable names can only contain, number, $ and _. For example : <b>$my_1stVraible</b></p>")
// C) part
document.write("<p>Variables must begin with a letter, $ or _ . For example : <b> $name, _name </b> or <b>name</b></p>")
// D) part
document.write("<p>Variable names are case <b>sensitive</b></p>.")
// E) part
document.write("<p>Variable names should not be JS <b>keywords</b> </p>.")




document.write("************************************************************** <br>")



// Chap#5: MATH EXPRESSIONS
// Q#1: Write a program that take two numbers & add them in a
// new variable. Show the result in your browser.

var num1 = prompt("Enter first number: ");
var num2 = prompt("Enter second number: ");
var result = Number(num1) + Number(num2);
// console.log(`Sum of ${num1} and ${num2} is ${result}.`);
document.write(`Sum of ${num1} and ${num2} is ${result}.`);


// Q#2:  Repeat task1 for subtraction, multiplication, division & modulus.

var num1 = Number(prompt("Enter your first number: "));
var num2 = Number(prompt("Enter your second number: "));

var diff = num1 - num2;
var product = num1 * num2;
var quotient = num1 / num2;
var remainder = num1 % num2;

document.write(`<h2>Results:</h2>`);
document.write("Difference / Minus of " + num1 + " and " + num2 + " is " + diff + ". <br>");
document.write("Product of " + num1 + " and " + num2 + " is " + product + ". <br>");
document.write("Quotient of " + num1 + " and " + num2 + " is " + quotient + ". <br>");
document.write("Remainder when " + num1 + " is divided by " + num2 + " is " + remainder + ". <br>");


// Q#3: Do the following using JS Mathematic Expressions
// a. Declare a variable.
var num;


// b. Show the value of variable in your browser like “Value
// after variable declaration is: ??”.
document.write("Value after variable declaration is: " + num + "<br>");


// c. Initialize the variable with some number.
num = 5;


// d. Show the value of variable in your browser like “Initial
// value: 5”.
document.write("Initial value: " + num)


// e. Increment the variable.
++num

// f. Show the value of variable in your browser like “Value
// after increment is: 6”.

document.write(" <br> Value after increment is: " + num)


// g. Add 7 to the variable.
num =  num + 7

// h. Show the value of variable in your browser like “Value after addition is: 13”.

document.write("<br> Value after addition is: " + num)


// i. Decrement the variable.
--num 

// j. Show the value of variable in your browser like “Value
// after decrement is: 12”.

document.write("<br> Value after decrement is: " + num)

// k. Show the remainder after dividing the variable’s valueby 3.

num = num % 3;


// l. Output : “The remainder is : 0”.
 
document.write("<br> The remainder is: " + num)



// Q#4: Cost of one movie ticket is 600 PKR. Write a script to store
// ticket price in a variable & calculate the cost of buying 5 tickets
// to a movie. Example output:
var perTicket = 600
var tickets = 5
var result = perTicket * tickets
document.write("<h2>Total Ticket Price collection!</h2>")
document.write("Total cost to buy " + tickets + " tickets to a movie is " + result + "PKR.")



//Q#5: Write a script to display multiplication table of any
// number in your browser. E.g
var num = +prompt("Enter a number to display its multiplication table: ");

document.write("<h1>Multiplication Table of " + num + "</h1>");
document.write(num + " × 1 = " + (num * 1) + "<br>");
document.write(num + " × 2 = " + (num * 2) + "<br>");
document.write(num + " × 3 = " + (num * 3) + "<br>");
document.write(num + " × 4 = " + (num * 4) + "<br>");
document.write(num + " × 5 = " + (num * 5) + "<br>");
document.write(num + " × 6 = " + (num * 6) + "<br>");
document.write(num + " × 7 = " + (num * 7) + "<br>");
document.write(num + " × 8 = " + (num * 8) + "<br>");
document.write(num + " × 9 = " + (num * 9) + "<br>");
document.write(num + " × 10 = " + (num * 10) + "<br>");




// Q#6 The Temperature Converter: It’s hot out! Let’s make a
// converter based on the steps here.
// a. Store a Celsius temperature into a variable.
// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
// c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to Celsius & output “NNoF is NNoC”.


document.write("<br><h2>Interchanging in temperature.</h2>")
// a. Store a Celsius temperature into a variable
var celsius = 25

// b. Convert it to Fahrenheit & output
var fahrenheitFromCelsius = (celsius * 9/5) + 32;
document.write(celsius + "°C is " + fahrenheitFromCelsius + "°F <br>");

// c. Now store a Fahrenheit temperature into a variable
var fahrenheit = 70;

// d. Convert it to Celsius & output
var celsiusFromFahrenheit = (fahrenheit - 32) * 5/9;
document.write(fahrenheit + "°F is " + celsiusFromFahrenheit.toFixed(2) + "°C");



// Q#7: Write a program to implement checkout process of a
// shopping cart system for an e-commerce website. Store
// the following in variables

// a. Price of item 1
var priceItem1 = 650;
// b. Price of item 2
var priceItem2 = 100;
// c. Ordered quantity of item 1
var quantityItem1 = 3;
// d. Ordered Quantity of item 2
var quantityItem2 = 7;
// e. Shipping charges
var shippingCharges = 100;

// calculate total cost
var totalCost = (priceItem1 * quantityItem1) + (priceItem2 * quantityItem2) + shippingCharges;

// show receipt
document.write("<h1>Shopping Cart</h1>");
document.write("Price of item 1 is " + priceItem1 + "<br>")
document.write("Quantity of item 1 is " + quantityItem1+ "<br>")
document.write("Price of item 2 is " + priceItem2 + "<br>")
document.write("Quantity of item 2 is " + quantityItem2  + "<br>")
document.write("Shipping Charges: " + shippingCharges + "<br> <br>")
document.write("<b>Total cost of your order is  " + totalCost + "</b>");




// Q#8 Store total marks & marks obtained by a student in 2
// variables. Compute the percentage & show the result in
// your browser
// store total marks
var totalMarks = 980;

// // store obtained marks
var marksObtained = 804

// // Computer percentage
var percentage = (marksObtained/totalMarks) * 100

// // Show the result in browser
document.write("<h2>Marks Sheet</h2>");
document.write("Total Marks: " + totalMarks + "<br>");
document.write("Marks Obtained: " + marksObtained + "<br>");
// document.write("Percentage: " + percentage.toFixed(2) + "%");
document.write("Percentage: " + percentage + "%");



// Q#9  Assume we have 10 US dollars & 25 Saudi Riyals. Write a script to convert the total currency to Pakistani Rupees. Perform all calculations in a single expression.(Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee and 1 Saudi Riyal = 28 Pakistani Rupee)

// Currency conversion in a single expression
var dollar1InPKR = 104.80
var riyal1InpKR = 28
// var TotalPKR = (10 * dollar1InPKR) + (25 * riyal1InpKR)

var totalPKR = (10 * 104.80) + (25 * 28);

// show result
document.write("<h2>Currency in PKR</h2>");
document.write("Total Currency in PKR: " + totalPKR)
// document.write("Total Currency in PKR: " + TotalPKR)


// Q#10 Write a program to initialize a variable with some  number and do arithmetic in following sequence:
// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2
// Perform all calculations in a single expression

// Initialize a variable
var number = 10; 

// perform all calcaulations in a single expression
var result = ((number + 5) * 10) / 2;

// show result
document.write("<h2>Arithmetic Sequence Result</h2>");
document.write("Initial number: " + number + "<br>");
document.write("Final result: " + result);



// Q#11: The Age Calculator: Forgot how old someone is?
// Calculate it!
// a. Store the current year in a variable.
// b. Store their birth year in a variable.
// c. Calculate their 2 possible ages based on the stored
// values.

// Output them to the screen like so: “They are either NN or NN
// years old”.

var currentYear = 2025;
var birthYear = 2006;

// // 2 possible ages
var age1 = currentYear - birthYear;
var age2 = age1 - 1;


// // The result
document.write("<h1>Age Calculator</h1>");
document.write("Current Year: " + currentYear)
document.write("<br> Birth Year: " + birthYear)
document.write("<br> They are either " + age2 + " or " + age1 + " Years old.");



// Q#12 The Geometrizer: Calculate properties of a circle.
// a. Store a radius into a variable.
// b. Calculate the circumference based on the radius, and
// output “The circumference is NN”.
// (Hint : Circumference of a circle = 2 π r , π = 3.142)
// Calculate the area based on the radius, and output “The
// area is NN”. (Hint : Area of a circle = π r2, π = 3.142) 

// a)
var radius = 20;

// // pi value
var pi = 3.142; 

// // b. calculate circumference
var circumference = 2 * pi * radius;

// // c. Calculate area
var area = pi * radius * radius;

// // the results
document.write("<h1>The Geometrizer</h1>"); 
document.write("Radius of a circle: "+ radius); 
// document.write("The circumference is " + circumference.toFixed(2) + "<br>")
document.write("<br> The circumference is " + circumference + "<br>")
// document.write("The area is " + area.toFixed(2));
document.write("The area is " + area);



// Q#13 The Lifetime Supply Calculator: Ever wonder how
// much a “lifetime supply” of your favorite snack is?
// Wonder no more.
// a. Store your favorite snack into a variable
// b. Store your current age into a variable.
// c. Store a maximum age into a variable.
// d. Store an estimated amount per day (as a number).
// e. Calculate how many would you eat total for the rest of
// your life.
// Output the result to the screen like so: “You will need
// NNNN to last you until the ripe old age of NN”.

// a)  Favorite snack
var favoriteSnack = "Chips";

//  b)  Current age
var currentAge = 15;

// // c) Maximum age
var maxAge = 65;

// // d) Amount per day
var amountPerDay = 3;

// // e. Calculate total snacks needed
var yearsRemaining = maxAge - currentAge;
var totalNeeded = yearsRemaining * 365 * amountPerDay;
  // var totalNeeded = 150;




// // Output the result
 document.write("<h2>Lifetime Supply Calculator</h2>");
  document.write("Favorite Snack: " + favoriteSnack + "<br>");
  document.write("Current Age: " + currentAge + "<br>");
  document.write("Estimated Maximum Age: " + maxAge + "<br>");
  document.write("Amount Per Day: " + amountPerDay + "<br><br>");
  document.write("You will need " + totalNeeded + " " + favoriteSnack + " to last you until the ripe old age of " + maxAge + ". <br>");






  document.write("************************************************************** <br>")




// Chap#6: MATH EXPRESSIONS


// // Q#1 Write a program to take a number in a variable, do the required arithmetic to display the following result in your browser:

var a = 10
document.write("Result: <br>")
document.write("The value of a is: " + a)
document.write("<br><b>............................................</b>")

// // post increament
a = ++a
document.write("<br><br>The value of ++a is: " + a)
document.write("<br>Now the value of a is: " + a)



document.write("<br><br>The value of a++ is: " + a)
a++
document.write("<br>Now the value of a is: " + a)


a = --a
document.write("<br><br>The value of --a is: " + a)
document.write("<br>Now the value of a is: " + a)


document.write("<br><br>The value of a-- is: " + a)
a--
document.write("<br>Now the value of a is: " + a)



// Q#2 What will be the output in variables a, b & result after
// execution of the following script:
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// Explain the output at each stage:
// --a;
// --a - --b;
// --a - --b + ++b;
// --a - --b + ++b + b--;

// Initial values
var a = 2, b = 1;

// // Step-by-step breakdown
// // --a => a becomes 1
// // --b => b becomes 0
// // ++b => b becomes 1
// // b-- => value used = 1, then b becomes 0

var result =  --a - --b + ++b + b--;


// // document.write("Step-by-step Explanation:<br>");
// // document.write("--a = 1 (a becomes 1) <br>");
// // document.write("--b = 0 (b becomes 0) <br>");
// // document.write("++b = 1 (b becomes 1 again)<br>");
// // document.write("b-- = 1 (used as 1, then b becomes 0)<br>");

document.write("<br> <br>Final Result: ");
document.write("<br> a =", a);       // should be 1
document.write("<br> b =", b);       // should be 0
document.write("<br> result =", result + "<br>"); // should be 3



// Q#3 Write a program that takes input a name from user & greet the user.
var userName = prompt("Enter you name for greeting: ")
document.write("Hello, " + userName + "! Welcome to my website 💖")


// Q#5Write a program to take input a number from user & display it’s multiplication table on your browser. If user does not enter a new number, multiplication table of 5 should be displayed by default.

var userInput = prompt("Enter a number for Getting its multiplication table: ") || 5

userInput = Number(userInput); // Convert to number

  // Display the table manually (no loop!)
  document.write("<h2>Multiplication Table of " + userInput + "</h2>");
  document.write(userInput + " x 1 = " + (userInput * 1) + "<br>");
  document.write(userInput + " x 2 = " + (userInput * 2) + "<br>");
  document.write(userInput + " x 3 = " + (userInput * 3) + "<br>");
  document.write(userInput + " x 4 = " + (userInput * 4) + "<br>");
  document.write(userInput + " x 5 = " + (userInput * 5) + "<br>");
  document.write(userInput + " x 6 = " + (userInput * 6) + "<br>");
  document.write(userInput + " x 7 = " + (userInput * 7) + "<br>");
  document.write(userInput + " x 8 = " + (userInput * 8) + "<br>");
  document.write(userInput + " x 9 = " + (userInput * 9) + "<br>");
  document.write(userInput + " x 10 = " + (userInput * 10) + "<br>");


// Q#6 Take
// a) Take three subjects name from user and store them in 3
// different variables.
// b) Total marks for each subject is 100, store it in another
// variable.
// c) Take obtained marks for first subject from user and
// stored it in different variable.
// d) Take obtained marks for remaining 2 subjects from user
// and store them in variables.
// e) Now calculate total marks and percentage and show the
// result in browser like this.(Hint: user table)


// Subject names
  var sub1 = prompt("Enter name of first subject:");
  var sub2 = prompt("Enter name of second subject:");
  var sub3 = prompt("Enter name of third subject:");

  // Total marks per subject
  var totalPerSub = 100;

  // Obtained marks
  var mark1 = +prompt("Enter obtained marks for " + sub1 + ":");
  var mark2 = +prompt("Enter obtained marks for " + sub2 + ":");
  var mark3 = +prompt("Enter obtained marks for " + sub3 + ":");

  // Individual percentages
  var perc1 = (mark1 / totalPerSub) * 100;
  var perc2 = (mark2 / totalPerSub) * 100;
  var perc3 = (mark3 / totalPerSub) * 100;

  // Totals
  var totalMarks = totalPerSub * 3;
  var totalObtained = mark1 + mark2 + mark3;
  var overallPerc = (totalObtained / totalMarks) * 100;

  // Display table
  // document.write("<h3>Subject Total Marks Obtained Marks Percentage</h3>");
  document.write("<table>");
  document.write("<br> <tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th><th>Percentage</th></tr>");
  document.write("<tr><td>" + sub1 + "</td><td>100</td><td>" + mark1 + "</td><td>" + Math.round(perc1) + "%</td></tr>");
  document.write("<tr><td>" + sub2 + "</td><td>100</td><td>" + mark2 + "</td><td>" + Math.round(perc2) + "%</td></tr>");
  document.write("<tr><td>" + sub3 + "</td><td>100</td><td>" + mark3 + "</td><td>" + Math.round(perc3) + "%</td></tr>");
  document.write("<tr><th></th><th>" + totalMarks + "</th><th>" + totalObtained + "</th><th>" + Math.round(overallPerc) + "%</th></tr>");
  document.write("</table>");
