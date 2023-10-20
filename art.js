var slider = document.getElementById("grid-range");
var gridSize = document.getElementById("grid-name");

slider.oninput = function(){
    gridSize.innerHTML = ` ${this.value} X ${this.value}`;
}