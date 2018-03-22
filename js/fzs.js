function ctxWsyw(){
  document.getElementById("loading").style.display = "block"
  var c = document.getElementById("cvs");
  // 获取绘制上下文
  var ctx = c.getContext("2d");
  
  var gif = new GIF({
    workers: 2,
    quality: 10,
    width: 300,
    height: 170,
    workerScript:'./gif.worker.js'
  });
  var arr = []
  var ctxArr = []
  var ctx = []
  for(let i = 0 ; i < 52 ; i++){
    var image = new Image()
    image.src = `./img/fzs/${i}.jpg`
    arr[i] = image
  }
  var c = document.getElementById("cvs");
  ctx = c.getContext("2d")
  setTimeout(function(){
    console.log(arr)
    let i = 0
    let j = 0
    function render() {
      ctx.drawImage(arr[i],0,0)
      ctx.rect(0,145,300,30);
      ctx.fillStyle = "black"
      ctx.fill();
      if(i < 10){
        ctx.fillStyle = "white"
        ctx.font="16px Arial"
        ctx.fillText(document.getElementById("fzs1").value,100,165)
      }
      else if(i >= 11 && i < 26){
        ctx.fillStyle = "white"
        ctx.fillText(document.getElementById("fzs2").value,80,165)
      }
      else if(i >= 26 && i < 36){
        ctx.fillStyle = "white"
        ctx.fillText(document.getElementById("fzs3").value,80,165)
      }
      else if(i >= 36 && i < 52){
        ctx.fillStyle = "white"
        ctx.fillText(document.getElementById("fzs4").value,80,165)
      }
      requestAnimationFrame(render)
      i++;
      console.log(i)
      if(i >= 51)
        document.getElementById("loading").style.display = "none" 
    }
    render()
    for(let j = 0 ; j < 52 ; j++){
      gif.addFrame(ctx,{delay: 120})
    }
    gif.on('finished', function(blob) {
      document.getElementById("output").src = URL.createObjectURL(blob)
    });
    gif.render();

  },800)
  
}