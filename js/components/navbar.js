var html = `
<link rel="stylesheet" href="/css/navbar.css">
<div id="background-navbar"></div>
<ul class="nav-ul">
    <li class="nav-link" id="home"><a href="/index.html">Home</a></li>
    <li class="nav-link" id="profprojects"><a href="/html/projects/professional-projects.html">Professional projects</a></li>
    <li class="nav-link" id="persoprojects"><a href="/html/projects/personal-projects.html">Personal projects</a></li>
    <li class="nav-link" id="about"><a href="/html/about.html">About</a></li>
    <li class="nav-link" id="resume"><a href="/html/resume.html">Resume</a></li>
</ul>`

document.getElementById("navbar").innerHTML = html;

var navElem;
if (window.location.pathname.endsWith('/index.html') || window.location.pathname.endsWith('/'))
{
    navElem = document.getElementById("home");
    navElem.className += " active";
}
else if(window.location.pathname.endsWith('/professional-projects.html')
|| window.location.pathname.endsWith('/mirage-miracle-quest.html')
|| window.location.pathname.endsWith('/along-the-swamp.html')
)
{
    navElem = document.getElementById("profprojects");
    navElem.className += " active"; 
}
else if(window.location.pathname.endsWith('/resume.html'))
{
    navElem = document.getElementById("resume");
    navElem.className += " active"; 
}
else if(window.location.pathname.endsWith('/about.html'))
{
    navElem = document.getElementById("about");
    navElem.className += " active"; 
}
else if(window.location.pathname.endsWith('/personal-projects.html')
|| window.location.pathname.endsWith('/aerial.html')
|| window.location.pathname.endsWith('/slinghost.html')
|| window.location.pathname.endsWith('/desktop-pet.html')
|| window.location.pathname.endsWith('/costellation.html')
|| window.location.pathname.endsWith('/puppy-guards.html')
|| window.location.pathname.endsWith('/ar-mare.html')
)
{
    navElem = document.getElementById("persoprojects");
    navElem.className += " active"; 
}