var slider = document.getElementById("grid-range");
var gridSize = document.getElementById("grid-name");
var grid = 16;
var canvas = document.getElementById('canvas');
var rainbowBtn = document.querySelector('.rainbowbtn');
var grayBtn = document.querySelector('.graybtn');
var lightBtn = document.querySelector('.lightbtn');
var clearBtn = document.querySelector('.clearbtn');
var eraseBtn = document.querySelector('.erasebtn');
var newBtn = document.querySelector('.newbtn');
var selectedColor = 'ColorPicker';
populateCanvas(grid);

slider.oninput = function(){
    gridSize.innerHTML = ` ${this.value} X ${this.value}`;
}
slider.addEventListener('mouseup',()=>{
    grid = slider.value;
    var squares = document.querySelectorAll('#canvas > div.square');
    squares.forEach((square) => square.remove());
    populateCanvas(grid);
});

var color = document.getElementById("colour");
var colorPicked = 'black';
color.addEventListener('input', ()=>{
    colorPicked = color.value;
    selectedColor = 'ColorPicker';
})
color.addEventListener('click', ()=>{
  colorPicked = color.value;
  selectedColor = 'ColorPicker';
})


function populateCanvas(size){
    
    for(let i = 0 ; i < size; i++){
        for(var j = 0; j < size; j++){
            var div = document.createElement("div");
            div.classList.add("square");
            div.style['flex-basis'] = 570/size + 'px';
            div.style['height'] = 570/size + 'px';
            div.style.backgroundColor = 'white';
            div.style.outline = '1px solid black';
            div.setAttribute("data-alpha", "0.1");
            div.addEventListener('mouseover',chooseBoxColors);
            canvas.appendChild(div);
        }
   }

}
rainbowBtn.addEventListener('click', function(){
   selectedColor = 'rainbow';
});
grayBtn.addEventListener('click', function(){
    selectedColor = 'gray';
 });
 lightBtn.addEventListener('click', function(){
    selectedColor = 'light';
 });
 clearBtn.addEventListener('click', function(){
  selectedColor = 'clear';
});
eraseBtn.addEventListener('click', function(){
  selectedColor = 'erase';
});
 newBtn.addEventListener('click', function(){
    grid = slider.value;
    var squares = document.querySelectorAll('#canvas > div.square');
    squares.forEach((square) => square.remove());
    populateCanvas(grid);
 });
function chooseBoxColors(e){
   if(selectedColor === 'rainbow'){
      var randomColor = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
      this.style.backgroundColor = randomColor;
      this.style.opacity = 1;
   }else if(selectedColor === 'gray'){
      e.target.style.backgroundColor = 'black';
      let opacity = Number(e.target.style.opacity);
      if(opacity == 1 ){
         e.target.style.opacity = 0.1;
      }

      if(opacity < 1){
         e.target.style.opacity = opacity + 0.1;
         
      }
      
   }else if(selectedColor === 'light'){
      let opacity = Number(e.target.style.opacity);
      if(opacity > 0){
         e.target.style.opacity = opacity - 0.1;
         
      }  
   
   }else if(selectedColor === 'clear'){
      canvas.querySelectorAll('div').forEach((square) => {
         square.style.backgroundColor = 'white';
         square.style.opacity = 1;
      }
      );
   }else if(selectedColor === 'erase'){
      this.style.backgroundColor = 'white';
   }else{
      colorPicked = color.value;
      this.style.backgroundColor = colorPicked;
      this.style.opacity = 1;
   }
}

