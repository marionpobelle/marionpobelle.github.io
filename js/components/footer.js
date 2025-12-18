var html = `
<link rel="stylesheet" href="/css/footer.css">
<div id="background-footer"></div>
<div class="footerIcons">
    <a href="https://github.com/marionpobelle" target="_blank">
        <img src="../../../img/icons/github-icon.png" alt="" onmouseover="this.src='../../../img/icons/github-icon-hovered.png'" onmouseout="this.src='../../../img/icons/github-icon.png';" class="icon-social-media">
    </a>

    <a href="https://zizelexe.itch.io/" target="_blank">
        <img src="../../../img/icons/itchio-icon.png" alt="" onmouseover="this.src='../../../img/icons/itchio-icon-hovered.png'" onmouseout="this.src='../../../img/icons/itchio-icon.png';" class="icon-social-media">
    </a>

    <a href="https://www.linkedin.com/in/marion-pobelle-07639224b/" target="_blank">
        <img src="../../../img/icons/linkedin-icon.png" alt="" onmouseover="this.src='../../../img/icons/linkedin-icon-hovered.png'" onmouseout="this.src='../../../img/icons/linkedin-icon.png';" class="icon-social-media">
    </a>
</div>
<p>© 2025 Marion Pobelle</p>
`
document.getElementById("footer").innerHTML = html;
