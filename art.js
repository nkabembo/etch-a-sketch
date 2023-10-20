var slider = document.getElementById("grid-range");
var gridSize = document.getElementById("grid-name");
var grid = 16;
populateCanvas(grid);

slider.oninput = function(){
    gridSize.innerHTML = ` ${this.value} X ${this.value}`;
    grid = this.value;
    removeSquares();
    populateCanvas(grid);
}

var color = document.getElementById("colour");
var colorPicked;
color.addEventListener('input', ()=>{
    colorPicked = color.value;
})

function populateCanvas(size){
    var canvas = document.getElementById('canvas');
    for(let i = 0 ; i < size; i++){
        for(var j = 0; j < size; j++){
            var div = document.createElement("div");
            div.classList.add("square");
            div.innerHTML="<p>" + i + "</p>";
            div.style['flex-basis'] = 100/size + '%';
            div.style['height'] = 100/size + '%'
            canvas.appendChild(div);
        }
   }

}
//div.style['background-color']='#'+(Math.random()*0xFFFFFF<<0).toString(16);