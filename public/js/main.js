function make(){
  if(document.getElementById("wsyw").style.display == "block")
    this.ctxWsyw(124)
  else if(document.getElementById("fzs").style.display == "block")
    this.ctxFzs(51)
}
// 饭真香
function ctxFzs(num){
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
  for(let i = 0 ; i < num ; i++){
    var image = new Image()
    image.src = `./img/fzs/${i}.jpg`
    arr[i] = image
  }
  var c = document.getElementById("cvs");
  ctx = c.getContext("2d")
  setTimeout(function(){
    let i = 0
    let j = 0
    function render() {
      ctx.drawImage(arr[i],0,0)
      ctx.rect(0,145,300,30);
      ctx.fillStyle = "black"
      ctx.fill();
      if(i < 15){
        ctx.fillStyle = "white"
        ctx.font="16px Arial"
        ctx.fillText(document.getElementById("fzs1").value,100,165)
      }
      else if(i >= 15 && i < 30){
        ctx.fillStyle = "white"
        ctx.fillText(document.getElementById("fzs2").value,100,165)
      }
      else if(i >= 30 && i < 42){
        ctx.fillStyle = "white"
        ctx.fillText(document.getElementById("fzs3").value,100,165)
      }
      else if(i >= 42 && i < 52){
        ctx.fillStyle = "white"
        ctx.fillText(document.getElementById("fzs4").value,100,165)
      }
      requestAnimationFrame(render)
      i++;
      if(i >= num)
        document.getElementById("loading").style.display = "none" 
    }
    render()
    for(let j = 0 ; j < num ; j++){
      gif.addFrame(ctx,{delay: 167})
    }
    gif.on('finished', function(blob) {
      document.getElementById("output").src = URL.createObjectURL(blob)
    });
    gif.render();

  },1500)
  
}

//为所欲为
function ctxWsyw(num){
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
  for(let i = 0 ; i < num ; i++){
    var image = new Image()
    image.src = `./img/wsyw/${i}.jpg`
    arr[i] = image
  }
  var c = document.getElementById("cvs");
  ctx = c.getContext("2d")
  setTimeout(function(){
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
        ctx.fillText(document.getElementById("wsyw1").value,100,165)
      }
      else if(i >= 20 && i < 33){
        ctx.fillStyle = "white"
        ctx.fillText(document.getElementById("wsyw2").value,80,165)
      }
      else if(i >= 33 && i < 46){
        ctx.fillStyle = "white"
        ctx.fillText(document.getElementById("wsyw3").value,80,165)
      }
      else if(i >= 46 && i < 62){
        ctx.fillStyle = "white"
        ctx.fillText(document.getElementById("wsyw4").value,80,165)
      }
      else if(i >= 62 && i < 72){
        ctx.fillStyle = "white"
        ctx.fillText(document.getElementById("wsyw5").value,80,165)
      }
      else if(i >= 72 && i < 80){
        ctx.fillStyle = "white"
        ctx.fillText(document.getElementById("wsyw6").value,80,165)
      }
      else if(i >= 84 && i < 96){
        ctx.fillStyle = "white"
        ctx.fillText(document.getElementById("wsyw7").value,80,165)
      }
      else if(i >= 96 && i < 115){
        ctx.fillStyle = "white"
        ctx.fillText(document.getElementById("wsyw8").value,80,165)
      }
      else if(i >= 115 && i < 124){
        ctx.fillStyle = "white"
        ctx.fillText(document.getElementById("wsyw9").value,80,165)
      }
      requestAnimationFrame(render)
      i++;
      if(i >= num)
        document.getElementById("loading").style.display = "none" 
    }
    render()
    for(let j = 0 ; j < num ; j++){
      gif.addFrame(ctx,{delay: (10000/document.getElementById("zs").value)})
    }
    gif.on('finished', function(blob) {
      document.getElementById("output").src = URL.createObjectURL(blob)
    });
    gif.render();

  },1500)
  
}

function changeToFzs(){
  document.getElementById("wsyw").style.display = "none"
  document.getElementById("fzs").style.display = "block"
  
}

function changeToWsyw(){
  document.getElementById("fzs").style.display = "none"
  document.getElementById("wsyw").style.display = "block"
}