let videoGameElements = [];
let videoGameLinks = [];
let videoGameContainer = document.getElementById("video-game-container");
var videoGameTemplate = document.getElementById("video-game-row");

for (let i = 0; i < videoGameDatas.length; i++) {
  
  var clone = document.importNode(videoGameTemplate.content, true);
  clone.querySelectorAll("h3")[0].textContent = videoGameDatas[i].name; 
  clone.querySelectorAll("h4")[0].textContent = videoGameDatas[i].type; 
  clone.querySelectorAll("h6")[0].textContent = videoGameDatas[i].timeline; 
  clone.querySelectorAll("p")[0].textContent = videoGameDatas[i].description; 
  clone.querySelectorAll("h5")[0].textContent = videoGameDatas[i].role; 
  clone.querySelectorAll("img")[0].src = videoGameDatas[i].image1; 
  clone.querySelectorAll("a")[0].href = videoGameDatas[i].link; 
  clone.children[0].setAttribute("class", "div-row video-game-row object-to-filter text-zone " + videoGameDatas[i]["filter-type"]);
  if (videoGameDatas[i]["tags"] != "") 
  {
    for (let j = 0; j < videoGameDatas[i].tags.length; j++) 
    {
      tag = document.createElement("b");
      tag.innerHTML = videoGameDatas[i].tags[j];
      if (tag.innerHTML == "Steam" || tag.innerHTML == "Wholesome Games 2025" || tag.innerHTML == "Wholesome Snack 2025") tag.setAttribute("class", "important-tag");
      clone.querySelectorAll(".tag-list")[0].appendChild(tag);
    }
  }
  videoGameContainer.appendChild(clone);

  continue;
}