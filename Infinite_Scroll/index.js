window.onload = () => {
    loadItems();
}
var container = document.getElementById("cont");
var item = 1;
function loadItems() {
    for(var i=0; i<25; i++) {
        var h1 = document.createElement("h1");
        h1.textContent = "Masai Student "+ (item++);
        h1.style.marginBottom = "15px";
        container.appendChild(h1);
    }
}
container.addEventListener("scroll", () => {
    if(container.scrollTop > container.clientHeight) {
        loadItems();
    }
});