var ham = document.getElementById("hamburg");
var sidebar = document.getElementById("sidebar");
var cross = document.getElementById("cross");

ham.onclick = () => {
    sidebar.classList.toggle("sideopen");
}

cross.onclick = () => {
    sidebar.classList.toggle("sideopen");
}