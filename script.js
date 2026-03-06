// ======================
// COURSE NOTES
// ======================

const courseNotes = {

HTML: `
<h3>HTML Basics</h3>

<p>HTML stands for HyperText Markup Language. It is the standard language used to create webpages and web applications.</p>

<p>HTML describes the structure of a webpage using elements and tags.</p>

<h4>Basic HTML Document Structure</h4>

<pre>
<!DOCTYPE html>
<html>
<head>
<title>My First Page</title>
</head>

<body>
<h1>Hello World</h1>
<p>This is my first webpage</p>
</body>
</html>
</pre>

<h4>Explanation of Each Tag</h4>

<p><b>&lt;!DOCTYPE html&gt;</b> – Defines the document type.</p>

<p><b>&lt;html&gt;</b> – Root element of the HTML page.</p>

<p><b>&lt;head&gt;</b> – Contains meta information about the document.</p>

<p><b>&lt;title&gt;</b> – Specifies the title of the webpage.</p>

<p><b>&lt;body&gt;</b> – Contains the visible page content.</p>

<h4>HTML Headings</h4>

<p>HTML headings are defined with &lt;h1&gt; to &lt;h6&gt; tags.</p>

<pre>
<h1>Main Heading</h1>
<h2>Sub Heading</h2>
<h3>Smaller Heading</h3>
<h4>Small Heading</h4>
<h5>Very Small Heading</h5>
<h6>Tiny Heading</h6>
</pre>

<h4>HTML Paragraph</h4>

<p>Paragraphs are defined using the &lt;p&gt; tag.</p>

<pre>
<p>This is a paragraph</p>
<p>This is another paragraph</p>
</pre>

<h4>HTML Links</h4>

<p>Links are created using the anchor tag.</p>

<pre>
<a href="https://google.com">Visit Google</a>
</pre>

<h4>HTML Images</h4>

<p>Images are added using the &lt;img&gt; tag.</p>

<pre>
<img src="image.jpg" alt="Sample Image" width="200">
</pre>

<h4>HTML Lists</h4>

<p>There are two types of lists in HTML.</p>

<p><b>Unordered List</b></p>

<pre>
<ul>
<li>HTML</li>
<li>CSS</li>
<li>JavaScript</li>
</ul>
</pre>

<p><b>Ordered List</b></p>

<pre>
<ol>
<li>Learn HTML</li>
<li>Learn CSS</li>
<li>Learn JavaScript</li>
</ol>
</pre>

<h4>HTML Table</h4>

<p>Tables are used to organize data.</p>

<pre>
<table border="1">
<tr>
<th>Name</th>
<th>Age</th>
</tr>

<tr>
<td>John</td>
<td>25</td>
</tr>

<tr>
<td>Alice</td>
<td>22</td>
</tr>
</table>
</pre>

<h4>HTML Forms</h4>

<p>Forms are used to collect user input.</p>

<pre>
<form>

<label>Name</label>
<input type="text">

<label>Email</label>
<input type="email">

<button>Submit</button>

</form>
</pre>

<h4>HTML Input Types</h4>

<pre>
<input type="text">
<input type="password">
<input type="email">
<input type="number">
<input type="date">
<input type="checkbox">
<input type="radio">
</pre>

<h4>HTML Buttons</h4>

<pre>
<button>Click Me</button>
</pre>

<h4>HTML Div</h4>

<p>Div is a container used to group HTML elements.</p>

<pre>
<div>
<h2>Section Title</h2>
<p>Content inside div</p>
</div>
</pre>

<h4>HTML Semantic Tags</h4>

<p>Semantic elements clearly describe their meaning.</p>

<pre>
<header></header>
<nav></nav>
<section></section>
<article></article>
<footer></footer>
</pre>

<h4>HTML Comments</h4>

<pre>
<!-- This is a comment -->
</pre>

<h4>Best Practices</h4>

<ul>
<li>Always use proper indentation.</li>
<li>Use semantic HTML elements.</li>
<li>Add alt text to images.</li>
<li>Keep HTML clean and readable.</li>
</ul>

<p>HTML is the foundation of web development. It works together with CSS and JavaScript to create modern websites.</p>
`,







CSS: `
<h3>CSS Basics</h3>

<p>CSS stands for Cascading Style Sheets. It is used to style and design webpages.</p>

<p>CSS controls colors, layouts, spacing, fonts, and responsiveness of websites.</p>

<h4>Basic CSS Syntax</h4>

<pre>
selector{
property: value;
}
</pre>

<p>Example:</p>

<pre>
body{
background:black;
color:white;
}
</pre>

<h4>Ways to Add CSS</h4>

<p><b>1. Inline CSS</b></p>

<pre>
<p style="color:red">Hello World</p>
</pre>

<p><b>2. Internal CSS</b></p>

<pre>
<style>
p{
color:blue;
}
</style>
</pre>

<p><b>3. External CSS</b></p>

<pre>
<link rel="stylesheet" href="style.css">
</pre>

<h4>CSS Selectors</h4>

<p><b>Element Selector</b></p>

<pre>
p{
color:green;
}
</pre>

<p><b>Class Selector</b></p>

<pre>
.box{
background:yellow;
}
</pre>

<p><b>ID Selector</b></p>

<pre>
#title{
font-size:30px;
}
</pre>

<h4>CSS Colors</h4>

<pre>
h1{
color:red;
}

p{
color:#333;
}

div{
background:rgb(200,200,200);
}
</pre>

<h4>CSS Fonts</h4>

<pre>
p{
font-family:Arial;
font-size:18px;
font-weight:bold;
}
</pre>

<h4>CSS Text Styling</h4>

<pre>
h1{
text-align:center;
text-transform:uppercase;
letter-spacing:2px;
}
</pre>

<h4>CSS Background</h4>

<pre>
body{
background-color:#f4f4f4;
}

div{
background-image:url("bg.jpg");
background-size:cover;
}
</pre>

<h4>CSS Border</h4>

<pre>
div{
border:2px solid black;
}
</pre>

<h4>CSS Padding</h4>

<pre>
div{
padding:20px;
}
</pre>

<h4>CSS Margin</h4>

<pre>
div{
margin:30px;
}
</pre>

<h4>CSS Box Model</h4>

<p>The box model consists of:</p>

<ul>
<li>Content</li>
<li>Padding</li>
<li>Border</li>
<li>Margin</li>
</ul>

<pre>
div{
width:200px;
padding:20px;
border:2px solid black;
margin:30px;
}
</pre>

<h4>CSS Display Property</h4>

<pre>
div{
display:block;
}

span{
display:inline;
}
</pre>

<h4>CSS Flexbox</h4>

<p>Flexbox is used for flexible layouts.</p>

<pre>
.container{
display:flex;
justify-content:center;
align-items:center;
}
</pre>

<h4>CSS Grid</h4>

<pre>
.container{
display:grid;
grid-template-columns:1fr 1fr 1fr;
gap:20px;
}
</pre>

<h4>CSS Hover Effect</h4>

<pre>
button:hover{
background:red;
color:white;
}
</pre>

<h4>CSS Position</h4>

<pre>
div{
position:absolute;
top:50px;
left:20px;
}
</pre>

<h4>CSS Responsive Design</h4>

<p>Media queries help create responsive websites.</p>

<pre>
@media(max-width:768px){
body{
background:lightgray;
}
}
</pre>

<h4>Best Practices</h4>

<ul>
<li>Use external CSS for large projects.</li>
<li>Keep CSS organized and readable.</li>
<li>Use classes instead of IDs for styling.</li>
<li>Avoid unnecessary code.</li>
</ul>

<p>CSS works together with HTML and JavaScript to create beautiful and responsive websites.</p>
`,








JavaScript: `
<h3>JavaScript Basics</h3>

<p>JavaScript is a programming language used to make webpages interactive.</p>

<p>It can update content, control multimedia, create animations, and handle user actions.</p>

<h4>Adding JavaScript to HTML</h4>

<p>JavaScript can be added inside the HTML using the script tag.</p>

<pre>
<script>
console.log("Hello World");
</script>
</pre>

<h4>JavaScript Output</h4>

<pre>
console.log("Hello");

alert("Hello");

document.write("Hello");

document.getElementById("demo").innerHTML = "Hello";
</pre>

<h4>Variables</h4>

<p>Variables are used to store data.</p>

<pre>
let name = "John";

const age = 25;

var city = "New York";
</pre>

<h4>Data Types</h4>

<p>JavaScript supports different data types.</p>

<pre>
let name = "Alice";    // String
let age = 22;         // Number
let isStudent = true; // Boolean
let data = null;      // Null
let value;            // Undefined
</pre>

<h4>Operators</h4>

<p>Operators are used to perform operations.</p>

<pre>
let a = 10;
let b = 5;

let sum = a + b;
let sub = a - b;
let mul = a * b;
let div = a / b;
</pre>

<h4>Conditional Statements</h4>

<p>Used to make decisions.</p>

<pre>
let age = 18;

if(age >= 18){
console.log("You can vote");
}else{
console.log("You cannot vote");
}
</pre>

<h4>Switch Statement</h4>

<pre>
let day = 1;

switch(day){
case 1:
console.log("Monday");
break;

case 2:
console.log("Tuesday");
break;

default:
console.log("Invalid day");
}
</pre>

<h4>Loops</h4>

<p>Loops are used to repeat code.</p>

<p><b>For Loop</b></p>

<pre>
for(let i=0;i<5;i++){
console.log(i);
}
</pre>

<p><b>While Loop</b></p>

<pre>
let i = 0;

while(i<5){
console.log(i);
i++;
}
</pre>

<h4>Functions</h4>

<p>Functions are blocks of reusable code.</p>

<pre>
function greet(){
console.log("Hello");
}

greet();
</pre>

<h4>Function with Parameters</h4>

<pre>
function add(a,b){
return a+b;
}

let result = add(5,3);

console.log(result);
</pre>

<h4>Arrays</h4>

<p>Arrays store multiple values.</p>

<pre>
let fruits = ["Apple","Banana","Orange"];

console.log(fruits[0]);
</pre>

<h4>Array Methods</h4>

<pre>
let numbers = [1,2,3];

numbers.push(4);

numbers.pop();

numbers.shift();

numbers.unshift(0);
</pre>

<h4>Objects</h4>

<p>Objects store data in key-value pairs.</p>

<pre>
let person = {
name:"John",
age:25,
city:"London"
};

console.log(person.name);
</pre>

<h4>DOM Manipulation</h4>

<p>JavaScript can change HTML content.</p>

<pre>
document.getElementById("title").innerHTML = "New Title";
</pre>

<h4>Event Handling</h4>

<p>Events respond to user actions.</p>

<pre>
<button onclick="hello()">Click</button>

<script>
function hello(){
alert("Button clicked");
}
</script>
</pre>

<h4>JavaScript Timing</h4>

<pre>
setTimeout(function(){
console.log("Hello after 2 seconds");
},2000);
</pre>

<h4>Arrow Functions</h4>

<pre>
const greet = () => {
console.log("Hello");
}
</pre>

<h4>Best Practices</h4>

<ul>
<li>Use let and const instead of var.</li>
<li>Keep code clean and readable.</li>
<li>Use meaningful variable names.</li>
<li>Avoid global variables.</li>
</ul>

<p>JavaScript works together with HTML and CSS to create dynamic and interactive websites.</p>
`,




Python: `
<h3>Python Basics</h3>

<p>Python is a popular high-level programming language known for its simple syntax and readability.</p>

<p>It is widely used in web development, data science, machine learning, automation, and scripting.</p>

<h4>Python Hello World</h4>

<pre>
print("Hello World")
</pre>

<h4>Python Variables</h4>

<p>Variables are used to store data values.</p>

<pre>
name = "John"
age = 25
price = 19.99
</pre>

<h4>Python Data Types</h4>

<p>Python has several built-in data types.</p>

<pre>
name = "Alice"      # String
age = 22            # Integer
price = 10.5        # Float
isStudent = True    # Boolean
</pre>

<h4>Type Checking</h4>

<pre>
x = 10
print(type(x))
</pre>

<h4>Python Input</h4>

<p>The input() function is used to take user input.</p>

<pre>
name = input("Enter your name: ")
print(name)
</pre>

<h4>Python Operators</h4>

<pre>
a = 10
b = 5

print(a + b)
print(a - b)
print(a * b)
print(a / b)
</pre>

<h4>Comparison Operators</h4>

<pre>
x = 10
y = 20

print(x == y)
print(x != y)
print(x > y)
print(x < y)
</pre>

<h4>Conditional Statements</h4>

<p>Used to make decisions in programs.</p>

<pre>
age = 18

if age >= 18:
    print("You can vote")
else:
    print("You cannot vote")
</pre>

<h4>Elif Statement</h4>

<pre>
marks = 75

if marks >= 90:
    print("Grade A")
elif marks >= 70:
    print("Grade B")
else:
    print("Grade C")
</pre>

<h4>Python Loops</h4>

<p><b>For Loop</b></p>

<pre>
for i in range(5):
    print(i)
</pre>

<p><b>While Loop</b></p>

<pre>
i = 0

while i < 5:
    print(i)
    i += 1
</pre>

<h4>Python Lists</h4>

<p>Lists store multiple values.</p>

<pre>
fruits = ["apple","banana","orange"]

print(fruits[0])
</pre>

<h4>List Methods</h4>

<pre>
numbers = [1,2,3]

numbers.append(4)
numbers.remove(2)

print(numbers)
</pre>

<h4>Python Tuples</h4>

<pre>
colors = ("red","green","blue")

print(colors[0])
</pre>

<h4>Python Dictionaries</h4>

<p>Dictionaries store data in key-value pairs.</p>

<pre>
person = {
"name":"John",
"age":25,
"city":"London"
}

print(person["name"])
</pre>

<h4>Python Functions</h4>

<p>Functions are reusable blocks of code.</p>

<pre>
def greet():
    print("Hello")

greet()
</pre>

<h4>Function with Parameters</h4>

<pre>
def add(a,b):
    return a + b

result = add(5,3)

print(result)
</pre>

<h4>Python Modules</h4>

<p>Modules allow code reuse.</p>

<pre>
import math

print(math.sqrt(16))
</pre>

<h4>Python File Handling</h4>

<pre>
file = open("test.txt","r")

print(file.read())

file.close()
</pre>

<h4>Exception Handling</h4>

<pre>
try:
    x = 10/0
except:
    print("Error occurred")
</pre>

<h4>Best Practices</h4>

<ul>
<li>Write clean and readable code.</li>
<li>Use meaningful variable names.</li>
<li>Follow Python indentation rules.</li>
<li>Break large programs into functions.</li>
</ul>

<p>Python is one of the most beginner-friendly programming languages and is widely used in modern software development.</p>
`,







Java: `
<h3>Java Basics</h3>

<p>Java is a popular object-oriented programming language used for building web applications, mobile apps, and enterprise software.</p>

<p>Java is platform-independent which means code written once can run anywhere using the Java Virtual Machine (JVM).</p>

<h4>Java Hello World Program</h4>

<pre>
class Hello{
public static void main(String[] args){

System.out.println("Hello World");

}
}
</pre>

<h4>Explanation</h4>

<p><b>class</b> – Defines a class.</p>
<p><b>main()</b> – Entry point of the program.</p>
<p><b>System.out.println()</b> – Prints output to the console.</p>

<h4>Java Variables</h4>

<p>Variables are used to store data values.</p>

<pre>
int age = 25;
double price = 19.99;
char grade = 'A';
String name = "John";
</pre>

<h4>Java Data Types</h4>

<p>Java has primitive and non-primitive data types.</p>

<pre>
int number = 10;
double price = 10.5;
char letter = 'A';
boolean isActive = true;
</pre>

<h4>Java Operators</h4>

<pre>
int a = 10;
int b = 5;

System.out.println(a + b);
System.out.println(a - b);
System.out.println(a * b);
System.out.println(a / b);
</pre>

<h4>Comparison Operators</h4>

<pre>
int x = 10;
int y = 20;

System.out.println(x == y);
System.out.println(x != y);
System.out.println(x > y);
System.out.println(x < y);
</pre>

<h4>Java Conditional Statements</h4>

<p>Used to make decisions.</p>

<pre>
int age = 18;

if(age >= 18){

System.out.println("You can vote");

}else{

System.out.println("You cannot vote");

}
</pre>

<h4>Java Switch Statement</h4>

<pre>
int day = 1;

switch(day){

case 1:
System.out.println("Monday");
break;

case 2:
System.out.println("Tuesday");
break;

default:
System.out.println("Invalid day");

}
</pre>

<h4>Java Loops</h4>

<p><b>For Loop</b></p>

<pre>
for(int i=0;i<5;i++){

System.out.println(i);

}
</pre>

<p><b>While Loop</b></p>

<pre>
int i = 0;

while(i<5){

System.out.println(i);
i++;

}
</pre>

<h4>Java Arrays</h4>

<p>Arrays store multiple values.</p>

<pre>
int[] numbers = {1,2,3,4,5};

System.out.println(numbers[0]);
</pre>

<h4>Java Array Loop</h4>

<pre>
int[] nums = {10,20,30};

for(int n : nums){

System.out.println(n);

}
</pre>

<h4>Java Methods</h4>

<p>Methods are reusable blocks of code.</p>

<pre>
public static void greet(){

System.out.println("Hello");

}
</pre>

<h4>Calling a Method</h4>

<pre>
public static void main(String[] args){

greet();

}
</pre>

<h4>Method with Parameters</h4>

<pre>
public static int add(int a,int b){

return a + b;

}
</pre>

<h4>Java Objects</h4>

<p>Java is an object-oriented language.</p>

<pre>
class Person{

String name;
int age;

}
</pre>

<h4>Creating Object</h4>

<pre>
Person p = new Person();

p.name = "John";
p.age = 25;

System.out.println(p.name);
</pre>

<h4>Java Constructors</h4>

<pre>
class Car{

Car(){
System.out.println("Car Created");
}

}
</pre>

<h4>Java Inheritance</h4>

<pre>
class Animal{

void sound(){
System.out.println("Animal makes sound");
}

}

class Dog extends Animal{

}
</pre>

<h4>Best Practices</h4>

<ul>
<li>Use meaningful variable names.</li>
<li>Follow proper indentation.</li>
<li>Break programs into methods.</li>
<li>Use object-oriented principles.</li>
</ul>

<p>Java is widely used in enterprise applications, Android development, and large-scale systems.</p>
`,




SQL: `
<h3>SQL Basics</h3>

<p>SQL stands for Structured Query Language. It is used to communicate with databases.</p>

<p>SQL allows you to store, retrieve, update, and delete data in a database.</p>

<h4>What is a Database?</h4>

<p>A database is a collection of organized data stored in tables.</p>

<p>Each table contains rows and columns.</p>

<h4>Example Table</h4>

<pre>
ID | Name  | Age
----------------
1  | John  | 25
2  | Alice | 22
</pre>

<h4>Basic SQL Query</h4>

<pre>
SELECT * FROM users;
</pre>

<p>This command retrieves all data from the users table.</p>

<h4>Select Specific Columns</h4>

<pre>
SELECT name, age FROM users;
</pre>

<h4>WHERE Clause</h4>

<p>The WHERE clause filters records.</p>

<pre>
SELECT * FROM users
WHERE age > 20;
</pre>

<h4>INSERT Data</h4>

<p>The INSERT statement adds new records.</p>

<pre>
INSERT INTO users(name, age)
VALUES ('John', 25);
</pre>

<h4>INSERT Multiple Records</h4>

<pre>
INSERT INTO users(name, age)
VALUES
('Alice',22),
('Bob',30);
</pre>

<h4>UPDATE Data</h4>

<p>The UPDATE statement modifies existing records.</p>

<pre>
UPDATE users
SET age = 26
WHERE name = 'John';
</pre>

<h4>DELETE Data</h4>

<p>The DELETE statement removes records.</p>

<pre>
DELETE FROM users
WHERE name = 'Alice';
</pre>

<h4>CREATE TABLE</h4>

<p>Create a new table in the database.</p>

<pre>
CREATE TABLE users(
id INT,
name VARCHAR(50),
age INT
);
</pre>

<h4>DROP TABLE</h4>

<p>Delete a table from the database.</p>

<pre>
DROP TABLE users;
</pre>

<h4>ALTER TABLE</h4>

<p>Modify an existing table.</p>

<pre>
ALTER TABLE users
ADD email VARCHAR(100);
</pre>

<h4>ORDER BY</h4>

<p>Sort query results.</p>

<pre>
SELECT * FROM users
ORDER BY age ASC;
</pre>

<h4>GROUP BY</h4>

<p>Group rows that have the same values.</p>

<pre>
SELECT age, COUNT(*)
FROM users
GROUP BY age;
</pre>

<h4>COUNT Function</h4>

<pre>
SELECT COUNT(*) FROM users;
</pre>

<h4>MAX and MIN</h4>

<pre>
SELECT MAX(age) FROM users;

SELECT MIN(age) FROM users;
</pre>

<h4>AVG Function</h4>

<pre>
SELECT AVG(age) FROM users;
</pre>

<h4>SQL Joins</h4>

<p>Joins combine rows from multiple tables.</p>

<h4>INNER JOIN</h4>

<pre>
SELECT users.name, orders.product
FROM users
INNER JOIN orders
ON users.id = orders.user_id;
</pre>

<h4>LEFT JOIN</h4>

<pre>
SELECT users.name, orders.product
FROM users
LEFT JOIN orders
ON users.id = orders.user_id;
</pre>

<h4>RIGHT JOIN</h4>

<pre>
SELECT users.name, orders.product
FROM users
RIGHT JOIN orders
ON users.id = orders.user_id;
</pre>

<h4>Primary Key</h4>

<p>A primary key uniquely identifies each record in a table.</p>

<pre>
CREATE TABLE users(
id INT PRIMARY KEY,
name VARCHAR(50)
);
</pre>

<h4>Best Practices</h4>

<ul>
<li>Use meaningful table and column names.</li>
<li>Always use WHERE when updating or deleting records.</li>
<li>Normalize database tables.</li>
<li>Use indexes for better performance.</li>
</ul>

<p>SQL is widely used in web applications, data analysis, and backend systems.</p>
`,

TypeScript: `
<h3>TypeScript Basics</h3>

<p>TypeScript is a programming language developed by Microsoft.</p>

<p>It is a superset of JavaScript which means it adds extra features like static typing on top of JavaScript.</p>

<p>TypeScript code is compiled into JavaScript before running in the browser.</p>

<h4>Why Use TypeScript?</h4>

<ul>
<li>Detects errors during development</li>
<li>Supports static typing</li>
<li>Better code readability</li>
<li>Great for large applications</li>
</ul>

<h4>Basic TypeScript Example</h4>

<pre>
let message: string = "Hello TypeScript";

console.log(message);
</pre>

<h4>TypeScript Variables</h4>

<p>Variables in TypeScript can have specific types.</p>

<pre>
let name: string = "John";
let age: number = 25;
let isStudent: boolean = true;
</pre>

<h4>TypeScript Data Types</h4>

<pre>
let username: string = "Alice";
let score: number = 100;
let active: boolean = true;
</pre>

<h4>Arrays</h4>

<pre>
let numbers: number[] = [1,2,3,4];

let fruits: string[] = ["apple","banana","orange"];
</pre>

<h4>Tuple</h4>

<p>A tuple allows storing different data types in one array.</p>

<pre>
let user: [string, number];

user = ["John",25];
</pre>

<h4>Any Type</h4>

<p>The any type allows any value.</p>

<pre>
let data: any = "Hello";

data = 10;

data = true;
</pre>

<h4>Functions</h4>

<p>Functions can have typed parameters and return values.</p>

<pre>
function add(a: number, b: number): number{

return a + b;

}
</pre>

<h4>Arrow Functions</h4>

<pre>
const greet = (name: string): void => {

console.log("Hello " + name);

}
</pre>

<h4>Optional Parameters</h4>

<pre>
function greet(name: string, age?: number){

console.log(name);

}
</pre>

<h4>Interfaces</h4>

<p>Interfaces define the structure of objects.</p>

<pre>
interface Person{

name: string;
age: number;

}
</pre>

<h4>Using Interface</h4>

<pre>
let user: Person = {

name: "Alice",
age: 22

};
</pre>

<h4>Classes</h4>

<p>TypeScript supports object-oriented programming.</p>

<pre>
class Car{

brand: string;

constructor(brand: string){

this.brand = brand;

}

}
</pre>

<h4>Creating Object</h4>

<pre>
let car = new Car("Toyota");

console.log(car.brand);
</pre>

<h4>Access Modifiers</h4>

<p>TypeScript supports access modifiers.</p>

<pre>
class User{

public name: string;
private age: number;

constructor(name: string, age: number){

this.name = name;
this.age = age;

}

}
</pre>

<h4>Enums</h4>

<p>Enums allow defining named constants.</p>

<pre>
enum Direction{

Up,
Down,
Left,
Right

}
</pre>

<h4>Modules</h4>

<pre>
export function hello(){

console.log("Hello");

}
</pre>

<h4>Import Module</h4>

<pre>
import { hello } from "./file";

hello();
</pre>

<h4>Best Practices</h4>

<ul>
<li>Always define types when possible</li>
<li>Use interfaces for object structures</li>
<li>Use strict mode</li>
<li>Keep code modular</li>
</ul>

<p>TypeScript is widely used in modern frameworks like Angular and large-scale JavaScript applications.</p>
`,


PHP: `
<h3>PHP Basics</h3>

<p>PHP (Hypertext Preprocessor) is a server-side scripting language used to develop dynamic web applications.</p>

<p>PHP code is executed on the server and the result is sent to the client’s browser as HTML.</p>

<h4>PHP Syntax</h4>

<pre>
&lt;?php
echo "Hello World";
?&gt;
</pre>

<h4>Variables</h4>

<p>Variables in PHP start with a $ sign.</p>

<pre>
$name = "John";
$age = 25;
$isStudent = true;
</pre>

<h4>Data Types</h4>

<pre>
$string = "Hello";   // String
$number = 10;        // Integer
$price = 19.99;      // Float
$active = true;      // Boolean
</pre>

<h4>Constants</h4>

<pre>
define("PI", 3.14);

echo PI;
</pre>

<h4>Operators</h4>

<pre>
$a = 10;
$b = 5;

echo $a + $b;
echo $a - $b;
echo $a * $b;
echo $a / $b;
</pre>

<h4>Comparison Operators</h4>

<pre>
$x = 10;
$y = 20;

var_dump($x == $y);
var_dump($x != $y);
var_dump($x > $y);
var_dump($x < $y);
</pre>

<h4>Conditional Statements</h4>

<pre>
$age = 18;

if($age >= 18){
    echo "You can vote";
}else{
    echo "You cannot vote";
}
</pre>

<h4>Elseif Statement</h4>

<pre>
$marks = 75;

if($marks >= 90){
    echo "Grade A";
}elseif($marks >= 70){
    echo "Grade B";
}else{
    echo "Grade C";
}
</pre>

<h4>Switch Statement</h4>

<pre>
$day = 1;

switch($day){
    case 1:
        echo "Monday";
        break;
    case 2:
        echo "Tuesday";
        break;
    default:
        echo "Invalid day";
}
</pre>

<h4>Loops</h4>

<p><b>For Loop</b></p>

<pre>
for($i=0; $i<5; $i++){
    echo $i;
}
</pre>

<p><b>While Loop</b></p>

<pre>
$i = 0;
while($i<5){
    echo $i;
    $i++;
}
</pre>

<p><b>Foreach Loop</b></p>

<pre>
$fruits = array("Apple","Banana","Orange");

foreach($fruits as $fruit){
    echo $fruit;
}
</pre>

<h4>Arrays</h4>

<pre>
$numbers = array(1,2,3,4,5);
echo $numbers[0];
</pre>

<h4>Associative Arrays</h4>

<pre>
$person = array(
    "name" => "John",
    "age" => 25,
    "city" => "London"
);

echo $person["name"];
</pre>

<h4>Functions</h4>

<p>Functions are reusable blocks of code.</p>

<pre>
function greet(){
    echo "Hello";
}

greet();
</pre>

<h4>Function with Parameters</h4>

<pre>
function add($a, $b){
    return $a + $b;
}

echo add(5,3);
</pre>

<h4>PHP Superglobals</h4>

<p>Special predefined variables in PHP.</p>

<pre>
$_GET
$_POST
$_SERVER
$_SESSION
$_COOKIE
</pre>

<h4>Include and Require</h4>

<pre>
include 'file.php';
require 'file.php';
</pre>

<h4>PHP Classes & Objects</h4>

<pre>
class Car{
    public $brand;

    function __construct($brand){
        $this->brand = $brand;
    }

    function display(){
        echo $this->brand;
    }
}

$car = new Car("Toyota");
$car->display();
</pre>

<h4>PHP Inheritance</h4>

<pre>
class Vehicle{
    function start(){
        echo "Vehicle started";
    }
}

class Bike extends Vehicle{
}

$bike = new Bike();
$bike->start();
</pre>

<h4>PHP Best Practices</h4>

<ul>
<li>Use meaningful variable names.</li>
<li>Keep code modular with functions and classes.</li>
<li>Sanitize user input to prevent SQL injection.</li>
<li>Use proper indentation and comments.</li>
</ul>

<p>PHP is widely used for server-side web development and works well with databases like MySQL.</p>
`,





Ruby: `
<h3>Ruby Basics</h3>

<p>Ruby is a dynamic, object-oriented programming language created by Yukihiro Matsumoto. It's known for its elegant and readable syntax.</p>

<p>Ruby emphasizes programmer happiness and productivity. It's famous for powering Ruby on Rails web framework.</p>

<h4>Ruby Hello World</h4>

<pre>
puts "Hello World"
</pre>

<h4>Ruby Variables</h4>

<p>Ruby uses different symbols to denote variable scope:</p>

<pre>
local_variable = "John"      # Local (no prefix)
@instance_variable = "John"  # Instance (@ prefix)
@@class_variable = 25        # Class (@@ prefix)
$global_variable = true      # Global ($ prefix)
CONSTANT = "Hello"          # Constant (UPPERCASE)
</pre>

<h4>Ruby Data Types</h4>

<pre>
name = "Alice"           # String
age = 25                 # Integer
price = 19.99            # Float
active = true            # Boolean
fruits = ["apple", "banana"]  # Array
person = {name: "John", age: 25}  # Hash
</pre>

<h4>Ruby Strings</h4>

<pre>
single_quote = 'Hello'
double_quote = "Hello World"
interpolation = "Age: \#{age}"
</pre>

<h4>Basic Operations</h4>

<pre>
a = 10
b = 5

puts a + b  # Addition
puts a - b  # Subtraction
puts a * b  # Multiplication
puts a / b  # Division
puts a % b  # Modulus
</pre>

<h4>Conditional Statements</h4>

<pre>
age = 18

if age >= 18
  puts "You can vote"
elsif age >= 16
  puts "You can drive"
else
  puts "You are too young"
end
</pre>

<h4>Ternary Operator</h4>

<pre>
status = age >= 18 ? "Adult" : "Minor"
puts status
</pre>

<h4>Loops</h4>

<p><b>For Loop</b></p>

<pre>
for i in 0..4
  puts i
end
</pre>

<p><b>Each Loop</b></p>

<pre>
numbers = [1, 2, 3, 4, 5]
numbers.each do |num|
  puts num
end
</pre>

<p><b>While Loop</b></p>

<pre>
i = 0
while i < 5
  puts i
  i += 1
end
</pre>

<h4>Methods (Functions)</h4>

<pre>
def greet(name = "World")
  puts "Hello, \#{name}!"
end

greet("John")
greet()
</pre>

<h4>Method with Return Value</h4>

<pre>
def add(a, b)
  return a + b
end

result = add(5, 3)
puts result
</pre>

<h4>Arrays</h4>

<pre>
fruits = ["apple", "banana", "orange"]
puts fruits[0]      # First item
puts fruits.length  # Length

fruits.push("grape")     # Add to end
fruits.pop               # Remove last
puts fruits
</pre>

<h4>Hashes (Objects)</h4>

<pre>
person = {
  name: "John",
  age: 25,
  city: "New York"
}

puts person[:name]
puts person["age"]
</pre>

<h4>Classes and Objects</h4>

<pre>
class Person
  attr_accessor :name, :age  # Getter/setter

  def initialize(name, age)
    @name = name
    @age = age
  end

  def introduce
    puts "Hi, I'm \#{@name}, \#{@age} years old"
  end
end

person = Person.new("Alice", 22)
person.introduce
</pre>

<h4>Inheritance</h4>

<pre>
class Animal
  def speak
    puts "Animal makes a sound"
  end
end

class Dog < Animal
  def speak
    puts "Woof!"
  end
end

dog = Dog.new
dog.speak
</pre>

<h4>Blocks and Iterators</h4>

<pre>
numbers = [1, 2, 3, 4, 5]
numbers.each { |num| puts num * 2 }
</pre>

<h4>Modules</h4>

<pre>
module Greeting
  def say_hello
    puts "Hello from module!"
  end
end

class Person
  include Greeting
end
</pre>

<h4>File Handling</h4>

<pre>
# Read file
File.open("test.txt", "r") do |file|
  puts file.read
end

# Write file
File.open("output.txt", "w") do |file|
  file.write("Hello Ruby!")
end
</pre>

<h4>Error Handling</h4>

<pre>
begin
  result = 10 / 0
rescue => e
  puts "Error: \#{e.message}"
end
</pre>

<h4>Best Practices</h4>

<ul>
<li>Use meaningful variable and method names</li>
<li>Follow Ruby conventions (snake_case for methods/variables)</li>
<li>Use blocks and iterators instead of loops when possible</li>
<li>Leverage Ruby's rich standard library</li>
<li>Keep methods short and focused</li>
<li>Use attr_accessor for simple getters/setters</li>
</ul>

<p>Ruby powers Ruby on Rails and is loved for its elegant syntax and developer-friendly design.</p>
`,

Go: `
<h3>Go (Golang) Basics</h3>

<p>Go is a modern, statically-typed, compiled programming language created by Google. It's designed for simplicity, efficiency, and reliable concurrent programming.</p>

<p>Go excels at building scalable web servers, cloud services, CLI tools, and microservices.</p>

<h4>Go Hello World</h4>

<pre>
package main

import "fmt"

func main() {
    fmt.Println("Hello World")
}
</pre>

<h4>Explanation of Each Part</h4>

<p><b>package main</b> – Defines the package name (entry point for executables).</p>
<p><b>import "fmt"</b> – Imports the formatting and printing package.</p>
<p><b>func main()</b> – Entry point of the program.</p>
<p><b>fmt.Println()</b> – Prints output to console.</p>

<h4>Go Variables</h4>

<pre>
var name string = "John"        // Explicit declaration
age := 25                       // Short declaration (inferred type)
var isActive bool               // Zero value (false)
const PI = 3.14159              // Constant
</pre>

<h4>Go Data Types</h4>

<pre>
name := "Alice"         // string
age := 25               // int
price := 19.99          // float64
active := true          // bool
grades := []string{"A", "B"}  // slice (dynamic array)
numbers := [3]int{1,2,3}      // array (fixed size)
person := map[string]int{"age": 25}  // map (hash table)
</pre>

<h4>Basic Operations</h4>

<pre>
a := 10
b := 5

fmt.Println(a + b)  // 15
fmt.Println(a - b)  // 5
fmt.Println(a * b)  // 50
fmt.Println(a / b)  // 2 (integer division)
fmt.Println(a % b)  // 0
</pre>

<h4>Conditional Statements</h4>

<pre>
age := 18

if age >= 18 {
    fmt.Println("You can vote")
} else {
    fmt.Println("You cannot vote")
}
</pre>

<h4>Switch Statement</h4>

<pre>
day := 1

switch day {
case 1:
    fmt.Println("Monday")
case 2:
    fmt.Println("Tuesday")
default:
    fmt.Println("Invalid day")
}
</pre>

<h4>Loops</h4>

<p><b>For Loop (Go's only loop construct)</b></p>

<pre>
for i := 0; i < 5; i++ {
    fmt.Println(i)
}
</pre>

<p><b>While-style Loop</b></p>

<pre>
i := 0
for i < 5 {
    fmt.Println(i)
    i++
}
</pre>

<p><b>Range Loop</b></p>

<pre>
numbers := []int{1, 2, 3}
for index, value := range numbers {
    fmt.Printf("Index: %d, Value: %d\\n", index, value)
}
</pre>

<h4>Functions</h4>

<pre>
func greet(name string) {
    fmt.Printf("Hello, %s!\\n", name)
}

greet("John")
</pre>

<h4>Function with Return Value</h4>

<pre>
func add(a int, b int) int {
    return a + b
}

result := add(5, 3)
fmt.Println(result)  // 8
</pre>

<h4>Multiple Return Values</h4>

<pre>
func divide(a, b float64) (float64, error) {
    if b == 0 {
        return 0, fmt.Errorf("division by zero")
    }
    return a / b, nil
}
</pre>

<h4>Slices (Dynamic Arrays)</h4>

<pre>
fruits := []string{"apple", "banana"}
fmt.Println(fruits[0])      // apple

fruits = append(fruits, "orange")  // Add element
fmt.Println(len(fruits))    // 3
</pre>

<h4>Maps (Hash Tables)</h4>

<pre>
person := map[string]string{
    "name": "John",
    "city": "New York",
}

fmt.Println(person["name"])  // John
delete(person, "city")       // Remove key
</pre>

<h4>Structs (Custom Types)</h4>

<pre>
type Person struct {
    Name string
    Age  int
}

p := Person{Name: "Alice", Age: 22}
fmt.Printf("%s is %d years old\\n", p.Name, p.Age)
</pre>

<h4>Methods</h4>

<pre>
type Rectangle struct {
    Width  float64
    Height float64
}

func (r Rectangle) Area() float64 {
    return r.Width * r.Height
}

rect := Rectangle{Width: 10, Height: 5}
fmt.Println(rect.Area())  // 50
</pre>

<h4>Pointers</h4>

<pre>
func updateAge(p *int) {
    *p = 26  // Modify through pointer
}

age := 25
updateAge(&age)
fmt.Println(age)  // 26
</pre>

<h4>Goroutines (Concurrency)</h4>

<pre>
func sayHello() {
    fmt.Println("Hello from goroutine!")
}

go sayHello()  // Run concurrently
time.Sleep(time.Second)  // Wait for completion
</pre>

<h4>Channels</h4>

<pre>
ch := make(chan string)
go func() {
    ch <- "Hello from channel"
}()

msg := <-ch
fmt.Println(msg)
</pre>

<h4>Packages and Imports</h4>

<pre>
// main.go
package main

import (
    "fmt"
    "math"
)

func main() {
    fmt.Println(math.Sqrt(16))
}
</pre>

<h4>Error Handling</h4>

<pre>
import "errors"

func divide(a, b int) (int, error) {
    if b == 0 {
        return 0, errors.New("cannot divide by zero")
    }
    return a / b, nil
}

// Usage
result, err := divide(10, 0)
if err != nil {
    fmt.Println("Error:", err)
}
</pre>

<h4>Best Practices</h4>

<ul>
<li>Keep functions small and focused (under 50 lines)</li>
<li>Handle errors explicitly (no exceptions)</li>
<li>Use Go's standard formatting (go fmt)</li>
<li>Follow naming conventions (mixedCaps for exported, camelCase for unexported)</li>
<li>Use interfaces for dependency injection</li>
<li>Leverage goroutines and channels for concurrency</li>
<li>Write meaningful error messages</li>
</ul>

<p>Go is loved for its simplicity, performance, and excellent support for concurrent programming. It's used by companies like Google, Uber, and Docker.</p>
`,



NodeJS: `
<h3>Node.js Basics</h3>

<p>Node.js is a JavaScript runtime built on Chrome's V8 engine that allows JavaScript to run on the server-side.</p>

<p>Node.js uses an event-driven, non-blocking I/O model making it lightweight and highly efficient for scalable network applications.</p>

<h4>Node.js Hello World</h4>

<pre>
console.log("Hello Node.js");
</pre>

<h4>Running Node.js</h4>

<p>Save code as <code>app.js</code> and run:</p>
<pre>
node app.js
</pre>

<h4>Node.js Modules</h4>

<p><b>Built-in Modules</b></p>

<pre>
const fs = require('fs');     // File System
const http = require('http'); // HTTP Server
const path = require('path'); // Path utilities
</pre>

<p><b>Custom Module</b></p>

<pre>
// math.js
function add(a, b) {
    return a + b;
}
module.exports = { add };

// app.js
const math = require('./math');
console.log(math.add(5, 3));
</pre>

<h4>Creating HTTP Server</h4>

<pre>
const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h1>Hello from Node.js Server!</h1>');
});

server.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
</pre>

<h4>npm Package Manager</h4>

<p>Node Package Manager for installing packages:</p>

<pre>
npm init           // Initialize project
npm install express     // Install package
npm install -g nodemon  // Global install
npm install express --save-dev  // Development dependency
</pre>

<h4>Express.js Web Framework</h4>

<pre>
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello Express!');
});

app.get('/user/:id', (req, res) => {
    res.send(\`User ID: \${req.params.id}\`);
});

app.listen(3000, () => {
    console.log('Express server on port 3000');
});
</pre>

<h4>File System Operations</h4>

<p><b>Read File</b></p>

<pre>
const fs = require('fs');

// Callback style
fs.readFile('file.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
});

// Synchronous
const data = fs.readFileSync('file.txt', 'utf8');
</pre>

<p><b>Write File</b></p>

<pre>
fs.writeFile('output.txt', 'Hello Node!', (err) => {
    if (err) throw err;
    console.log('File written');
});
</pre>

<h4>Asynchronous Programming</h4>

<p><b>Callbacks</b></p>

<pre>
function fetchUser(id, callback) {
    setTimeout(() => {
        callback({ id: id, name: 'John' });
    }, 1000);
}
</pre>

<p><b>Promises</b></p>

<pre>
function fetchUser(id) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ id: id, name: 'John' });
        }, 1000);
    });
}
</pre>

<p><b>Async/Await</b></p>

<pre>
async function getUser(id) {
    try {
        const user = await fetchUser(id);
        console.log(user);
    } catch (error) {
        console.error(error);
    }
}
</pre>

<h4>JSON Handling</h4>

<pre>
const user = { name: 'John', age: 25 };
const jsonString = JSON.stringify(user);
console.log(jsonString);

const parsed = JSON.parse(jsonString);
console.log(parsed.name);
</pre>

<h4>Environment Variables</h4>

<pre>
// .env file
PORT=3000
NODE_ENV=production

// Usage
require('dotenv').config();
const port = process.env.PORT || 3000;
</pre>

<h4>Middleware Pattern</h4>

<pre>
const express = require('express');
const app = express();

// Logging middleware
app.use((req, res, next) => {
    console.log(\`\${req.method} \${req.url}\`);
    next();
});

// JSON parsing middleware
app.use(express.json());

// Route handler middleware
app.use('/api', apiRoutes);
</pre>

<h4>REST API Example</h4>

<pre>
const express = require('express');
const app = express();

let users = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' }
];

app.use(express.json());

app.get('/api/users', (req, res) => {
    res.json(users);
});

app.get('/api/users/:id', (req, res) => {
    const user = users.find(u => u.id == req.params.id);
    if (user) res.json(user);
    else res.status(404).json({ error: 'User not found' });
});

app.post('/api/users', (req, res) => {
    const user = { id: users.length + 1, name: req.body.name };
    users.push(user);
    res.status(201).json(user);
});
</pre>

<h4>EventEmitter</h4>

<pre>
const EventEmitter = require('events');
class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

myEmitter.on('event', (data) => {
    console.log('Event fired:', data);
});

myEmitter.emit('event', { id: 1 });
</pre>

<h4>Working with Streams</h4>

<pre>
const fs = require('fs');
const readStream = fs.createReadStream('input.txt');
const writeStream = fs.createWriteStream('output.txt');

readStream.pipe(writeStream);
</pre>

<h4>Best Practices</h4>

<ul>
<li>Use async/await instead of callbacks</li>
<li>Always handle errors properly</li>
<li>Use environment variables for configuration</li>
<li>Implement proper logging</li>
<li>Use middleware for common functionality</li>
<li>Validate and sanitize user input</li>
<li>Use process managers like PM2 in production</li>
<li>Implement rate limiting</li>
<li>Keep dependencies updated</li>
</ul>

<p>Node.js powers millions of websites including Netflix, PayPal, LinkedIn, and Uber. It's the backbone of modern web development.</p>
`,


C: `
<h3>C Programming Basics</h3>

<p>C is a foundational, procedural programming language created by Dennis Ritchie in 1972. It's known for its speed, low-level access, and influence on modern languages.</p>

<p>C is used for system programming, embedded systems, operating systems, and performance-critical applications.</p>

<h4>C Hello World</h4>

<pre>
#include &lt;stdio.h&gt;

int main() {
    printf("Hello World\\n");
    return 0;
}
</pre>

<h4>Explanation of Each Part</h4>

<p><b>#include &lt;stdio.h&gt;</b> – Includes standard input/output library.</p>
<p><b>int main()</b> – Program entry point, returns integer status.</p>
<p><b>printf()</b> – Prints formatted output to console.</p>
<p><b>return 0</b> – Indicates successful program completion.</p>

<h4>C Variables</h4>

<pre>
int age = 25;           // Integer
float price = 19.99;    // Float
double salary = 50000.50;  // Double precision
char grade = 'A';       // Single character
char name[] = "John";   // String (character array)
</pre>

<h4>C Data Types</h4>

<pre>
int integer = 100;          // Whole numbers
float decimal = 10.5f;      // Single precision float
double precise = 10.555;    // Double precision
char letter = 'Z';          // Single character
unsigned int positive = 200u;  // Unsigned integer
short small = 100;          // Short integer
long big = 100000L;         // Long integer
</pre>

<h4>Basic Operations</h4>

<pre>
int a = 10;
int b = 5;

printf("Sum: %d\\n", a + b);    // 15
printf("Difference: %d\\n", a - b); // 5
printf("Product: %d\\n", a * b);   // 50
printf("Quotient: %d\\n", a / b);  // 2
printf("Remainder: %d\\n", a % b); // 0
</pre>

<h4>Conditional Statements</h4>

<pre>
int age = 18;

if(age >= 18) {
    printf("You can vote\\n");
} else {
    printf("You cannot vote\\n");
}
</pre>

<h4>Switch Statement</h4>

<pre>
int day = 1;

switch(day) {
    case 1:
        printf("Monday\\n");
        break;
    case 2:
        printf("Tuesday\\n");
        break;
    default:
        printf("Invalid day\\n");
}
</pre>

<h4>Loops</h4>

<p><b>For Loop</b></p>

<pre>
for(int i = 0; i < 5; i++) {
    printf("%d\\n", i);
}
</pre>

<p><b>While Loop</b></p>

<pre>
int i = 0;
while(i < 5) {
    printf("%d\\n", i);
    i++;
}
</pre>

<p><b>Do-While Loop</b></p>

<pre>
int i = 0;
do {
    printf("%d\\n", i);
    i++;
} while(i < 5);
</pre>

<h4>Functions</h4>

<pre>
#include &lt;stdio.h&gt;

int add(int a, int b) {
    return a + b;
}

int main() {
    int result = add(5, 3);
    printf("Result: %d\\n", result);
    return 0;
}
</pre>

<h4>Arrays</h4>

<pre>
int numbers[5] = {10, 20, 30, 40, 50};
printf("%d\\n", numbers[0]);  // 10

// Loop through array
for(int i = 0; i < 5; i++) {
    printf("%d\\n", numbers[i]);
}
</pre>

<h4>Strings</h4>

<pre>
char name[50] = "John Doe";
printf("Name: %s\\n", name);

// String length
int length = strlen(name);
printf("Length: %d\\n", length);
</pre>

<h4>Pointers</h4>

<pre>
int age = 25;
int *ptr = &age;    // Pointer to age

printf("Age: %d\\n", age);
printf("Address: %p\\n", &age);
printf("Value via pointer: %d\\n", *ptr);
</pre>

<h4>Dynamic Memory Allocation</h4>

<pre>
#include &lt;stdlib.h&gt;

int *numbers = malloc(5 * sizeof(int));
numbers[0] = 100;

// Don't forget to free memory
free(numbers);
</pre>

<h4>Structures</h4>

<pre>
struct Person {
    char name[50];
    int age;
    float salary;
};

struct Person p1 = {"John", 25, 50000.50};
printf("%s is %d years old\\n", p1.name, p1.age);
</pre>

<h4>File Handling</h4>

<pre>
#include &lt;stdio.h&gt;

FILE *file = fopen("data.txt", "w");
fprintf(file, "Hello File!");
fclose(file);

// Reading
file = fopen("data.txt", "r");
char buffer[100];
fgets(buffer, 100, file);
printf("%s", buffer);
fclose(file);
</pre>

<h4>Standard Library Functions</h4>

<pre>
#include &lt;string.h&gt;
#include &lt;math.h&gt;
#include &lt;stdlib.h&gt;

char str[] = "123";
int num = atoi(str);        // String to int
double root = sqrt(16);     // Square root
int len = strlen("Hello");  // String length
</pre>

<h4>Preprocessor Directives</h4>

<pre>
#define PI 3.14159
#define MAX_SIZE 100

#ifdef DEBUG
    printf("Debug mode\\n");
#endif
</pre>

<h4>Multiple Source Files</h4>

<pre>
// math.h
#ifndef MATH_H
#define MATH_H
int add(int a, int b);
#endif

// math.c
#include "math.h"
int add(int a, int b) {
    return a + b;
}

// main.c
#include "math.h"
int main() {
    printf("%d\\n", add(5, 3));
}
</pre>

<h4>Best Practices</h4>

<ul>
<li>Always initialize variables before use</li>
<li>Check return values of library functions</li>
<li>Use const for constants</li>
<li>Free dynamically allocated memory</li>
<li>Use meaningful variable and function names</li>
<li>Include proper header files</li>
<li>Close all opened files</li>
<li>Use assertions for debugging</li>
<li>Follow K&R or Allman indentation style consistently</li>
</ul>

<p>C provides low-level control and high performance. It's the foundation for operating systems (Linux, Windows), embedded systems, and many modern languages.</p>
`,



'C#': `
<h3>C# Basics</h3>

<p>C# (C Sharp) is a modern, object-oriented programming language developed by Microsoft. It's part of the .NET ecosystem and designed for building robust applications.</p>

<p>C# is widely used for web development (ASP.NET), desktop apps (WPF/WinForms), games (Unity), mobile apps, and cloud services.</p>

<h4>C# Hello World</h4>

<pre>
using System;

class Program {
    static void Main(string[] args) {
        Console.WriteLine("Hello World");
    }
}
</pre>

<h4>Explanation of Each Part</h4>

<p><b>using System;</b> – Imports standard .NET namespace.</p>
<p><b>class Program</b> – Defines the main program class.</p>
<p><b>static void Main()</b> – Entry point of every C# application.</p>
<p><b>Console.WriteLine()</b> – Prints output to console.</p>

<h4>C# Variables</h4>

<pre>
int age = 25;
double price = 19.99;
char grade = 'A';
bool isActive = true;
string name = "John";
var inferred = "Inferred type";  // C# 3.0+
const int MAX = 100;             // Constant
</pre>

<h4>C# Data Types</h4>

<pre>
int integer = 100;          // 32-bit integer
long bigNum = 1000000L;     // 64-bit integer
float decimal = 10.5f;      // Single precision
double precise = 10.555;    // Double precision
decimal money = 19.99m;     // Decimal for finance
string text = "Hello";      // String
char letter = 'A';          // Character
bool flag = true;           // Boolean
</pre>

<h4>Basic Operations</h4>

<pre>
int a = 10, b = 5;
Console.WriteLine($"Sum: {a + b}");        // 15
Console.WriteLine($"Product: {a * b}");    // 50
Console.WriteLine($"Division: {a / b}");   // 2
Console.WriteLine($"Remainder: {a % b}");  // 0
</pre>

<h4>Conditional Statements</h4>

<pre>
int age = 18;

if(age >= 18) {
    Console.WriteLine("You can vote");
} else {
    Console.WriteLine("You cannot vote");
}
</pre>

<h4>Switch Statement</h4>

<pre>
int day = 1;
switch(day) {
    case 1:
        Console.WriteLine("Monday");
        break;
    case 2:
        Console.WriteLine("Tuesday");
        break;
    default:
        Console.WriteLine("Invalid day");
        break;
}
</pre>

<h4>Loops</h4>

<p><b>For Loop</b></p>

<pre>
for(int i = 0; i < 5; i++) {
    Console.Write(i + " ");
}
</pre>

<p><b>While Loop</b></p>

<pre>
int i = 0;
while(i < 5) {
    Console.Write(i + " ");
    i++;
}
</pre>

<p><b>Foreach Loop</b></p>

<pre>
string[] fruits = {"apple", "banana", "orange"};
foreach(string fruit in fruits) {
    Console.WriteLine(fruit);
}
</pre>

<h4>Methods (Functions)</h4>

<pre>
static int Add(int a, int b) {
    return a + b;
}

static void Main() {
    int result = Add(5, 3);
    Console.WriteLine(result);
}
</pre>

<h4>Arrays</h4>

<pre>
int[] numbers = {10, 20, 30, 40, 50};
Console.WriteLine(numbers[0]);  // 10

// Loop through array
foreach(int num in numbers) {
    Console.Write(num + " ");
}
</pre>

<h4>Lists (Dynamic Arrays)</h4>

<pre>
using System.Collections.Generic;

List<string> names = new List<string> {"John", "Jane"};
names.Add("Bob");
Console.WriteLine(names[0]);  // John
Console.WriteLine(names.Count);  // 3
</pre>

<h4>Strings</h4>

<pre>
string name = "John";
Console.WriteLine(name.Length);           // 4
Console.WriteLine(name.ToUpper());        // JOHN
Console.WriteLine(name.Substring(0, 3));  // Joh

// String interpolation (C# 6+)
string message = $"Hello {name}!";
</pre>

<h4>Classes and Objects</h4>

<pre>
public class Person {
    public string Name { get; set; }
    public int Age { get; set; }

    public Person(string name, int age) {
        Name = name;
        Age = age;
    }

    public void Introduce() {
        Console.WriteLine($"Hi, I'm {Name}, {Age} years old");
    }
}

class Program {
    static void Main() {
        Person p = new Person("John", 25);
        p.Introduce();
    }
}
</pre>

<h4>Inheritance</h4>

<pre>
public class Animal {
    public virtual void Speak() {
        Console.WriteLine("Animal speaks");
    }
}

public class Dog : Animal {
    public override void Speak() {
        Console.WriteLine("Woof!");
    }
}
</pre>

<h4>Interfaces</h4>

<pre>
public interface IShape {
    double Area();
}

public class Circle : IShape {
    public double Radius { get; set; }
    
    public double Area() {
        return Math.PI * Radius * Radius;
    }
}
</pre>

<h4>Collections</h4>

<pre>
using System.Collections.Generic;

Dictionary<string, int> ages = new Dictionary<string, int>();
ages["John"] = 25;
ages["Jane"] = 22;

foreach(var pair in ages) {
    Console.WriteLine($"{pair.Key}: {pair.Value}");
}
</pre>

<h4>File Handling</h4>

<pre>
using System.IO;

File.WriteAllText("data.txt", "Hello C#!");
string content = File.ReadAllText("data.txt");
Console.WriteLine(content);
</pre>

<h4>Exception Handling</h4>

<pre>
try {
    int result = 10 / 0;
} catch(DivideByZeroException ex) {
    Console.WriteLine("Cannot divide by zero: " + ex.Message);
} catch(Exception ex) {
    Console.WriteLine("Error: " + ex.Message);
}
</pre>

<h4>LINQ (Language Integrated Query)</h4>

<pre>
using System.Linq;

int[] numbers = {1, 2, 3, 4, 5};
var evenNumbers = numbers.Where(n => n % 2 == 0);
foreach(int num in evenNumbers) {
    Console.Write(num + " ");  // 2 4
}
</pre>

<h4>Async/Await (Modern C#)</h4>

<pre>
using System.Threading.Tasks;

static async Task Main(string[] args) {
    string result = await GetDataAsync();
    Console.WriteLine(result);
}

static async Task<string> GetDataAsync() {
    await Task.Delay(1000);  // Simulate async work
    return "Data loaded!";
}
</pre>

<h4>Best Practices</h4>

<ul>
<li>Use properties instead of public fields</li>
<li>Implement IDisposable for resources</li>
<li>Use async/await for I/O operations</li>
<li>Prefer LINQ for data queries</li>
<li>Use meaningful names (PascalCase for public members)</li>
<li>Handle exceptions specifically</li>
<li>Use StringBuilder for string concatenation in loops</li>
<li>Follow .NET naming conventions</li>
<li>Enable nullable reference types</li>
<li>Use records for immutable data (C# 9+)</li>
</ul>

<p>C# powers Unity games, Windows applications, Azure cloud services, and enterprise software worldwide.</p>
`
,


"C++": `
<h3>C++ Basics</h3>

<p>C++ is a general-purpose programming language created by Bjarne Stroustrup as an extension of C with object-oriented features.</p>

<p>C++ combines low-level memory manipulation with high-level abstractions, making it ideal for system programming, games, and performance-critical applications.</p>

<h4>C++ Hello World</h4>

<pre>
#include <iostream>
using namespace std;

int main() {
    cout << "Hello World" << endl;
    return 0;
}
</pre>

<h4>Explanation of Each Part</h4>

<p><b>#include <iostream></b> – Standard input/output library.</p>
<p><b>using namespace std;</b> – Brings standard library names into scope.</p>
<p><b>cout</b> – Standard output stream.</p>
<p><b><<</b> – Stream insertion operator.</p>
<p><b>endl</b> – Newline and flush.</p>

<h4>C++ Variables</h4>

<pre>
int age = 25;
double price = 19.99;
char grade = 'A';
bool isActive = true;
string name = "John";  // Requires #include <string>
</pre>

<h4>C++ Data Types</h4>

<pre>
int integer = 100;
float decimal = 10.5f;
double precise = 10.555;
char letter = 'Z';
bool flag = true;
unsigned int positive = 200u;
short smallInt = 100;
long long bigNum = 1000000000LL;
</pre>

<h4>Basic Operations</h4>

<pre>
int a = 10, b = 5;
cout << "Sum: " << (a + b) << endl;
cout << "Difference: " << (a - b) << endl;
cout << "Product: " << (a * b) << endl;
cout << "Division: " << (a / b) << endl;
</pre>

<h4>Conditional Statements</h4>

<pre>
int age = 18;

if(age >= 18) {
    cout << "You can vote" << endl;
} else {
    cout << "You cannot vote" << endl;
}
</pre>

<h4>Switch Statement</h4>

<pre>
int day = 1;
switch(day) {
    case 1:
        cout << "Monday" << endl;
        break;
    case 2:
        cout << "Tuesday" << endl;
        break;
    default:
        cout << "Invalid day" << endl;
}
</pre>

<h4>Loops</h4>

<p><b>For Loop</b></p>

<pre>
for(int i = 0; i < 5; i++) {
    cout << i << " ";
}
</pre>

<p><b>While Loop</b></p>

<pre>
int i = 0;
while(i < 5) {
    cout << i << " ";
    i++;
}
</pre>

<p><b>Range-based For Loop (C++11)</b></p>

<pre>
#include <vector>
vector<int> numbers = {1, 2, 3, 4, 5};
for(int num : numbers) {
    cout << num << " ";
}
</pre>

<h4>Functions</h4>

<pre>
int add(int a, int b) {
    return a + b;
}

int main() {
    cout << add(5, 3) << endl;
    return 0;
}
</pre>

<h4>Arrays</h4>

<pre>
int numbers[5] = {10, 20, 30, 40, 50};
cout << numbers[0] << endl;

// Loop through array
for(int i = 0; i < 5; i++) {
    cout << numbers[i] << " ";
}
</pre>

<h4>STL Vectors (Dynamic Arrays)</h4>

<pre>
#include <vector>
vector<int> vec = {1, 2, 3};
vec.push_back(4);           // Add element
cout << vec[0] << endl;     // Access
cout << vec.size() << endl; // Size
</pre>

<h4>Strings</h4>

<pre>
#include <string>
string name = "John";
cout << name.length() << endl;
cout << name.substr(0, 3) << endl;  // Joh
</pre>

<h4>Pointers</h4>

<pre>
int age = 25;
int* ptr = &age;

cout << "Value: " << *ptr << endl;
cout << "Address: " << ptr << endl;
</pre>

<h4>References</h4>

<pre>
int age = 25;
int& ref = age;  // Reference to age
ref = 30;        // Changes age to 30
cout << age << endl;  // 30
</pre>

<h4>Classes and Objects</h4>

<pre>
#include <string>
class Person {
private:
    string name;
    int age;

public:
    Person(string n, int a) : name(n), age(a) {}
    
    void display() {
        cout << name << " is " << age << endl;
    }
};

int main() {
    Person p("John", 25);
    p.display();
}
</pre>

<h4>Inheritance</h4>

<pre>
class Animal {
public:
    virtual void sound() {
        cout << "Animal sound" << endl;
    }
};

class Dog : public Animal {
public:
    void sound() override {
        cout << "Woof!" << endl;
    }
};
</pre>

<h4>Constructors and Destructors</h4>

<pre>
class Car {
private:
    string brand;

public:
    Car(string b) : brand(b) {
        cout << "Car created: " << brand << endl;
    }
    
    ~Car() {
        cout << "Car destroyed" << endl;
    }
};
</pre>

<h4>STL Containers</h4>

<pre>
#include <map>
map<string, int> ages;
ages["John"] = 25;
ages["Jane"] = 22;

for(auto& pair : ages) {
    cout << pair.first << ": " << pair.second << endl;
}
</pre>

<h4>File Handling</h4>

<pre>
#include <fstream>
#include <string>
ofstream file("data.txt");
file << "Hello C++!" << endl;
file.close();

// Reading
ifstream inFile("data.txt");
string line;
while(getline(inFile, line)) {
    cout << line << endl;
}
</pre>

<h4>Exception Handling</h4>

<pre>
try {
    throw runtime_error("Something went wrong");
} catch(exception& e) {
    cout << "Error: " << e.what() << endl;
}
</pre>

<h4>Templates (Generic Programming)</h4>

<pre>
template <typename T>
T maximum(T a, T b) {
    return (a > b) ? a : b;
}

int maxInt = maximum(5, 3);
double maxDouble = maximum(5.5, 3.2);
</pre>

<h4>Smart Pointers (C++11)</h4>

<pre>
#include <memory>
#include <string>
unique_ptr<string> ptr = make_unique<string>("Hello");
cout << *ptr << endl;
</pre>

<h4>Best Practices</h4>

<ul>
<li>Use smart pointers instead of raw pointers</li>
<li>Prefer const correctness</li>
<li>Use references instead of pointers when possible</li>
<li>Initialize all variables</li>
<li>Use RAII (Resource Acquisition Is Initialization)</li>
<li>Follow naming conventions (camelCase for functions, PascalCase for classes)</li>
<li>Use STL containers instead of arrays when possible</li>
<li>Enable all warnings during compilation</li>
<li>Use modern C++ features (C++11/14/17/20)</li>
</ul>

<p>C++ powers everything from operating systems (Windows), web browsers (Chrome), game engines (Unreal), to high-frequency trading systems.</p>
`

,


Bash: `
<h3>Bash Scripting Basics</h3>

<p>Bash (Bourne Again Shell) is the default command-line shell on most Linux distributions and macOS. Bash scripting automates system administration tasks.</p>

<p>Bash scripts are powerful for file manipulation, system monitoring, backups, deployments, and process automation.</p>

<h4>Bash Hello World</h4>

<pre>
#!/bin/bash
echo "Hello World"
</pre>

<h4>Explanation of Each Part</h4>

<p><b>#!/bin/bash</b> – Shebang tells system to use Bash interpreter.</p>
<p><b>echo</b> – Prints output to terminal.</p>

<h4>Running Bash Scripts</h4>

<pre>
chmod +x script.sh    # Make executable
./script.sh           # Run script
bash script.sh        # Run with bash
</pre>

<h4>Bash Variables</h4>

<pre>
name="John"
age=25
pi=3.14

echo "Name: $name"
echo "Age: $age"
echo "User: $USER"     # Environment variable
echo "Home: $HOME"     # Environment variable
</pre>

<h4>Command Substitution</h4>

<pre>
current_date=$(date)
current_user=$(whoami)
disk_usage=$(df -h /)

echo "Date: $current_date"
echo "User: $current_user"
echo "Disk: $disk_usage"
</pre>

<h4>Basic Operations</h4>

<pre>
a=10
b=5

echo $((a + b))  # 15
echo $((a - b))  # 5
echo $((a * b))  # 50
echo $((a / b))  # 2
echo $((a % b))  # 0
</pre>

<h4>Conditional Statements</h4>

<pre>
age=18

if [ $age -ge 18 ]; then
    echo "You can vote"
else
    echo "You cannot vote"
fi
</pre>

<h4>Test Conditions</h4>

<pre>
file="test.txt"

# File tests
[ -f "$file" ] && echo "File exists"
[ -d "/tmp" ] && echo "Directory exists"
[ -r "$file" ] && echo "File readable"

# String tests
[ -n "$name" ] && echo "Name is not empty"
[ "$name" = "John" ] && echo "Name is John"
</pre>

<h4>Case Statement</h4>

<pre>
day="Monday"

case $day in
    "Monday"|"Tuesday"|"Wednesday"|"Thursday"|"Friday")
        echo "Weekday"
        ;;
    "Saturday"|"Sunday")
        echo "Weekend"
        ;;
    *)
        echo "Invalid day"
        ;;
esac
</pre>

<h4>Loops</h4>

<p><b>For Loop</b></p>

<pre>
for i in {1..5}; do
    echo "Number: $i"
done
</pre>

<p><b>While Loop</b></p>

<pre>
i=1
while [ $i -le 5 ]; do
    echo "Count: $i"
    ((i++))
done
</pre>

<p><b>Loop over files</b></p>

<pre>
for file in *.txt; do
    echo "Processing: $file"
done
</pre>

<h4>Arrays</h4>

<pre>
fruits=("apple" "banana" "orange")
echo \${fruits[0]}     # apple
echo \${fruits[@]}     # All elements
echo \${#fruits[@]}    # Length (3)

# Loop through array
for fruit in "$\{fruits[@]}"; do
    echo "Fruit: $fruit"
done
</pre>

<h4>Functions</h4>

<pre>
greet() {
    echo "Hello $1"
}

add() {
    echo $(( $1 + $2 ))
}

greet "John"
add 5 3
</pre>

<h4>Positional Parameters</h4>

<pre>
echo "Script name: $0"
echo "First arg: $1"
echo "All args: $@"
echo "Number of args: $#"

# Shift arguments
echo "First: $1"
shift
echo "Second: $1"
</pre>

<h4>Reading Input</h4>

<pre>
echo "Enter your name: "
read name
echo "Hello $name"

# Read into multiple variables
echo "Enter name and age: "
read name age
echo "Name: $name, Age: $age"
</pre>

<h4>File Handling</h4>

<pre>
# Write to file
echo "Hello Bash" > output.txt

# Append to file
echo "Second line" >> output.txt

# Read file
while IFS= read -r line; do
    echo "Line: $line"
done < input.txt
</pre>

<h4>Input/Output Redirection</h4>

<pre>
command > file.txt      # stdout to file
command 2> error.txt    # stderr to file
command > file 2>&1     # both to file
command < file.txt      # stdin from file
command | grep "error"  # pipe output
</pre>

<h4>Here Documents</h4>

<pre>
cat << EOF > config.txt
server=localhost
port=8080
debug=true
EOF

cat config.txt
</pre>

<h4>Trap Signals</h4>

<pre>
cleanup() {
    echo "Cleaning up..."
    rm -f temp_file
    exit
}

trap cleanup INT TERM EXIT

echo "Running... (Ctrl+C to exit)"
sleep 10
</pre>

<h4>Best Practices</h4>

<ul>
<li>Always use <code>#!/bin/bash</code> shebang</li>
<li>Quote variables: <code>"$var"</code></li>
<li>Use <code>${'var'}</code> for clarity</li>
    <><li>Make scripts executable: <code>chmod +x script.sh</code></li><li>Use functions for reusable code</li><li>Check exit codes: <code>if command; then...</code></li><li>Use descriptive variable names</li><li>Comment complex logic</li><li>Test scripts thoroughly</li><li>Set <code>set -euo pipefail</code> for strict mode</li></>
</ul>

<p>Bash scripting is essential for Linux system administration, DevOps, and automation. Master these fundamentals to automate repetitive tasks efficiently.</p>
`




};


// ======================
// VIDEOS
// ======================

const videos = {

"HTML": "https://www.youtube.com/embed/HcOc7P5BMi4",

"CSS": "https://www.youtube.com/embed/ESnrn1kAD4E",

"JavaScript": "https://www.youtube.com/embed/ajdRvxDWH4w",

"TypeScript": "https://www.youtube.com/embed/BwuLxPH8IDs",

"Python": "https://www.youtube.com/embed/rfscVS0vtbw",

"Java": "https://www.youtube.com/embed/eIrMbAQSU34",

"PHP": "https://www.youtube.com/embed/OK_JCtrrv-c",

"Ruby": "https://www.youtube.com/embed/t_ispmWmdjY",

"Go": "https://www.youtube.com/embed/YS4e4q9oBaU",

"NodeJS": "https://www.youtube.com/embed/TlB_eWDSMt4",

"SQL": "https://www.youtube.com/embed/HXV3zeQKqGY",

"C": "https://www.youtube.com/embed/KJgsSFOSQv0",

"C++": "https://www.youtube.com/embed/vLnPwxZdW4Y",

"C#": "https://www.youtube.com/embed/GhQdlIFylQ8",

"Bash": "https://www.youtube.com/embed/tK9Oc6AEnR4"

};

// ======================
// SHOW CATEGORY
// ======================

function showCategory(category){

document.getElementById("category-section").style.display="none";

document.getElementById("frontend-courses").style.display="none";
document.getElementById("backend-courses").style.display="none";
document.getElementById("programming-courses").style.display="none";
document.getElementById("database-courses").style.display="none";

document.getElementById(category + "-courses").style.display="grid";

}


// ======================
// SHOW COURSE
// ======================

function showCourse(course){

document.getElementById("workspace").style.display="block";

document.getElementById("courseTitle").innerText = course + " Course";

document.getElementById("notesContainer").innerHTML =
courseNotes[course] || "<p>Notes coming soon</p>";

const video = videos[course];

if(video){

document.getElementById("videoContainer").innerHTML = `
<iframe src="${video}" frameborder="0" allowfullscreen></iframe>
`;

}else{

document.getElementById("videoContainer").innerHTML =
"<p>Video coming soon</p>";

}

}


// ======================
// DARK MODE
// ======================

function toggleTheme(){
document.body.classList.toggle("dark");
}

function goBack(){

document.getElementById("workspace").style.display="none";

document.getElementById("frontend-courses").style.display="none";
document.getElementById("backend-courses").style.display="none";
document.getElementById("programming-courses").style.display="none";
document.getElementById("database-courses").style.display="none";

document.getElementById("category-section").style.display="grid";

window.scrollTo({
top:0,
behavior:"smooth"
});

}
