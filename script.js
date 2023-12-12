let container = document.getElementById('container')
let count = 60;
for (var i = 0; i < 60; i++){
  /* tạo random vị trí tuyết */
  let leftSnow = Math.floor(Math.random() * container.clientWidth);
  let topSnow = Math.floor(Math.random() * container.clientHeight);
  let widthSnow = Math.floor(Math.random() * 60);
  let timeSnow = Math.floor((Math.random() * 5) + 5);
  let blurSnow = Math.floor(Math.random() * 10);
  /* tạo 1 cái div mỗi vòng lặp*/
  let div = document.createElement('div');

  /* tạo 1 cái list */ 
  div.classList.add('snow');

  div.style.left = leftSnow + 'px';
  div.style.top = topSnow + 'px';
  div.style.width = widthSnow + 'px';
  div.style.height = widthSnow + 'px';
  div.style.animationDuration = timeSnow + 's'
  div.style.filter = "blur(" + blurSnow + "px)";
  /* thêm mỗi div vào id container */
  container.appendChild(div);


}