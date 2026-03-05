// ======================
// COURSE NOTES
// ======================

const courseNotes = {

HTML: `
<h3>HTML Basics</h3>
<p>HTML structures webpages.</p>

<pre>
<!DOCTYPE html>
<html>
<body>
<h1>Hello World</h1>
</body>
</html>
</pre>
`,

CSS: `
<h3>CSS Basics</h3>

<pre>
body{
background:black;
color:white;
}
</pre>
`,

JavaScript: `
<h3>JavaScript</h3>

<pre>
function hello(){
alert("Hello");
}
</pre>
`,

Python: `
<h3>Python</h3>

<pre>
print("Hello World")
</pre>
`,

Java: `
<h3>Java</h3>

<pre>
class Hello{
public static void main(String[] args){
System.out.println("Hello");
}
}
</pre>
`,

SQL: `
<h3>SQL</h3>

<pre>
SELECT * FROM users;
</pre>
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
