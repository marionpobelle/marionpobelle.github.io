let blogElements = [];
let blogLinks = [];
let blogContainer = document.getElementById("video-game-container");
var blogTemplate = document.getElementById("video-game-row");

for (let i = 0; i < blogDatas.length; i++) {
  
  var clone = document.importNode(blogTemplate.content, true);
  clone.querySelectorAll("h3")[0].textContent = blogDatas[i].name; 
  clone.querySelectorAll("h6")[0].textContent = blogDatas[i].timeline; 
  clone.querySelectorAll("p")[0].textContent = blogDatas[i].description; 
  clone.querySelectorAll("img")[0].src = blogDatas[i].image1; 
  clone.querySelectorAll("a")[0].href = blogDatas[i].link; 
  clone.children[0].setAttribute("class", "div-row video-game-row object-to-filter text-zone " + blogDatas[i]["filter-type"]);
  if (blogDatas[i]["tags"] != "") 
  {
    for (let j = 0; j < blogDatas[i].tags.length; j++) 
    {
      tag = document.createElement("b");
      tag.innerHTML = blogDatas[i].tags[j];
      if (tag.innerHTML == "Steam" || tag.innerHTML == "Wholesome Games 2025" || tag.innerHTML == "Wholesome Snack 2025") tag.setAttribute("class", "important-tag");
      clone.querySelectorAll(".tag-list")[0].appendChild(tag);
    }
  }
  blogContainer.appendChild(clone);

  continue;
}